import React from "react";
import "./style.css";
import * as S from "./app.styled";
import LayeredPeaks from "./components/SvgBuilder/LayeredPeaks";
import { gray, purpBlu, red } from "./style";

function App() {
  return (
    <S.Wrapper>
      <S.SvgWrapper>
        <LayeredPeaks
          color={purpBlu}
          draw={"stroke"}
          balance={2}
          complexity={13}
          count={20}
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
