import React from "react";
import { NavSection } from "../style";

function NavBar(props) {
  return (
    <NavSection>
      <h1>Filtros</h1>
      <label htmlFor="minPrice">Valor mínimo</label>
      <input
        type="number"
        value={props.minPrice}
        onChange={props.onChangeMinValue}
        min="0"
      />
      <label htmlFor="maxPrice">Valor máximo</label>
      <input
        type="number"
        value={props.maxPrice}
        onChange={props.onChangeMaxValue}
        min="0"
      />
      <label>Buscar por nome</label>
      <input
        type="text"
        value={props.searchName}
        onChange={props.onChangeSearchName}
      />
    </NavSection>
  );
}

export default NavBar;
