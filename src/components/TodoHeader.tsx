import React from "react";
import { useAppSelector } from "../app/hooks";
import styled from "styled-components";
function TodoHeader() {
  const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    width: 25vw;
    min-width: 380px;
  max-width: 600px;
  color:#88898C;
  `;
  const Text = styled.p``;
  const todos = useAppSelector((state) => state.todos);
  return (
    <Container>
      <Text>{`Tareas (${todos.length})`}</Text>
      <Text>
        <span>
          {`Completadas (${todos.filter((todo) => todo.completed).length})`}
        </span>
      </Text>
    </Container>
  );
}
export default TodoHeader;
