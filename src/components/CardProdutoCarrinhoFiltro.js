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

const CardsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContainerProdutoMain = styled.div `
    display: grid;
    grid-template-columns: 20vw 1fr 20vw;
`

const BotaoRemover = styled.button`
    height: 16px;
    width: 16px;
    color: red;
    font-size: 10px;
    padding: 0;
`

class CardProdutoCarrinhoFiltro extends React.Component {
    state = {
        imagem: '',
        legenda: '',    
        preco: '',
    }

    produtosSoma = () => {
        let soma = 0
        // console.log(this.props.produtosNoCarrinho)
        // console.log(this.props.produtosNoCarrinho[0].valorProduto)
        if (this.props.produtosNoCarrinho) {
            for (let produto of this.props.produtosNoCarrinho){
                soma = soma + produto.valorProduto
            }
        }
        return(
            <div>
                Valor Total: R${soma},00
            </div>
        )
    }

    render() {
        const produtosNoCarrinho = this.props.produtosNoCarrinho.map((produto) => {
            return(
                <div>
                    <p>{produto.nomeProduto} - R${produto.valorProduto},00 - <BotaoRemover onClick={() => this.props.onClickRemoverCarrinho(produto.nomeProduto, produto.valorProduto)}>X</BotaoRemover></p>
                </div>
            )
        })
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
                </CardsContainer>
                {this.props.index === 0 ? 
                <ContainerFiltro>
                    <h3> Seu Carrinho </h3>
                    <hr />
                    {produtosNoCarrinho}
                    <hr />
                    {this.produtosSoma()}
                </ContainerFiltro>
                : 
                <ContainerFiltro>
                .
                </ContainerFiltro>}
            </ContainerProdutoMain>
        )
    }
}

export default CardProdutoCarrinhoFiltro