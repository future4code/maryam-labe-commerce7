import React from "react";
import { ProductsFilter } from "../style";

function Filters(props) {
  return (
    <ProductsFilter>
      <p>Ordenação</p>
      <select value={props.sortOrder} onChange={props.onChangeSortOrder}>
        <option value="title">Título</option>
        <option value="price">Preço</option>
      </select>
      <select value={props.order} onChange={props.onChangeOrder}>
        <option value={1}>Crescente</option>
        <option value={-1}>Decrescente</option>
      </select>
    </ProductsFilter>
  );
}

export default Filters;
