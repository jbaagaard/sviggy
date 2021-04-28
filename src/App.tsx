import React from 'react';
import "./style.css";
import * as S from "./app.styled"
import {User} from "./components/SvgBuilder/SvgComponent";
import LayeredPeaks from "./components/SvgBuilder/LayeredPeaks";
import {gray, green, lightGray, purp, purpBlu, red} from "./style";

function App() {

    return (
        <S.Wrapper>
            <S.SvgWrapper>
                <LayeredPeaks color={red}  color2={purp} draw={"stroke"} strokeWidth={2}
                              balance={2} complexity={100} count={30} volatility={2}
                              width={1389} height={703} position={"bottom"}/>
            </S.SvgWrapper>
        </S.Wrapper>
    );
}

export default App;
