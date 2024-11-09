import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: purple;
}
`;

const Main = styled.main`
  background-color: pink;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  color: white;
  font-size: 2rem;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  display: inline-block

  &:hover {
    background-color: lightgray;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
  margin-top: 10px;
`;

const Result = styled.h3`
  margin-top: 20px;
  color: white;
`;

export default function App() {
  //primeiroValor é variavel de estado
  //setprimeirovalor é função atualizadora

  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <Main>
      <H1>Calculadora</H1>
      {/*onchange pra capturar o que o usuario esta digitando*/}
      <Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />

      <ButtonContainer>
        <Button onClick={soma}>+</Button>
        <Button onClick={subtracao}>-</Button>
        <Button onClick={multiplicacao}>x</Button>
        <Button onClick={divisao}>/</Button>
      </ButtonContainer>
      <h3>{resultado}</h3>
    </Main>
  );
}
