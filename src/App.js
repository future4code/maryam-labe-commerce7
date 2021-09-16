import React from 'react'
import styled from 'styled-components'
import CardProduto  from './components/CardProduto'
import CardProdutoCarrinho from './components/CardProdutoCarrinho'
import CardProdutoCarrinhoFiltro from './components/CardProdutoCarrinhoFiltro'
import CardProdutoFiltro from './components/CardProdutoFiltro'
import Header from './components/Header'

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
const ContainerPesquisa = styled.div `
    display: grid;
    grid-template-columns: 20vw 1fr;

    h4 {
      text-align: center;
      justify-content: center;
    }

    h2{
      background-color: lightgray;
      margin: 0;
      padding: 0;
    }
`
const ContainerTextoPesquisa = styled.div`
  background-color: lightgray;
`

const ContainerCardTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  state = { 
    arrayDeProdutos: [
      {
        imagem: 'https://picsum.photos/200/200?random=1',
        nome: 'Produto 1',
        valor: 300,
        id: 'prod1'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=2',
        nome: 'Produto 2',
        valor: 200,
        id: 'prod2'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=3',
        nome: 'Produto 3',
        valor: 340,
        id: 'prod3'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=4',
        nome: 'Produto 4',
        valor: 560,
        id: 'prod4'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=5',
        nome: 'Produto 5',
        valor: 110,
        id: 'prod5'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=6',
        nome: 'Produto 6',
        valor: 3900,
        id: 'prod6'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=7',
        nome: 'Produto 7',
        valor: 4500,
        id: 'prod7'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=8',
        nome: 'Produto 8',
        valor: 390,
        id: 'prod8'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=9',
        nome: 'Produto 9',
        valor: 3040,
        id: 'prod9'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=10',
        nome: 'Produto 10',
        valor: 3230,
        id: 'prod12'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=11',
        nome: 'Produto 11',
        valor: 3240,
        id: 'prod11'
      },
      {
        imagem: 'https://picsum.photos/200/200?random=12',
        nome: 'Produto 12',
        valor: 3430,
        id: 'prod12'
      },
    ],
    carrinhoAberto: false,
    filtroAberto: false,
    produtosNoCarrinho: [],
    textoPesquisa: "",
    pesquisa: false

  }

  onClickCarrinho = () => {
    this.setState({carrinhoAberto: !this.state.carrinhoAberto})
  }

  onClickFiltro = () => {
    this.setState({filtroAberto: !this.state.filtroAberto})
  }

  onClickAdicionarCarrinho = (nome, valor) => {
    let novoProduto = {
      nomeProduto: nome,
      valorProduto: valor,
    }


    let copiaDaListaCarrinho = [novoProduto, ...this.state.produtosNoCarrinho]


    this.setState({produtosNoCarrinho: copiaDaListaCarrinho})
  }

  onClickRemoverCarrinho = (nome, valor) => {
    let novaLista = this.state.produtosNoCarrinho.filter((produto) => {
      return ((produto.nomeProduto !== nome) && (produto.valorProduto !== valor))
    })

    this.setState({produtosNoCarrinho: novaLista})
  }

  onClickFiltrarMaisCaro = () => {
    console.log("peguei mais caro")
    let copiaProdutos = [...this.state.arrayDeProdutos]

    copiaProdutos.sort((a,b) => {
      return -(a.valor - b.valor)
    })

    this.setState({arrayDeProdutos: copiaProdutos}) 
  }

  onClickFiltrarMaisBarato = () => {
    console.log("filtrei mais barato")
    let copiaProdutos = [...this.state.arrayDeProdutos]

    copiaProdutos.sort((a,b) => {
      return a.valor - b.valor
    })

    this.setState({arrayDeProdutos: copiaProdutos})
  }

  onClickPesquisa = () => {
    this.setState({pesquisa: !this.state.pesquisa})
  }

  onChangePesquisa = (event) => {
    this.setState({textoPesquisa: event.target.value})

  }

  renderizaPesquisa = () => {
    if (this.state.pesquisa) {
      let listaMatch = this.state.arrayDeProdutos.filter((produto) => {
        return (produto.nome === this.state.textoPesquisa)
      })

      if (!listaMatch[0]){
        return(
          <ContainerPesquisa>
            <h2>Que pena, não encontramos o produto que você estava pesquisando!</h2>
            <h4>Você pode buscar um novo termo ou verificar nossos produtos disponíveis abaixo:</h4>
          </ContainerPesquisa>
        )
      } else{
        return(
          <ContainerPesquisa>
          <ContainerTextoPesquisa>
            <h2>Sucesso! Encontramos o produto que você estava pesquisando!</h2>
          </ ContainerTextoPesquisa>
          <ContainerCardTexto>
            < Card>
              <img src={listaMatch[0].imagem} />
              <p>{listaMatch[0].nome}</p>
              <p>R${listaMatch[0].valor},00</p>
              <button onClick={() => this.onClickAdicionarCarrinho(listaMatch[0].nome, listaMatch[0].valor)}>Adicionar ao carrinho</button>
            </ Card>
            <h4>Talvez você goste de mais um de nossos produtos, confira nossas indicações:</h4>
          </ContainerCardTexto>
        </ContainerPesquisa>
        )
      }
    }
  }

  componentDidMount = () => {
    if(window.localStorage.getItem("carrinho")){
      let carrinhoSalvo = JSON.parse(window.localStorage.getItem("carrinho"))
      this.setState({produtosNoCarrinho: carrinhoSalvo})

    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.produtosNoCarrinho !== this.state.produtosNoCarrinho ){
      window.localStorage.setItem('carrinho', JSON.stringify(this.state.produtosNoCarrinho))
    }
  }

  render() {
    const produtosDisponiveis = this.state.arrayDeProdutos.map(((produto, index, lista) => {
      let index1
      let index2
      let index3
      if ((index === 0 || index%4 === 0)&& (index < (lista.length - 3))) {
        index1 = index + 1
        index2 = index + 2
        index3 = index + 3
        return (
          <CardProduto
          fotoProduto1={lista[index].imagem}
          nomeProduto1={lista[index].nome}
          valorProduto1={lista[index].valor}
          id1={lista[index.id]}
          fotoProduto2={lista[index1].imagem}
          nomeProduto2={lista[index1].nome}
          valorProduto2={lista[index1].valor}
          id2={lista[index1.id]}
          fotoProduto3={lista[index2].imagem}
          nomeProduto3={lista[index2].nome}
          valorProduto3={lista[index2].valor}
          id3={lista[index2.id]}
          fotoProduto4={lista[index3].imagem}
          nomeProduto4={lista[index3].nome}
          valorProduto4={lista[index3].valor}
          id4={lista[index3.id]}
          onClickAdicionarCarrinho={this.onClickAdicionarCarrinho}
          
          />
        )
      }

    }))

    const produtosDisponiveisFiltro = this.state.arrayDeProdutos.map(((produto, index, lista) => {
      let index1
      let index2
      if ((index === 0 || index%3 === 0)&& (index < (lista.length - 2))) {
        index1 = index + 1
        index2 = index + 2
        return (
          <CardProdutoFiltro
          fotoProduto1={lista[index].imagem}
          nomeProduto1={lista[index].nome}
          valorProduto1={lista[index].valor}
          id1={lista[index.id]}
          fotoProduto2={lista[index1].imagem}
          nomeProduto2={lista[index1].nome}
          valorProduto2={lista[index1].valor}
          id2={lista[index1.id]}
          fotoProduto3={lista[index2].imagem}
          nomeProduto3={lista[index2].nome}
          valorProduto3={lista[index2].valor}
          id3={lista[index2.id]}
          index={index}
          onClickAdicionarCarrinho={this.onClickAdicionarCarrinho}
          onClickFiltrarMaisCaro={this.onClickFiltrarMaisCaro}
          onClickFiltrarMaisBarato={this.onClickFiltrarMaisBarato}
          textoPesquisa={this.state.textoPesquisa}
          onClickPesquisa={this.onClickPesquisa}
          onChangePesquisa={this.onChangePesquisa}
          />
        )
      }

    }))

    const produtosDisponiveisCarrinho = this.state.arrayDeProdutos.map(((produto, index, lista) => {
      let index1
      let index2
      if ((index === 0 || index%3 === 0)&& (index < (lista.length - 2))) {
        index1 = index + 1
        index2 = index + 2
        return (
          <CardProdutoCarrinho
          fotoProduto1={lista[index].imagem}
          nomeProduto1={lista[index].nome}
          valorProduto1={lista[index].valor}
          id1={lista[index.id]}
          fotoProduto2={lista[index1].imagem}
          nomeProduto2={lista[index1].nome}
          valorProduto2={lista[index1].valor}
          id2={lista[index1.id]}
          fotoProduto3={lista[index2].imagem}
          nomeProduto3={lista[index2].nome}
          valorProduto3={lista[index2].valor}
          id3={lista[index2.id]}
          index={index}
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          onClickAdicionarCarrinho={this.onClickAdicionarCarrinho}
          onClickRemoverCarrinho={this.onClickRemoverCarrinho}
          />
        )
      }

    }))

    const produtosDisponiveisCarrinhoFiltro = this.state.arrayDeProdutos.map(((produto, index, lista) => {
      let index1
      if ((index === 0 || index%2 === 0)&& (index < (lista.length - 1))) {
        index1 = index + 1
        return (
          <CardProdutoCarrinhoFiltro
          fotoProduto1={lista[index].imagem}
          nomeProduto1={lista[index].nome}
          valorProduto1={lista[index].valor}
          id1={lista[index.id]}
          fotoProduto2={lista[index1].imagem}
          nomeProduto2={lista[index1].nome}
          valorProduto2={lista[index1].valor}
          id2={lista[index1.id]}
          index={index}
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          onClickAdicionarCarrinho={this.onClickAdicionarCarrinho}
          onClickRemoverCarrinho={this.onClickRemoverCarrinho}
          onClickFiltrarMaisCaro={this.onClickFiltrarMaisCaro}
          onClickFiltrarMaisBarato={this.onClickFiltrarMaisBarato}
          textoPesquisa={this.state.textoPesquisa}
          onClickPesquisa={this.onClickPesquisa}
          onChangePesquisa={this.onChangePesquisa}
          />
        )
      }
    }))

    

    
    return (
      <div>
        <Header 
        onClickCarrinho={this.onClickCarrinho} 
        onClickFiltro={this.onClickFiltro}
        produtosNoCarrinho={this.state.produtosNoCarrinho}
        />
        {this.renderizaPesquisa()}
        {!this.state.filtroAberto && (!this.state.carrinhoAberto ?
        produtosDisponiveis :
        produtosDisponiveisCarrinho)
        }
        {this.state.filtroAberto && (!this.state.carrinhoAberto ?
        produtosDisponiveisFiltro :
        produtosDisponiveisCarrinhoFiltro)
        }
      </div>
    );
  }
}

export default App;
