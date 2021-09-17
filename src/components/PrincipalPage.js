import React from "react";
import styled from "styled-components";
import { FiArrowDown } from "react-icons/fi";

const Container = styled.div`
  background: #111;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-right: 60px;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0;
  }

  h1 {
    font-size: 40px;
    color: #fff;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 20px;
    text-align: center;
    color: #fff;
    font-weight: normal;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  img {
    height: 480px;
    width: 480px;
    border-radius: 20px;

    @media (max-width: 768px) {
      height: 240px;
      width: 240px;
    }
  }

  svg {
    color: #fff;
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
  }

  button {
    width: 240px;
    height: 32px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #edf2f7;
    transition: all 0.2s;
    font-weight: bold;

    :hover {
      background-color: #a0aec0;
    }
  }
`;

export default class PrincipalPage extends React.Component {
  render() {
    return (
      <Container>
        <TextSection>
          <h1>AST. STONES</h1>
          <h2>
            A loja especializada em pedras preciosas originadas de asteróides,
            com a mais alta qualidade do mercado.
            <br />
            <br />
            <img
              src="https://images.unsplash.com/photo-1560427450-00fa9481f01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80"
              alt=""
            />
          </h2>
          <FiArrowDown />
          <button>Acessar produtos</button>
        </TextSection>
      </Container>
    );
  }
}
