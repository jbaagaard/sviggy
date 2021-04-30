import React from "react";
import "./style.css";
import * as S from "./app.styled";
import LayeredPeaks from "./components/SvgBuilder/LayeredPeaks";
import { gray, green, lightGray, purp, purpBlu, red } from "./style";
import SeededPeaks from "./components/SvgBuilder/SeededLayeredPeaks";

function App() {
    return (
        <S.Wrapper>
            <S.SvgWrapper>
                <LayeredPeaks
                    color={green}
                    color2={gray}
                    draw={"fill"}
                    balance={5}
                    complexity={5}
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
