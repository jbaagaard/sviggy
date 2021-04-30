import { SvgComponent } from "../SvgComponent";
import {
  pointArrayToCubicBezierPathString2,
  pointArrayToPolygonString,
  transformPointArray,
} from "../PointArrayFunctions";
import { Draw, PointArray, Position } from "../models";
import { calculateColor, percentageOf } from "../helperFunctions";
import MersenneTwister from "mersenne-twister";

interface LayeredPeaksProps {
  count: number;
  balance: number;
  complexity: number;
  volatility: number;
  width: number;
  height: number;
  color: string;
  color2?: string;
  position: Position;
  draw: Draw;
  strokeWidth?: number;
  seed?: number;
}

const LayeredPeaks = ({
  balance,
  color,
  color2,
  complexity,
  count,
  volatility,
  width,
  height,
  position,
  draw,
  strokeWidth,
  seed = Math.random() * 1000000,
}: LayeredPeaksProps) => {
  const generator = new MersenneTwister(seed);
  const pointLists: PointArray[] = [];
  for (let i = 1; i < count + 1; i++) {
    const pointList: PointArray = [[0, i * balance]];

    for (let i2 = 0; i2 < complexity; i2++) {
      let pointX =
        generator.random() * volatility - volatility / 2 + i * balance;
      pointList.push([percentageOf(i2 + 1, complexity + 1), pointX]);
    }
    pointList.push([100, i * balance]);
    pointList.push([100, 0]);
    pointList.push([0, 0]);

    pointLists.push(pointList);
  }

  const colors = (index: number) => {
    if (!!color2) {
      return calculateColor(index, count, color, color2);
    } else return color;
  };

  return (
    <SvgComponent color={"rgba(0,0,0,0)"} viewBox={`0 0 ${width} ${height}`}>
      {pointLists.reverse().map((pointList, index) => (
        <polygon
          points={pointArrayToPolygonString(
            transformPointArray(pointList, position),
            height,
            width
          )}
          fill={draw === "fill" ? colors(index) : undefined}
          stroke={draw === "stroke" ? colors(index) : undefined}
          strokeWidth={strokeWidth ? strokeWidth : 1}
        />
      ))}
    </SvgComponent>
  );
};

export default LayeredPeaks;
