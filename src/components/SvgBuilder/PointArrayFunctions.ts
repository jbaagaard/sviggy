import { PointArray, Position } from "./models";
import { roundTo2 } from "./helperFunctions";

export const transformPointArray = (
  pointList: PointArray,
  position: Position
) => {
  if (position === "top") return pointList;
  if (position === "bottom") return pointArrayFlipXAxis(pointList);
  if (position === "left") return pointArrayFlip90Deg(pointList);
  return pointArrayFlip90Deg(pointArrayFlipXAxis(pointList));
};

export const pointArrayFlipXAxis = (pointList: PointArray) => {
  const newPointList: PointArray = [];
  pointList.map((p) => {
    newPointList.push([p[0], (p[1] - 50) * -1 + 50]);
  });
  return newPointList;
};

export const pointArrayFlip90Deg = (pointList: PointArray) => {
  const newPointList: PointArray = [];
  pointList.map((p) => newPointList.push([p[1], p[0]]));
  return newPointList;
};

export const pointArrayToPolygonString = (
  pointList: PointArray,
  height: number,
  width: number
) => {
  let pathString = "";
  pointList.map(
    (p) =>
      (pathString =
        pathString +
        roundTo2((p[0] * width) / 100) +
        "," +
        roundTo2((p[1] * height) / 100) +
        " ")
  );
  return pathString;
};

export const pointArrayToQuadraticPathString = (
  pointList: PointArray,
  height: number,
  width: number
) => {
  let pathString = "M ";
  pointList.map(
    (p, i) =>
      (pathString =
        pathString +
        (i % 2 == 0
          ? roundTo2((p[0] * width) / 100) +
            " " +
            roundTo2((p[1] * height) / 100) +
            " "
          : "Q " +
            roundTo2((p[0] * width) / 100) +
            " " +
            roundTo2((p[1] * height) / 100) +
            " "))
  );
  return pathString;
};
