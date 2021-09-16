import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 12px;
    box-shadow: 2px 2px 8px;
    width: 18vw;

    p {
        margin: 4px;
        padding: 0;
    }

    button{
        margin: 8px;
        padding: 2px;
    }

    img{
        margin-top: 8px;
    }


`

const CardsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

class CardProduto extends React.Component {
    state = {
        imagem: '',
        legenda: '',
        preco: '',
    }

    render() {  
        return(
            <CardsContainer>
                < Card>
                    <img src={this.props.fotoProduto1} />
                    <p>{this.props.nomeProduto1}</p>
                    <p>R${this.props.valorProduto1},00</p>
                    <button id={this.props.id1} onClick={() => this.props.onClickAdicionarCarrinho(this.props.nomeProduto1, this.props.valorProduto1)}>Adicionar ao carrinho</button>
                </ Card>
                < Card>
                    <img src={this.props.fotoProduto2} />
                    <p>{this.props.nomeProduto2}</p>
                    <p>R${this.props.valorProduto2},00</p>
                    <button id={this.props.id2} onClick={() => this.props.onClickAdicionarCarrinho(this.props.nomeProduto2, this.props.valorProduto2)}>Adicionar ao carrinho</button>
                </ Card>
                < Card>
                    <img src={this.props.fotoProduto3} />
                    <p>{this.props.nomeProduto3}</p>
                    <p>R${this.props.valorProduto3},00</p>
                    <button id={this.props.id3} onClick={() => this.props.onClickAdicionarCarrinho(this.props.nomeProduto3, this.props.valorProduto3)}>Adicionar ao carrinho</button>
                </ Card>
                < Card>
                    <img src={this.props.fotoProduto4} />
                    <p>{this.props.nomeProduto4}</p>
                    <p>R${this.props.valorProduto4},00</p>
                    <button id={this.props.id4} onClick={() => this.props.onClickAdicionarCarrinho(this.props.nomeProduto4, this.props.valorProduto4)}>Adicionar ao carrinho</button>
                </ Card>
            </CardsContainer>
        )
    }
}

export default CardProduto