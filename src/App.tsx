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
                <LayeredPeaks color={red}  color2={purp}
                              balance={10} complexity={10} count={7} volatility={15}
                              width={1389} height={703} position={"bottom"}/>
            </S.SvgWrapper>
        </S.Wrapper>
    );
}

export default App;
