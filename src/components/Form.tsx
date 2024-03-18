import React from "react";
import { useAppDispatch } from "../app/hooks";
function Form() {
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
       <label htmlFor=""></label>
       <div>
        <input name="new-todo" type="text" placeholder="ingresa una tarea" />
        <button type="submit"> + </button>
       </div>
       </form>
    )
}
export default Form