import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border:20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 20px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  border:20px;
  border-right-style: solid;
  border-right-width: thin;
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <img src={product.imagem}/>
      <CardInfo>
        <p>{product.nome}</p>
        <p>R${product.preco},00</p>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}
