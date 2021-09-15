import React from "react";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #feb2b2;
  color: #718096;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
`;

const SectionProducts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <NavBar />
        <SectionProducts>
          <Products />
          <Cart />
        </SectionProducts>
      </Content>
    </Container>
  );
}

export default App;
