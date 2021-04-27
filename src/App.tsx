import React from 'react';
import "./style.css";
import * as S from "./app.styled"
import {User} from "./components/SvgBuilder/SvgComponent";

function App() {
  return (
    <S.Wrapper>
      <User color={["#6746ED","#4657ed"]}/>
    </S.Wrapper>
  );
}

export default App;
