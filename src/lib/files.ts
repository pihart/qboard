import { fabric } from "fabric";
import { Assert, IsSubType } from "@mehra/ts";

import { HistoryCommand } from "./history";
import Pages, { PageJSON } from "./pages";
import { Cursor } from "./page";

export class AsyncReader {
  static readAsText = (file: File): Promise<string | ArrayBuffer> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });

  static readAsDataURL = (file: File): Promise<string | ArrayBuffer> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
}

/**
 * Common to _all_ versions of exports
 */
interface QboardFile {
  "qboard-version": number;
  pages: PageJSON[];
}

const isValidQboardFile = (object: unknown): object is QboardFile => {
  if (object instanceof Object) {
    return "qboard-version" in object;
  }
  return false;
};

/**
 * The current qboard file format
 */
interface CurrentQboardFile {
  "qboard-version": 1;
  pages: PageJSON[];
}

/**
 * @test Ensure that {@link CurrentQboardFile} is a subtype of {@link QboardFile}
 */
{
  // Inline test because ts doesn't let an interface implement another interface
  // Technically outputs to JS but it gets optimized out by both the minifier and the optimizing compiler
  const _test_compatible_file_fmt: IsSubType<
    CurrentQboardFile,
    QboardFile
  > = true;
}

// manages version compatibility with old document formats
// change the signature and usages to accommodate new data; this will fill in sample data for missing fields
export class JSONReader {
  static async read(json: Promise<string | ArrayBuffer>): Promise<PageJSON[]> {
    const object: unknown = JSON.parse((await json).toString());
    Assert(isValidQboardFile(object));
    return object.pages;
  }
}

export class JSONWriter {
  private readonly sourceJSON: CurrentQboardFile;
  private stringified: string;

  constructor(pagesJSON: PageJSON[]) {
    this.sourceJSON = {
      "qboard-version": 1,
      pages: pagesJSON,
    };
  }

  toString = (): string => {
    if (this.stringified !== undefined) return this.stringified;
    this.stringified = JSON.stringify(this.sourceJSON);
    return this.stringified;
  };

  toBlob = (): Blob =>
    new Blob([this.toString()], { type: "application/json" });

  toURL = (): [string, () => void] => {
    const url = window.URL.createObjectURL(this.toBlob());
    const revoke = () => window.URL.revokeObjectURL(url);
    return [url, revoke];
  };
}

export type FileHandlerResponse = {
  action: "none" | "image" | "json";
  history?: HistoryCommand;
};

export default class FileHandler {
  constructor(public pages: Pages) {}

  processFiles = async (
    files: FileList,
    cursor?: Cursor
  ): Promise<HistoryCommand> => {
    const images = [];
    await Promise.all(
      [...files].map(async (file) => {
        if (file.type.startsWith("image/")) {
          images.push(await this.handleImage(file, cursor));
        }
        if (file.type === "application/json") {
          return this.handleJSON(file);
        }
      })
    );
    return {
      add: images.flat(),
    };
  };

  acceptFile = async (
    files: FileList,
    cursor?: Cursor
  ): Promise<FileHandlerResponse> => {
    if (!files.length) return { action: "none" };
    const [file] = files;

    if (file.type.startsWith("image/")) {
      return {
        action: "image",
        history: { add: await this.handleImage(file, cursor) },
      };
    }

    if (file.type === "application/json") {
      await this.openFile(file);
      return {
        action: "json",
        history: { clear: [true] },
      };
    }

    // unsupported file
    return { action: "none" };
  };

  openFile = async (file: File): Promise<boolean> => {
    this.pages.savePage();
    return this.pages.overwritePages(
      await JSONReader.read(AsyncReader.readAsText(file))
    );
  };

  private handleImage = async (
    file: File,
    cursor?: Cursor
  ): Promise<fabric.Object[]> =>
    new Promise<fabric.Object[]>((resolve) =>
      AsyncReader.readAsDataURL(file).then((result) =>
        fabric.Image.fromURL(result.toString(), (obj: fabric.Image) => {
          resolve(this.pages.canvas.placeObject(obj, cursor));
        })
      )
    );

  private handleJSON = async (file: File): Promise<number> => {
    const pages = await JSONReader.read(AsyncReader.readAsText(file));
    return this.pages.insertPages(this.pages.currentIndex + 1, pages);
  };
}
