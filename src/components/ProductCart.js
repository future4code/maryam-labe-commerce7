import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 12px;
  padding-bottom: 40px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 40px;
  width: 240px;
  height: 440px;
  position: relative;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);

  @media (max-width: 768px) {
    margin-right: 0;
  }

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 0;
  }

  h3 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 0;
    font-weight: normal;
  }

  > div {
    position: absolute;
    bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: bold;
    }

    svg {
      color: white;
    }

    button {
      height: 32px;
      width: 32px;
      border: none;
      border-radius: 50%;
      background-color: black;
      cursor: pointer;
      transition: all 0.4s;
      font-weight: bold;
      margin-left: 20px;

      :hover {
        background-color: #fc8181;
      }
    }
  }
`;

function ProductCart(props) {
  return (
    <Container>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <div>
        <p>R${props.price},00</p>
        <button onClick={props.handleProductIncrement}>
          <FiShoppingCart />
        </button>
      </div>
    </Container>
  );
}

export default ProductCart;
