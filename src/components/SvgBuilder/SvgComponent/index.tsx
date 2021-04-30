import { Children, cloneElement, ReactElement, SVGProps } from "react";

export type SvgComponentProps = {
  color: string | [string, string];
} & Omit<SVGProps<SVGSVGElement>, "color">;

export const SvgComponent = ({
  color,
  children,
  ...props
}: SvgComponentProps) => {
  const isGradient = Array.isArray(color);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={Array.isArray(color) ? undefined : color}
      {...props}
    >
      {isGradient && (
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={color[0]} />
          <stop offset="100%" stopColor={color[1]} />
        </linearGradient>
      )}

      {Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
          ...(isGradient && { fill: "url(#gradient)" }),
        })
      )}
    </svg>
  );
};