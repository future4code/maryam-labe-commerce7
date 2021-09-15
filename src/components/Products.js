import React from "react";
import styled from "styled-components";

import ProductCart from "./ProductCart";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    margin-right: 40px;
  }
`;

const ProductsFilter = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 16px;
  }

  select {
    height: 20px;
    border-radius: 4px;
    border: transparent;
    width: 128px;
  }
`;

const ProductsCartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default class Products extends React.Component {
  render() {
    return (
      <ProductsContainer>
        <ProductsHeader>
          <h1>Quantidade de produtos: 0</h1>
          <ProductsFilter>
            <p>Ordenação</p>
            <select value="filtro">
              <option value="crescente">Mais caros</option>
              <option value="descrescente">Mais baratos</option>
            </select>
          </ProductsFilter>
        </ProductsHeader>
        <ProductsCartContainer>
          <ProductCart
            img="https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            description="Bichinhos de pelúcia fofinhos"
            price="80"
          />
          <ProductCart
            img="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
            description="Cubo mágico e carrinhos "
            price="120"
          />
          <ProductCart
            img="https://images.unsplash.com/photo-1609741200128-ef6b38dfb8e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            description="Lego Rei e Rainha Premium"
            price="60"
          />
        </ProductsCartContainer>
      </ProductsContainer>
    );
  }
}
