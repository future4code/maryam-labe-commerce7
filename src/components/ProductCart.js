import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fed7d7;
  padding: 12px;
  padding-bottom: 40px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 240px;
  position: relative;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 0;
  }

  p {
    font-weight: bold;
  }

  button {
    position: absolute;
    bottom: 12px;
    height: 32px;
    border: none;
    border-radius: 4px;
    background-color: #feb2b2;
    cursor: pointer;
    transition: all 0.4s;
    font-weight: bold;

    :hover {
      background-color: #fc8181;
    }
  }
`;

function ProductCart(props) {
  return (
    <Container>
      <img src={props.img} alt={props.description} />
      <h2>{props.description}</h2>
      <p>R${props.price},00</p>
      <button>Adicionar ao carrinho</button>
    </Container>
  );
}

export default ProductCart;
