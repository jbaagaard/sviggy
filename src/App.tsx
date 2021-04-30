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
          color={green}
          draw={"stroke"}
          balance={40}
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
          seed={"MTA7NTs1OzQwOzc4NTQz"}
          width={1389}
          height={703}
          position={"bottom"}
        />
      </S.SvgWrapper>
    </S.Wrapper>
  );
}

export default App;
