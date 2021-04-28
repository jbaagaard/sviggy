import {SvgComponent} from "../SvgComponent";


type Position = "bottom"|"top"|"left"|"right";
type Point = [number,number];
type PointList = Point[];
type Color = [number,number,number];

interface LayeredPeaksProps {
    count: number,
    balance: number,
    complexity: number,
    volatility: number,
    width:number,
    height:number,
    fill?: boolean,
    color: string;
    color2?: string;
    position: Position;
}

function roundTo2(x:number){return Math.round(x * 100) / 100}
function percentageOf(x:number,x2:number){return x/x2*100}

const rgbToHex = (c:Color) => '#' + [c[0], c[1], c[2]].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

function hexToRgb(hex:string):Color|null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ]:null;
}

function calculateColor(index:number, amount:number, color1:string, color2:string){
    const c1 = hexToRgb(color1)!;
    const c2 = hexToRgb(color2)!;

    let color:Color = [0,0,0]
    for(let i = 0;i<color.length;i++){
        const lowest = Math.min(c1[i],c2[1]);
        const diffrence = Math.abs(c1[i]-c2[1])
        color[i] = Math.round((diffrence/amount*index) + lowest);
    }
    console.log(color)
    return rgbToHex(color)
}

const LayeredPeaks = ({balance, color,color2, complexity, count, volatility, width, height}: LayeredPeaksProps) => {
    const pointLists:PointList[] = []
    for (let i = 0; i < count; i++) {
        const pointList: PointList = [[0,(i*balance)]];

        for (let i2 = 0; i2 < complexity; i2++) {
            let pointX = ((Math.random() * volatility)/width*100) + ((i*balance)/height*100);
            pointList.push([percentageOf((i2+1),(complexity+1)),pointX])
        }
        pointList.push([100,(i*balance)]);
        pointList.push([100,0]);
        pointList.push([0,0]);
        pointLists.push(pointList);
    }
    const colors = (index:number) => {
        if(!!color2)
        {
            return calculateColor(index,count,color,color2);
        }
        else
            return color;
    }

    function pointArrayToPolygonString(pointList:PointList){
        let pathString = "";
        pointList.map((p)=>{
            pathString = pathString + roundTo2(p[0]*width/100) + ","+roundTo2(p[1]*height/100)+" ";
        });
        return pathString;
    }

    function PointArrayFlipXAxis(pointList:PointList){
        const newPointList:PointList = [];
        pointList.map(p=>{
            newPointList.push([p[0],((p[1]-50)*-1)+50])
        })
        return newPointList;
    }

    function PointArrayFlip90Deg(pointList:PointList){
        const newPointList:PointList = [];
        pointList.map(p=>{
            newPointList.push([p[1],p[0]])
        })
        return newPointList;
    }

    return (
        <SvgComponent color={color} viewBox={`0 0 ${width} ${height}`}>
            {pointLists.reverse().map((pointList,index) =>
                <polygon points={pointArrayToPolygonString(PointArrayFlipXAxis(pointList))} fill={colors(index)}/>
            )}
        </SvgComponent>
    )

};

export default LayeredPeaks;