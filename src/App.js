import React from 'react';
import { Products } from './components/Products/Products';
import { Filters } from './components/Filters/Filters';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';
import "./App.css";

const Footer = styled.footer`
background-color: #787878;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;

  color: #161616;
`; 
const AppContainer = styled.div`
width: 100%;
padding: 0;
margin: 0;
display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 10px;
  gap: 8px;
  background-color: #b4b4b4;
  color: #fff;
`;
const products = [
  {id: 1,
    nome: 'Satélites antigos.',
    preco: 150,
    
    imagem: 'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    quantidade: 2,},
  {id: 2,
    nome: 'Roupas espaciais.',
    preco: 150,
    imagem: 'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    quantidade: 2}
  ]
class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 0,
    nomeFilter: ' Camisetas com estampas divertidas relacionadas ao espaço',
    productsInCart: [
      {
        id: 4,
        nome: 'Viagens espaciais',
        preco: 10,
        imagem:'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        quantidade: 1
      },
      {
        id: 4,
        nome: 'Meteoritos / aerolitos como pedras preciosas',
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
      nome: 'Ônibus Espacial de Brinquedo Astronautas - Exploradores do Espaço com Acessórios Fun.',
      preco: 150,
      imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-UA7xokFsvzFFVq_nWQoQu3Gwt0CNH2eaQmDPXGMKLAglx2CZpxiNqZq-DObREpXABKQbfhgxhQ&usqp=CAc',
      quantidade: 2,},
      {id: 2,

      nome: 'Astronauta e Figuras de Ação de Brinquedos Espaciais- Enormes 60 Peças Playset, 13 Esculturas Únicas- 2in - 8in Figuras incluem Foguetes, Astronautas, Rovers e muito mais.',
      preco: 150,
      imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5yZ0aLd4MYy_4T03t9JS685Yw_SDsuPFHS3hS4Jg0csPrQYhQ_cb0k3P8FIyItWILnmzeCSYhkA&usqp=CAc',
      quantidade: 2,},
      {id: 3,
      nome: 'Pacote de Ônibus Espacial & Foguetes.',
      preco: 150,
      imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbbwJeL9n_RwK-L01v7GjyL1xU6Ly0kGFE5_HSFrer0hPKGVLwVzf3CnJ3SWWG&usqp=CAc',
      quantidade: 2,},
      {id: 4,
      nome: 'Ônibus espacial e pacote de presentes de astronauta.',
      preco: 150,
      imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgZKnXoH6BNjVp5II0NYuASgBupWKYmKlsvEGV78XkFwua-13LMKfD-JRJb2wn&usqp=CAc',
      quantidade: 2,},
      {id: 5,
      nome: 'Lâmpada de foguete com estampa 3D, luz noturna de ônibus espacial para ventiladores espaciais, lâmpada de lua, foguete, decoração de quarto, recarregável por USB.',
      preco: 150,
      imagem: 'https://m.media-amazon.com/images/I/51jgE5HN6cL._AC_SX466_.jpg',
      quantidade: 2,},
      {id: 6,
      nome: 'Brinquedos Space Shuttle.',
      preco: 150,
      imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfZXF7lLh7P3gHfoIpd9RA3r1g-svlHJr6ZbMsOQrJolA2nuzn0P_QRn9WvBmKpFWsJLRYZFg8FGjIyc8PN_TNi5BzoWszfqfxwgvH87GJ8-y8hbXifch9&usqp=CAE',
      quantidade: 2,},
      {id: 7,
      nome: 'Brinquedos para bebes de 0 a 2 anos de idade.',
      preco: 150,
      imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlM04PwU5Tu60ouZ9oK5fbdETqSFZzeWhdYFwIBCCg0SFipi5sJjM5KJHtRXr9Uu8vKzUipuXV5lW9DVmtII8_bexga0uMCilV342DmTwX&usqp=CAE',
      quantidade: 2,},
      {id: 8,
        nome: 'Som e luz diy montado modelo de aviação espaço shuttle cabine foguete estação ....',
        preco: 150,
        imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqs0KHqUK92g_jdSe9Uq_FXHMY3F9dgKFFlWaE5Owyb61kboeEx5E_vsA9vkCd3FdLYFxlDZ_FKGMyk9jHFBFpwo78MkUWZ6zDHIkwVVLGe1JxhPIwCgKz&usqp=CAE',
        quantidade: 2,},
        {id: 9,
        nome: 'Ônibus Espacial Aeronave Rocket Nasa Espaço.',
        preco: 150,
        imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRICT2WQIbLEWwE1zCKehNwaQ7gDkGy7sDfYBX6vXGpBnW81-TikOBMcvQ-7Is11CngKSFhBdBXKdr7YGFlrJqIS3qBogge3QBxJIR6KxfPHD4Q4IKqUqglxA&usqp=CAE',
        quantidade: 2,},
        {id: 10,
        nome: 'Lego City 60226 Onibus Espacial de Pesquisa Em Marte.',
        preco: 150,
        imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSowfCIYNYXvKZWFmX6GiNtaB1rLwk3_AdT7AkXIDvwpHdQVNHw3AybljcVF2Rd14qsWxFdRRzNpRworCssjaysth6y6BEl1KmvRxE7LSD8_jI2dIVybHatbA&usqp=CAE',
        quantidade: 2,},
        {id: 11,
        nome: 'Maquete De Imprimir - Ônibus Espacial Columbia - Nasa.',
        preco: 150,
        imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRICT2WQIbLEWwE1zCKehNwaQ7gDkGy7sDfYBX6vXGpBnW81-TikOBMcvQ-7Is11CngKSFhBdBXKdr7YGFlrJqIS3qBogge3QBxJIR6KxfPHD4Q4IKqUqglxA&usqp=CAE',
        quantidade: 2,},
        {id: 12,
        nome: 'Conjunto de blocos de construção espacial, estação de obturador, foguete lua ....',
        preco: 150,
        imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkX1Z9eg9rS8WiVScjZPZIGlVRwyJERTD1ywlhd9owyydZ6Bt1J3PFqqxx5FR085JjqxD62ivHl-CHaZWQHO0mVXnqy5Avt3o9Rz-JhrI&usqp=CAE',
        quantidade: 2,},
        {id: 13,
        nome: 'Ônibus Espacial Aeronave Rocket Nasa Espaço.',
        preco: 150,
        imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqs0KHqUK92g_jdSe9Uq_FXHMY3F9dgKFFlWaE5Owyb61kboeEx5E_vsA9vkCd3FdLYFxlDZ_FKGMyk9jHFBFpwo78MkUWZ6zDHIkwVVLGe1JxhPIwCgKz&usqp=CAE',
        quantidade: 2,},
        {id: 13,
          nome: 'Maquete De Papel - Ônibus Espacial Mais 6 Modelos Da Nasa.',
          preco: 150,
          imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqRIJfIQgAVBLj_Cr7oR5a454tMcT9XE2nxg5Q6cuI192oQttMD-k6LbpAqx0Dlh0uCaWa8MjP09vl37PbGVA7OyZHGHEt1r2NcO_FMxjnuFl55IfzusixLA&usqp=CAE',
          quantidade: 2,},
          {id: 13,
            nome: 'Stinger mantis caído moc fim herói navio espacial navio shuttle foguete modelo ....',
            preco: 150,
            imagem: 'https://www.google.com/aclk?sa=L&ai=DChcSEwiE9dTIhobzAhUSCJEKHdPBD_kYABC7ARoCY2U&sig=AOD64_0BJkStrXS6sp-gIBsi2ve-bsbyjQ&ctype=5&q=&ved=0ahUKEwidwdDIhobzAhWmqJUCHVEyBtwQ2CkI1Q0&adurl=',
            quantidade: 2,},
            {id: 13,
              nome: 'Quadro Decorativo Astronauta NASA Foguete Ônibus Espacial Nave Lojas Salas ....',
              preco: 150,
              imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvILNXPPoNjJQe5KrUOPG1gaZde3nV6J0HHDXDD6zpZ9Rc360lIO8DEtoBSVpouFfjtoUD3vHO5vF6Czbfi6FQutVYCUwv19W-7v8_7eHD&usqp=CAE',
              quantidade: 2,},
              {id: 13,
                nome: 'Moc 1999 espaço águia blocos de construção kit spaceport o centro lançamento da ....',
                preco: 150,
                imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNdKiq8UIBLHd_w0H8DXlYFdFIMuKbF_Ao4iIYBcAF9NlplPOHgHeqHROv13Zu7JuFb0YeYXZ5Hg-17OKj1IeeC967Gh8emJlJWSEXg3m3Y0wTIl8om1pL&usqp=CAE',
                quantidade: 2,},
                {id: 13,
                  nome: 'Astro Venture Space Playset - Ônibus Espacial de Brinquedo & Space Rover com ...',
                  preco: 150,
                  imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgf4dZjAzQAZOzglknmHyhhJiVSIyeyrkGh6zRGORc9BMMHITsN99uDcos09QSuprojVT6BbrgxLhd3Iq_paOkHZ48HTLrWXrIGIljprp1Pf4BQd02Vio5&usqp=CAE',
                  quantidade: 2,},
                  {id: 13,
                    nome: 'Camiseta Naves Espaciais Ônibus Espacial Foguete Lançamento.',
                    preco: 150,
                    imagem: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSH64-PQgZvBrIuMV1Q7Py2dtQLalT1epurQBtUFixDFC8KVTMvZ8QiBUJqiB4Kz8DlvD5KQMpfuX5CYMBQRLaW-GLrSJAnqA&usqp=CAE',
                    quantidade: 2,},
                    {id: 13,
                      nome: 'Criança estrela filme série espaço tonyhardy1999 UT-AT modelo moc blocos de ....',
                      preco: 150,
                      imagem: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7dDzInHGv1L3GDGxutWtsg4vU4WoPBtUXN2PDPuLo3mw8mjzItvT3XDhaqmcxOnk5ImR48ymEy1qSBV4yYbWJ7R6wouGqBmoJA0V2zto&usqp=CAE',
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
  
  <Footer>
          <h4>Planets of the Solar System store@2021</h4>
        </Footer>

 
 
         
        
      
      </AppContainer>
      
    );
 }
}

export default App;
