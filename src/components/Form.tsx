import React from "react";
import { useAppDispatch } from "../app/hooks";
import styled from "styled-components";
function Form() {
    const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding:0 5px;
    width: 25vw;
  `;
  const Input = styled.input`
  border-right:none;
  border:2px solid #d9d8d7;
  width: 25vw;
  padding:15px;
  font: inherit;
  &:focus {
    outline: none;
}
  `;
  const Button=styled.button`
  border:none;
  width:70px;
  background-color:#8D46D4;
  color:white;
  font: inherit;
  `
  
    const dispatch= useAppDispatch()
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        
        event.preventDefault();
        const input =event.currentTarget.elements.namedItem("new-todo") as HTMLInputElement;
        const text= input.value.trim();
        if(text.length===0){
            return

        }
        dispatch({type:"todo/addTodo", payload:text});
        input.value=""
    }

    return (
       
       <form  onSubmit={handleSubmit}>
       
       <Container>
        <Input name="new-todo" type="text" placeholder="Conquistar el mundo" />
        <Button type="submit"> <strong>Añadir</strong></Button>
       </Container>
       </form>
    )
}
export default Form