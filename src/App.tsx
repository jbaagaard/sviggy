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
                <LayeredPeaks color={green} color2={red} draw={"fill"}
                              balance={10} complexity={7} count={10} volatility={40}
                              width={1389} height={303} position={"bottom"}/>

                              <LayeredPeaks color={red} color2={green}
                              draw={"fill"}
                              balance={10} complexity={7}
                              count={3} volatility={40}
                              width={1389} height={303}
                              position={"bottom"}/>
            </S.SvgWrapper>
        </S.Wrapper>
    );
}

export default App;
