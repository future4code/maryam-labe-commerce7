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

const ContainerProdutoMain = styled.div `
    display: grid;
    grid-template-columns: 1fr 20vw;
`

const ContainerFiltro = styled.div`
    background-color: lightgray;
`

const BotaoRemover = styled.button`
    height: 16px;
    width: 16px;
    color: red;
    font-size: 10px;
    padding: 0;
`

class CardProdutoCarrinho extends React.Component {
    state = {
        soma: 0
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

export default CardProdutoCarrinho