import { fabric } from "fabric";

class Behaviors {
  // given the origin x, y, snaps the point x2, y2 to the nearest vector in dirs
  static rectify = (
    dirs: number[][],
    x: number,
    y: number,
    x2: number,
    y2: number
  ): number[] => {
    return dirs
      .map((d) => Behaviors.project(x, y, d[0], d[1], x2, y2))
      .reduce((acc, cur) => (acc[0] < cur[0] ? acc : cur));
  };

  // projects the point x2, y2 to the vector with origin ox, oy and direction vx, vy. returns the square distance and the coordinates of the projection.
  private static project = (
    ox: number,
    oy: number,
    vx: number,
    vy: number,
    x2: number,
    y2: number
  ): number[] => {
    const x = x2 - ox;
    const y = y2 - oy;
    const side = vx * y - vy * x;
    const sq = vx * vx + vy * vy;
    return [
      Math.abs(side) / sq,
      ox + x + (vy * side) / sq,
      oy + y - (vx * side) / sq,
    ];
  };
}

export class ToolHandler {
  isBrush: boolean;
  readonly isDrawing: boolean;
  readonly requiresBase: boolean;
  draw: (
    x: number,
    y: number,
    options: fabric.IObjectOptions,
    x2?: number,
    y2?: number
  ) => fabric.Object | Promise<fabric.Object>;
  resize: (
    object: fabric.Object,
    x2: number,
    y2: number,
    strict: boolean
  ) => fabric.Object | Promise<fabric.Object>;
  private active: boolean;

  constructor(protected baseCanvas, protected history, protected clipboard) {}

  setBrush: (
    brush: fabric.BaseBrush,
    options: fabric.IObjectOptions
  ) => void | Promise<void> = () => {};

  pathCreated: (e: any) => void | Promise<void> = () => {};
  activate: () => boolean | Promise<boolean> = () => (this.active = true);
  deactivate: () => void = () => (this.active = false);
  isActive = () => this.active;
}

export class MoveHandler extends ToolHandler {
  isBrush = false;
  requiresBase = true;
}

export class PenHandler extends ToolHandler {
  isBrush = true;

  pathCreated = async (e: any) => {
    e.path.id = await this.baseCanvas.getNextId();
    return this.history.add([e.path]);
  };
  setBrush = (brush: fabric.BaseBrush, options: fabric.IObjectOptions) => {
    brush.color = options.stroke;
    brush.strokeDashArray = options.strokeDashArray;
    brush.width = options.strokeWidth;
  };
}

export class EraserHandler extends ToolHandler {
  isBrush = true;

  pathCreated = async (e: any) => {
    const path = fabric.util.object.clone(e.path);
    this.baseCanvas.remove(e.path);
    const objects = this.baseCanvas
      .getObjects()
      .filter((object) => object.intersectsWithObject(path));
    if (!objects.length) return;
    this.baseCanvas.remove(...objects);
    await this.history.remove(objects);
  };

  setBrush = (brush: fabric.BaseBrush, options: fabric.IObjectOptions) => {
    brush.color = "#ff005455";
    brush.strokeDashArray = [0, 0];
    brush.width = 5 * options.strokeWidth;
  };

  activate = async () => (await this.clipboard.cut()) && super.activate();
}

export class LaserHandler extends ToolHandler {
  isBrush = true;

  pathCreated = (e: any) => {
    setTimeout(async () => {
      this.baseCanvas.remove(e.path);
      this.baseCanvas.requestRenderAll();
    }, 1000);
  };
  setBrush = (brush: fabric.BaseBrush, options: fabric.IObjectOptions) => {
    brush.color = "#f23523";
    brush.strokeDashArray = [0, 0];
    brush.width = options.strokeWidth;
  };
}

export class LineHandler extends ToolHandler {
  isBrush = false;
  x: number;
  y: number;

  dirs: number[][] = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];

  draw = (
    x: number,
    y: number,
    options: fabric.IObjectOptions,
    x2?: number,
    y2?: number
  ): fabric.Line => {
    this.x = x;
    this.y = y;

    return new fabric.Line([x, y, x2, y2], {
      ...options,
      perPixelTargetFind: true,
    });
  };

  resize = (
    object: fabric.Line,
    x2: number,
    y2: number,
    strict: boolean
  ): fabric.Line => {
    let [x, y] = [x2, y2];
    if (strict) {
      [, x, y] = Behaviors.rectify(this.dirs, this.x, this.y, x2, y2);
    }
    object.set({ x2: x, y2: y }).setCoords();
    return object;
  };
}

export class RectangleHandler extends ToolHandler {
  isBrush = false;
  x: number;
  y: number;

  dirs: number[][] = [
    [1, 1],
    [-1, 1],
  ];

  draw = (
    x: number,
    y: number,
    options: fabric.IObjectOptions,
    x2?: number,
    y2?: number
  ): fabric.Rect => {
    this.x = x;
    this.y = y;

    return new fabric.Rect({
      left: x,
      top: y,
      width: x2,
      height: y2,
      ...options,
    });
  };

  resize = (
    object: fabric.Rect,
    x2: number,
    y2: number,
    strict: boolean
  ): fabric.Rect => {
    let [x, y] = [x2, y2];
    if (strict) {
      [, x, y] = Behaviors.rectify(this.dirs, this.x, this.y, x2, y2);
    }
    object
      .set({
        originX: this.x > x ? "right" : "left",
        originY: this.y > y ? "bottom" : "top",
        width: Math.abs(this.x - x),
        height: Math.abs(this.y - y),
      })
      .setCoords();

    return object;
  };
}

export class EllipseHandler extends ToolHandler {
  isBrush = false;
  x: number;
  y: number;

  dirs: number[][] = [
    [1, 1],
    [-1, 1],
  ];

  draw = (
    x: number,
    y: number,
    options: fabric.IObjectOptions,
    x2?: number,
    y2?: number
  ): fabric.Ellipse => {
    this.x = x;
    this.y = y;

    return new fabric.Ellipse({ ...options, left: x, top: y, rx: x2, ry: y2 });
  };

  resize = (
    object: fabric.Ellipse,
    x2: number,
    y2: number,
    strict: boolean
  ): fabric.Ellipse => {
    let [x, y] = [x2, y2];

    if (strict) {
      [, x, y] = Behaviors.rectify(this.dirs, this.x, this.y, x2, y2);
    }
    object
      .set({
        originX: this.x > x ? "right" : "left",
        originY: this.y > y ? "bottom" : "top",
        rx: Math.abs(x - object.left) / 2,
        ry: Math.abs(y - object.top) / 2,
      })
      .setCoords();

    return object;
  };
}

export default class Handlers {
  static from = (baseCanvas, history, clipboard) => ({
    Move: new MoveHandler(baseCanvas, history, clipboard),
    Pen: new PenHandler(baseCanvas, history, clipboard),
    Eraser: new EraserHandler(baseCanvas, history, clipboard),
    Laser: new LaserHandler(baseCanvas, history, clipboard),
    Line: new LineHandler(baseCanvas, history, clipboard),
    Rectangle: new RectangleHandler(baseCanvas, history, clipboard),
    Ellipse: new EllipseHandler(baseCanvas, history, clipboard),
  });
}