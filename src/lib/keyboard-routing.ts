type Modifier = "alt" | "command" | "ctrl" | "shift";

export type ShortcutEvent = Pick<
  KeyboardEvent,
  "altKey" | "ctrlKey" | "metaKey" | "shiftKey"
> & {
  preventDefault: () => void;
  target: EventTarget | null;
};

const modifierProperties: Record<Modifier, keyof ShortcutEvent> = {
  alt: "altKey",
  command: "metaKey",
  ctrl: "ctrlKey",
  shift: "shiftKey",
};

const editableTags = new Set(["INPUT", "SELECT", "TEXTAREA"]);

const isEditable = (target: EventTarget | null): boolean => {
  if (target === null || typeof target !== "object") return false;

  const element = target as {
    isContentEditable?: boolean;
    tagName?: string;
  };

  return (
    element.isContentEditable === true ||
    editableTags.has(element.tagName?.toUpperCase() ?? "")
  );
};

export const shouldHandleShortcut = (
  key: string,
  event: ShortcutEvent,
): boolean => {
  if (isEditable(event.target)) return false;

  const modifiers = new Set(key.split(" + "));
  return (
    Object.entries(modifierProperties) as [Modifier, keyof ShortcutEvent][]
  ).every(
    ([modifier, property]) => modifiers.has(modifier) === event[property],
  );
};

export const routeShortcut = (
  key: string,
  event: ShortcutEvent,
  onMatch: () => void,
): boolean => {
  if (!shouldHandleShortcut(key, event)) return false;

  onMatch();
  event.preventDefault();
  return true;
};
