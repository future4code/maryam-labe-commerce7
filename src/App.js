import React from 'react';
import { Products } from './components/Products/Products';
import { Filters } from './components/Filters/Filters';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import foto1 from './components/imagens/foto1.jpg'
import styled from 'styled-components';
import foto2 from './components/imagens/foto2.jpeg'
import foto3 from './components/imagens/foto3.jpeg'
import foto4 from './components/imagens/foto4.jpeg'
import foto5 from './components/imagens/foto5.jpeg'
import foto6 from './components/imagens/foto6.jpeg'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  gap: 8px;
  background-color: #0077B5;
  color: #fff;
  border:2px;
`;
const products = [
  {id: 1,
    nome: 'bbBrinquedos para bebes de 0 a 2 anos de idade.',
    preco: 900,
    
    imagem: 'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    quantidade: 2,},
  {id: 2,
    nome: 'bbBrinquedos para bebes de 0 a 2 anos de idade.',
    preco: 900,
    imagem: 'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    quantidade: 2}
  ]
class App extends React.Component {
  state = {
    minFilter: 100,
    maxFilter: 300,
    nomeFilter: 'Bichinos',
    productsInCart: [
      {
        id: 4,
        nome: 'Mini vestido com decote em V',
        preco: 10,
        imagem:'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        quantidade: 1
      },
      {
        id: 4,
        nome: 'Mini vestido com decote em V',
        preco: 10,
        imagem:'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        quantidade: 1
      }
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangenomeFilter = (event) => {
    this.setState({nomeFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantidade: product.quantidade + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantidade: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {...product,quantidade: product.quantidade - 1
        }
      }
      return product
    }).filter((product) => product.quantidade > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    const products = [
      {id: 1,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVZ4h1Y6ukcDDZm3acc-eJkCweFk1mCB1fw&usqp=CAU',
      quantidade: 2,},
      {id: 2,

      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: '',
      quantidade: 2,},
      {id: 3,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: 'https://picsum.photos/200/300',
      quantidade: 2,},
      {id: 4,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: 'https://picsum.photos/200/300',
      quantidade: 2,},
      {id: 5,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: 'https://picsum.photos/200/300',
      quantidade: 2,},
      {id: 6,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: 'https://picsum.photos/200/300',
      quantidade: 2,},
      {id: 7,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 900,
      imagem: 'https://picsum.photos/200/300',
      quantidade: 2,},
      {id: 8,
        nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
        preco: 900,
        imagem: 'https://picsum.photos/200/300',
        quantidade: 2,},
        {id: 9,
        nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
        preco: 900,
        imagem: 'https://picsum.photos/200/300',
        quantidade: 2,},
        {id: 10,
        nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
        preco: 900,
        imagem: 'https://picsum.photos/200/300',
        quantidade: 2,},
        {id: 11,
        nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
        preco: 900,
        imagem: 'https://picsum.photos/200/300',
        quantidade: 2,},
        {id: 12,
        nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
        preco: 900,
        imagem: 'https://picsum.photos/200/300',
        quantidade: 2,},
        {id: 13,
        nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
        preco: 900,
        imagem: 'https://picsum.photos/200/300',
        quantidade: 2,},
      
      ]
    return (  
      
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nomeFilter={this.state.nomeFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangenomeFilter={this.onChangenomeFilter}                  
        />
        <Products 
        products={products}
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nomeFilter={this.state.nomeFilter}
        onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
  
  <section> Binquedo para criaaca  <img src={foto5} /></section>
  <section> Brinquedos para bebes de 0 a 2 anos de idade <img src={foto2} /></section>
  <section> Brinquedos para bebes de 0 a 2 anos de idade <img src={foto3} /></section>
  <section> Brinquedos para bebes de 0 a 2 anos de idade <img src={foto3} /></section>
  <section> nome <img src={foto4} /></section>
  <section> nome <img src={foto5} /></section>
  <section> nome <img src={foto6} /></section>
  <section> nome <img src={foto5} /></section>
  <section> nome <img src={foto2} /></section>
  <section> nome <img src={foto3} /></section>
  <section> nome <img src={foto3} /></section>
  <section> nome <img src={foto4} /></section>
  <section> nome <img src={foto5} /></section>
  <section> nome <img src={foto6} /></section>
  <section> nome <img src={foto5} /></section>
  <section> nome <img src={foto2} /></section>
  <section> nome <img src={foto3} /></section>
  <section> nome <img src={foto3} /></section>
  <section> nome <img src={foto4} /></section>
  <section> nome <img src={foto5} /></section>

 
 
         
        
      
      </AppContainer>
      
    );
 }
}

export default App;
