import React from 'react';
import "./style.css";
import * as S from "./app.styled"
import {User} from "./components/SvgBuilder/SvgComponent";
import LayeredPeaks from "./components/SvgBuilder/LayeredPeaks";
import {gray, red} from "./style";

function App() {

  return (
    <S.Wrapper>
        <S.SvgWrapper>
            <LayeredPeaks color={red} color2={gray} balance={10} complexity={10} count={3} volatility={25} width={200} height={100} position={"bottom"}/>
        </S.SvgWrapper>
    </S.Wrapper>
  );
}

export default App;
