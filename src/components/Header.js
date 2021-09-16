import React from 'react'
import styled from 'styled-components'
import carrinhoPreto from '../imagens/carrinhoPreto.png'
import carrinhoVermelho from '../imagens/carrinhoVermelho.png'

const ContainerHeader = styled.div `
    width: 100vw;
    height: 10vh;
    background-color: lightgray;
    display: grid;
    grid-template-columns: 15vw 1fr 15vw;

    button {
        height: 30%;
        width: 40%;
        margin-top: 6vh;
        margin-left: 3vw;
    }

    img{
        margin-top: 2vh;
        margin-left: 3vw;
        height: 50px;
        width: 50px;
    }
`

const CarrinhoCheio = styled.div`
    img{
        margin-top: 2vh;
        margin-left: 3vw;
        height: 40px;
        width: 40px;
    }

    p{
        color: red;
        margin-top: -8vh;
        margin-left: 6vw;
    }
`


class Header extends React.Component {
    carrinhoComNumeracao = () => {
        return(
            <CarrinhoCheio>
                <img src={carrinhoVermelho} onClick={this.props.onClickCarrinho} />
                <p>{this.props.produtosNoCarrinho.length}</p>
            </CarrinhoCheio>
        )
    }

    carrinhoVazio = () => {
        return(
            <img src={carrinhoPreto} onClick={this.props.onClickCarrinho} />
        )
    }
    render() {
        return (
            <ContainerHeader>
                <button onClick={this.props.onClickFiltro}>Filtro</button>
                <h2>Nome Da Empresa</h2>
                {((this.props.produtosNoCarrinho.length > 0) ?
                this.carrinhoComNumeracao() : 
                this.carrinhoVazio())}
            </ContainerHeader>
        )
    }
}

export default Header