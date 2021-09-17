import React from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import productsList from "./data/products.json";
import {
  Container,
  Content,
  SectionProducts,
  CartBoard,
  CartProducts,
  CartHeader,
  CartTotal,
  ProductsContainer,
  ProductsHeader,
  ProductsCartContainer,
  CartProductsBoard,
} from "./style";

import Header from "./components/Header";
import ProductCart from "./components/ProductCart";
import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
import PrincipalPage from "./components/PrincipalPage";

export default class App extends React.Component {
  state = {
    products: productsList,
    minPrice: "",
    maxPrice: "",
    searchName: "",
    sortOrder: "title",
    order: 1,
    listShopping: [],
  };

  componentDidUpdate() {
    const list = this.state.listShopping;
    window.localStorage.setItem("listProducts", JSON.stringify(list));
  }

  componentDidMount() {
    const listString = window.localStorage.getItem("listProducts");

    if (listString) {
      const list = JSON.parse(listString);

      this.setState({
        listShopping: list,
      });
    }
  }

  onChangeMinValue = (event) => {
    this.setState({ minPrice: event.target.value });
  };

  onChangeMaxValue = (event) => {
    this.setState({ maxPrice: event.target.value });
  };

  onChangeSearchName = (event) => {
    this.setState({ searchName: event.target.value });
  };

  onChangeSortOrder = (event) => {
    this.setState({ sortOrder: event.target.value });
  };

  onChangeOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  handleProductIncrement(product) {
    const cloneListShopping = [...this.state.listShopping];

    const productExists = cloneListShopping.find((item) => {
      return item.id === product.id;
    });

    if (!productExists) {
      const newProductCart = {
        ...product,
        amount: 1,
      };
      this.setState({
        listShopping: [...cloneListShopping, newProductCart],
      });
    } else {
      const indexProductOnList = cloneListShopping.findIndex((item) => {
        return item.id === product.id;
      });

      cloneListShopping[indexProductOnList].amount += 1;

      this.setState({ listShopping: cloneListShopping });

      window.localStorage.setItem("list", JSON.stringify(cloneListShopping));
    }
  }

  handleRemoveItem = (product) => {
    const cloneListShopping = [...this.state.listShopping];

    const productExists = cloneListShopping.find((item) => {
      return item.id === product.id;
    });

    if (productExists.amount > 1) {
      const indexProductOnList = cloneListShopping.findIndex((item) => {
        return item.id === product.id;
      });

      cloneListShopping[indexProductOnList].amount -= 1;

      this.setState({ listShopping: cloneListShopping });
    } else {
      const listaAtualizada = cloneListShopping.filter((item) => {
        return item.id !== product.id;
      });

      this.setState({ listShopping: listaAtualizada });
    }
  };

  render() {
    const total = this.state.listShopping.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0);

    return (
      <Container>
        <Header />
        <PrincipalPage />
        <Content>
          <NavBar
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            searchName={this.state.searchName}
            onChangeMinValue={this.onChangeMinValue}
            onChangeMaxValue={this.onChangeMaxValue}
            onChangeSearchName={this.onChangeSearchName}
          />
          <SectionProducts>
            <ProductsContainer>
              <ProductsHeader>
                <h1>Quantidade de produtos: {this.state.products.length}</h1>
                <Filters
                  sortOrder={this.state.sortOrder}
                  order={this.state.order}
                  onChangeSortOrder={this.onChangeSortOrder}
                  onChangeOrder={this.onChangeOrder}
                />
              </ProductsHeader>
              <ProductsCartContainer>
                {this.state.products
                  .filter((product) => {
                    return product.title
                      .toLowerCase()
                      .includes(this.state.searchName);
                  })
                  .filter((product) => {
                    return (
                      this.state.minPrice === "" ||
                      product.price >= this.state.minPrice
                    );
                  })
                  .filter((product) => {
                    return (
                      this.state.maxPrice === "" ||
                      product.price <= this.state.maxPrice
                    );
                  })
                  .sort((currentProduct, nextProduct) => {
                    switch (this.state.sortOrder) {
                      case "title":
                        return (
                          this.state.order *
                          currentProduct.title.localeCompare(nextProduct.title)
                        );
                      default:
                        return (
                          this.state.order *
                          (currentProduct.price - nextProduct.price)
                        );
                      // usar esse caso para quando for ordenação por data, podendo ser qualquer um dos dois abaixo
                      // case "date":
                      // return new Date(currentProduct.date).getTime() - new Date(nextProduct.date).getTime();
                      // return new Date(currentProduct.date) < new Date(nextProduct.date);
                    }
                  })
                  .map((product) => {
                    return (
                      <ProductCart
                        key={product.id}
                        img={product.img}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        handleProductIncrement={() =>
                          this.handleProductIncrement(product)
                        }
                      />
                    );
                  })}
              </ProductsCartContainer>
            </ProductsContainer>
            <CartBoard>
              <CartHeader>
                <FiShoppingCart />
                <h1>Carrinho:</h1>
              </CartHeader>
              <CartProducts>
                {this.state.listShopping.map((product) => {
                  return (
                    <CartProductsBoard key={product.id}>
                      <strong>{product.amount}</strong>
                      <p>{product.title}</p>
                      <button onClick={() => this.handleRemoveItem(product)}>
                        <FiTrash2 />
                      </button>
                    </CartProductsBoard>
                  );
                })}
              </CartProducts>
              <CartTotal>
                <p>
                  Valor total: <b>R${total},00</b>
                </p>
              </CartTotal>
            </CartBoard>
          </SectionProducts>
        </Content>
      </Container>
    );
  }
}
