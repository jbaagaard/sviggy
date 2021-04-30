import {SvgComponent} from "../SvgComponent";
import {
    pointArrayToCubicBezierPathString2,
    pointArrayToPolygonString,
    randomPointArray,
    transformPointArray,
} from "../PointArrayFunctions";
import {Draw, PointArray, Position} from "../models";
import {calculateColor, percentageOf} from "../helperFunctions";
import MersenneTwister from "mersenne-twister";

interface WavesProps {
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

const Waves = ({
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
               }: WavesProps) => {
    const generator = new MersenneTwister(seed);
    const pointLists: PointArray[] = [];
    for (let i = 1; i < count + 1; i++) {
        const pointArray: PointArray = randomPointArray(
            complexity,
            volatility,
            balance * (i),
            seed,
            generator
        );
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
                <path
                    d={pointArrayToCubicBezierPathString2(
                        transformPointArray(pointList, position),
                        height,
                        width
                    ) + (draw === "fill" && " z")}
                    fill={draw === "fill" ? colors(index) : undefined}
                    stroke={draw === "stroke" ? colors(index) : undefined}
                    strokeWidth={strokeWidth ? strokeWidth : 1}
                />

            ))}
        </SvgComponent>
    );
};

export default Waves;
