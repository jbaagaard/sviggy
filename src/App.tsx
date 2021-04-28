import React from "react";
import "./style.css";
import * as S from "./app.styled";
import LayeredPeaks from "./components/SvgBuilder/LayeredPeaks";
import { gray, red } from "./style";

function App() {
  return (
    <S.Wrapper>
      <S.SvgWrapper>
        <LayeredPeaks
          color={red}
          color2={gray}
          draw={"fill"}
          balance={5}
          complexity={12}
          count={10}
          volatility={10}
          width={1389}
          height={703}
          position={"bottom"}
        />
      </S.SvgWrapper>
    </S.Wrapper>
  );
}

export default App;
