import React from "react";
import styled from "styled-components";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

const CartBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fed7d7;
  padding: 20px;
  min-height: calc(100vh - 104px);
  margin-left: 40px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

const CartProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: bold;
    margin-right: 16px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: red;
      width: 16px;
    }
  }
`;
const CartHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class Cart extends React.Component {
  render() {
    return (
      <CartBoard>
        <CartHeader>
          <FiShoppingCart />
          <h1>Carrinho:</h1>
        </CartHeader>

        <CartProducts>
          <strong>1x</strong>
          <p>Produto</p>
          <button>
            <FiTrash2 />
          </button>
        </CartProducts>
        <CartTotal>
          <p>
            Valor total: <b>R$total</b>
          </p>
        </CartTotal>
      </CartBoard>
    );
  }
}
