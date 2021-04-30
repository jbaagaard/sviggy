import { Draw, Position } from "../models";
import { decode } from "../../seed-utils";
import Peaks from "../Peaks";

interface SeededPeaksProps {
  seed: string;
  width: number;
  height: number;
  color: string;
  color2?: string;
  position: Position;
  draw: Draw;
  strokeWidth?: number;
}

type PeaksSeed = [
  count: number,
  balance: number,
  complexity: number,
  volatility: number,
  randSeed: number
];

const SeededPeaks = ({
  seed,
  color,
  color2,
  width,
  height,
  position,
  draw,
  strokeWidth,
}: SeededPeaksProps) => {
  const [count, balance, complexity, volatility, randSeed] = decode(
    seed,
    5
  ) as PeaksSeed;

  return (
    <Peaks
      count={count}
      balance={balance}
      complexity={complexity}
      volatility={volatility}
      seed={randSeed}
      color={color}
      color2={color2}
      width={width}
      height={height}
      position={position}
      draw={draw}
      strokeWidth={strokeWidth}
    />
  );
};

export default SeededPeaks;
