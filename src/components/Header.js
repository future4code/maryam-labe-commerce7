import React from "react";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #111;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #fff;

  h1 {
    margin: 0;
    font-weight: 500;
    font-family: "Italianno";
    font-size: 60px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;

    :hover {
      text-decoration: underline;
    }
  }

  a + a {
    margin-left: 40px;
  }

  svg {
    color: #fff;
    width: 24px;
    height: 24px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>Ast. Stones</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">Produtos</a>
          <a href="/">Contatos</a>
          <a href="/">Redes</a>
        </nav>
        <button>
          <FiShoppingBag />
        </button>
      </HeaderContainer>
    );
  }
}
