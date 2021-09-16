import React from 'react'
import styled from 'styled-components'
import lupa from '../imagens/lupa.png'

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

const ContainerProdutoMain = styled.div `
    display: grid;
    grid-template-columns: 20vw 1fr;
`

const ContainerFiltro = styled.div`
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const ContainerBotao = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center ;
`
const BotaoFiltro = styled.button`
    margin-top: 2vh;
`
const ContainerPesquisa = styled.div`
    margin-top: 2vh;
    margin-left: 0;
    padding-left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    img {
        width: 20px;
        height: 20px;
    }
`


class CardProdutoFiltro extends React.Component {
    state = {
        imagem: '',
        legenda: '',    
        preco: '',
    }

    render() {
        return(
            <ContainerProdutoMain>
                {this.props.index === 0 ? 
                <ContainerFiltro>
                    <ContainerBotao>
                        <BotaoFiltro onClick={this.props.onClickFiltrarMaisCaro}>Filtrar Pelo Mais Caro</BotaoFiltro>
                        <BotaoFiltro onClick={this.props.onClickFiltrarMaisBarato}>Filtrar Pelo Mais Barato</BotaoFiltro>
                    </ ContainerBotao >
                    <ContainerPesquisa>
                        <input onChange={this.props.onChangePesquisa} value={this.props.textoPesquisa} placeholder="Pesquisa por nome..." />
                        <img onClick={this.props.onClickPesquisa} src={lupa} />
                    </ContainerPesquisa>
                </ContainerFiltro>
                : 
                <ContainerFiltro>
                .
                </ContainerFiltro>}
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
                </CardsContainer>
            </ContainerProdutoMain>
        )
    }
}

export default CardProdutoFiltro