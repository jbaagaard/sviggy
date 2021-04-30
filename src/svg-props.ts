import {Draw, Position} from "./components/SvgBuilder/models";

export default interface SvgProps {
    width: number;
    height: number;
    color: string;
    color2?: string;
    position: Position;
    draw: Draw;
    strokeWidth?: number;
}