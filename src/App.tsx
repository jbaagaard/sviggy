import React from "react";
import "./style.css";
import * as S from "./app.styled";
import Peaks from "./components/SvgBuilder/Peaks";
import { gray, green, lightGray, purp, purpBlu, red } from "./style";
import SeededPeaks from "./components/SvgBuilder/SeededPeaks";
import Waves from "./components/SvgBuilder/Waves";

function App() {
  return (
    <S.Wrapper>
      <S.SvgWrapper>
        <Waves
          color={red}
          color2={gray}
          draw={"fill"}
          balance={5}
          complexity={6}
          count={10}
          volatility={40}
          width={1389}
          height={703}
          position={"bottom"}
        />

        <SeededPeaks
          color={green}
          color2={gray}
          draw={"fill"}
          seed={"WzEwLDUsNSw0MCw3ODU0M10="}
          width={document.body.clientWidth}
          height={document.body.clientHeight}
          position={"right"}
        />
      </S.SvgWrapper>
    </S.Wrapper>
  );
}

export default App;
