import React from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components';

const ProductsContainer = styled.div`
//margin-bottom: 8px;
//border-radius: 10px;
border: #161616;
color: #161616;
`;

const ProductsHeader = styled.div`
background-color: #787878;
display: flex;
align-items: center;  
justify-content: space-between;
padding: 0 10px;


`;
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 20px;
   background-color: #f0f0f0;
  color: #161616;
 
`

export class Products extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }
  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) => this.props.maxFilter ? product.price < this.props.maxFilter : true)
      .filter((product) => this.props.minFilter ? product.price > this.props.minFilter : true)
      .filter((product) => this.props.nameFilter ? product.name.includes(this.props.nameFilter) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return <ProductsContainer>
      <ProductsHeader>
      <header>
          <h1>Planets of the Solar System store</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
        <p>Quantidade de Produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação:
          <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((product) => {
          return <ProductCard
            product={product}
            onAddProductToCart={this.props.onAddProductToCart}
          />
        })}
      </ProductsGrid>
    </ProductsContainer>
  }
}
