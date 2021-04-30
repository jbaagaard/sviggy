import {PointArray, Position} from "./models";
import {percentageOf, roundTo2} from "./helperFunctions";
import MersenneTwister from "mersenne-twister";

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


export const pointArrayToCubicBezierPathString2 = (
    pointList: PointArray,
    height: number,
    width: number
) => {
    const pl = scaleAndRound(pointList, height, width);
    console.log(pl);
    let pointDistance = ((100 / pointList.length)/2) * width / 100;
    let pathString =
        "M" +
        pl[0][0] + "," + pl[0][1] +
        " C" +
        (pl[0][0] + pointDistance).toFixed(2) +
        "," +
        pl[0][1] +
        " " +
        (pl[1][0] - pointDistance).toFixed(2) +
        "," +
        pl[1][1] +
        " " +
        (pl[1][0]) +
        "," +
        pl[1][1]

    for (let i = 2; i < pl.length; i++) {
        pathString =
            pathString +
            " S" +
            (pl[i][0] - pointDistance).toFixed(2) +
            "," +
            pl[i][1] +
            " " +
            pl[i][0] +
            "," +
            pl[i][1];
    }


    return pathString;
};

export const randomPointArray = (
    complexity: number,
    volatility: number,
    height: number,
    seed: number,
    mersenneTwister: MersenneTwister
) => {
    const pointArray: PointArray = [[0, height]];
    for (let i2 = 0; i2 < complexity; i2++) {
        let pointX =
            mersenneTwister.random() * volatility - volatility / 2 + height;
        pointArray.push([percentageOf(i2 + 1, complexity + 1), pointX]);
    }
    return pointArray;
};

export const scaleAndRound = (pointArray: PointArray, height: number, width: number) => {
    let pa: PointArray = []
    for (let i = 0; i < pointArray.length; i++) {
        pa.push([
            roundTo2((pointArray[i][0] * width) / 100),
            roundTo2((pointArray[i][1] * height) / 100),
        ])
    }
    return pa
}