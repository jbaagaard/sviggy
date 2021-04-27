import {Children, cloneElement, ReactElement, SVGProps} from "react";

export type SvgComponentProps = {
    color: string | [string, string];
} & Omit<SVGProps<SVGSVGElement>, "color">;

export const SvgComponent = ({color, children, ...props}: SvgComponentProps) => {
    const isGradient = Array.isArray(color);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={Array.isArray(color) ? undefined : color}
            {...props}
        >
            {isGradient && (
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor={color[0]}/>
                    <stop offset="100%" stopColor={color[1]}/>
                </linearGradient>
            )}

            {Children.map(children, child =>
                cloneElement(child as ReactElement, {
                    ...(isGradient && {fill: "url(#gradient)"}),
                })
            )}
        </svg>
    );
};

export type UserProps = SvgComponentProps;

export const User = ({color}: UserProps) => {
    return (
        <SvgComponent color={color} viewBox="0 0 24 24">
            <path
                d="M20 22c-.6 0-1-.4-1-1v-2c0-1.7-1.3-3-3-3H8c-1.7 0-3 1.3-3 3v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5v2c0 .6-.4 1-1 1zM12 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
        </SvgComponent>
    );
};
