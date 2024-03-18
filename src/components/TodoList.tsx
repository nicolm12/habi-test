import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import styled from "styled-components";
function TodoList() {
  const Checkbox = styled.input`
    width: 20px;
  `;

  const Container = styled.div`
    width: 25vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 380px;
    max-width: 600px;
  `;
  const ContainerList = styled.div`
    border: 2px solid #d9d8d7;
    margin-bottom: 20px;
    border-radius: 0px 20px 20px 0px;
    display: flex;
    flex-direction: row;
    width: 25vw;
    min-width: 380px;
    max-width: 600px;
    color: #88898c;
    border-left: 5px solid #8d46d4;
  `;
  const Input = styled.input`
    border: none;
    width: 30vw;
    padding: 15px;
    font: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      color: #88898c;
      text-decoration: line-through;
    }
  `;
  const Button = styled.button`
    border: none;
    border-radius: 0px 20px 20px 0px;
    width: 7vw;
    background-color: #8d46d4;
    color: white;
    font: inherit;
  `;
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const id = event.currentTarget.dataset.id
      ? +event.currentTarget.dataset.id
      : 0;
    dispatch({ type: "todo/deleteTodo", payload: id });
  }
  function handleToggle(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.currentTarget.dataset.id
      ? +event.currentTarget.dataset.id
      : 0;
    dispatch({ type: "todo/toggleTodo", payload: id });
  }
  return (
    <Container>
      {todos.map((todo) => (
        <ContainerList key={todo.id}>
          <Checkbox
            data-id={todo.id}
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />

          <Input
            disabled={todo.completed === true ? true : false}
            type="text"
            defaultValue={todo.text}
          />

          <Button data-id={todo.id} onClick={handleDelete}>
            <strong>Eliminar</strong>
          </Button>
        </ContainerList>
      ))}
    </Container>
  );
}
export default TodoList;
