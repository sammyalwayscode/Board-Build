import React from "react";
import styled from "styled-components";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SideBar />
        </Left>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
const Left = styled.div`
  flex: 0.3;
  background-color: green;

  @media screen and (max-width: 923px) {
    display: flex;
    flex: 0.1;
  }
`;
const Right = styled.div`
  flex: 0.7;
  background-color: red;
  @media screen and (max-width: 923px) {
    display: flex;
    flex: 0.9;
  }
`;
