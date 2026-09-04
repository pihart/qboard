export type MovementAxis = "x" | "y";

export type MovementLockable = {
  lockMovementX: boolean;
  lockMovementY: boolean;
  set: (
    options: Partial<
      Pick<MovementLockable, "lockMovementX" | "lockMovementY">
    >,
  ) => unknown;
};

export type MovementLockState = {
  hasSelection: boolean;
  x: boolean;
  y: boolean;
};

const propertyFor = (
  axis: MovementAxis,
): "lockMovementX" | "lockMovementY" =>
  axis === "x" ? "lockMovementX" : "lockMovementY";

export const getMovementLockState = (
  objects: readonly MovementLockable[],
): MovementLockState => ({
  hasSelection: objects.length > 0,
  x: objects.length > 0 && objects.every((object) => object.lockMovementX),
  y: objects.length > 0 && objects.every((object) => object.lockMovementY),
});

/**
 * If every selected object is locked on an axis, unlock all of them.
 * Otherwise, lock all of them so mixed selections have a predictable result.
 */
export const toggleMovementLock = (
  objects: readonly MovementLockable[],
  axis: MovementAxis,
): boolean => {
  const property = propertyFor(axis);
  const locked = !objects.every((object) => object[property]);
  objects.forEach((object) => object.set({ [property]: locked }));
  return locked;
};
