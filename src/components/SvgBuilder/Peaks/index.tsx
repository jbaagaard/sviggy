import { SvgComponent } from "../SvgComponent";
import {
	pointArrayToCubicBezierPathString2,
	pointArrayToPolygonString,
	randomPointArray,
	transformPointArray,
} from "../PointArrayFunctions";
import { Draw, PointArray, Position } from "../models";
import { calculateColor, percentageOf } from "../helperFunctions";
import MersenneTwister from "mersenne-twister";

interface PeaksProps {
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

const Peaks = ({
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
}: PeaksProps) => {
	const generator = new MersenneTwister(seed);
	const pointLists: PointArray[] = [];
	for (let i = 1; i < count + 1; i++) {
		const pointArray: PointArray = randomPointArray(
			complexity,
			volatility,
			complexity * i,
			seed,
			generator
		);

		pointArray.push([100, i * balance]);
		pointArray.push([100, 0]);
		pointArray.push([0, 0]);

		pointLists.push(pointArray);
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

export default Peaks;
