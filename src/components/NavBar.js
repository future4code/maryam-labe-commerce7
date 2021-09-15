import React from "react";
import styled from "styled-components";

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fed7d7;
  padding: 20px;
  min-height: calc(100vh - 104px);
  margin-right: 40px;

  h1 {
    font-size: 20px;
    margin: 0;
    margin-bottom: 12px;
  }

  label {
    margin-bottom: 4px;
  }

  input {
    height: 24px;
    border-radius: 4px;
    border: 1px solid transparent;
    margin-bottom: 20px;
  }
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <NavSection>
        <h1>Filtros</h1>
        <label>Valor mínimo</label>
        <input type="number" value="minPrice" />
        <label>Valor máximo</label>
        <input type="number" value="maxPrice" />
        <label>Buscar por nome</label>
        <input type="text" />
      </NavSection>
    );
  }
}
