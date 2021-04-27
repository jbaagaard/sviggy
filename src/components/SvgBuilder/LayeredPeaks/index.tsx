import {SvgComponent} from "../SvgComponent";


interface LayeredPeaksProps{
    count:number,
    balance:number,
    complexity:number,
    volatility:number,
    fill?:boolean,
    color: string | [string, string];

}
const LayeredPeaks = (p:LayeredPeaksProps) => {
    const paths = []
    for(let i = 0; i < p.count; i++){
        const path:number[] = []

        for(let i2 = 0; i2 < p.complexity; i2++){
            const point = 0

            path.push(point)
        }
        paths.push(path);
    }

    return(
        <SvgComponent color={p.color}>
            {paths.map(path =>
                <path>{path.map(p=>p)}</path>
            )}
        </SvgComponent>
    )

};

export default LayeredPeaks;
