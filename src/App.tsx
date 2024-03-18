import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

import styled from "styled-components";

function App() {
  const Container = styled.div`
    display: flex;
    background-color: #d5f0eb;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  `;
  const ContainerList = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    justify-content: center;
    font-family: "Space Mono", sans-serif;
    width: 30vw;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 0px 10px #d9d8d7;
    padding: 10px;
    min-width: 380px;
  max-width: 600px;
  `;
  const Paragrapht = styled.p`
  color:#D9D8D7;
`;


  return (
    <Container className="App">
      <ContainerList>
      <h2>Lista de tareas </h2>
      <strong><Paragrapht>¿Que quieres hacer hoy?</Paragrapht></strong>
      <Form />
        <TodoHeader />
        <TodoList />
      </ContainerList>
    </Container>
  );
}

export default App;
