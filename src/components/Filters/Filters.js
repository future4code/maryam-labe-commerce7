import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
border-radius: 10px; 
padding: 10px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  border-radius: 10px;
`

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nomeFilter}
            onChange={this.props.onChangeNomeFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}
