import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
`;

export const SectionProducts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fff;
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

export const CartBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: #fff;
  padding: 20px;
  min-height: calc(100vh - 104px);
  margin-left: 40px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CartProductsBoard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  strong {
    font-weight: bold;
    margin-right: 16px;
  }

  p {
    width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: red;
      width: 16px;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    margin-right: 40px;
  }
`;

export const ProductsFilter = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 16px;
  }

  select {
    height: 20px;
    border-radius: 4px;
    border: transparent;
    width: 128px;
  }
`;

export const ProductsCartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
