import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #fed7d7;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #718096;
  }

  a + a {
    margin-left: 20px;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>Baby Happy</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">Produtos</a>
          <a href="/">Contatos</a>
          <a href="/">Redes</a>
        </nav>
      </HeaderContainer>
    );
  }
}
