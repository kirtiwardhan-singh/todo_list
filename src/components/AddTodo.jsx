import { useContext, useRef} from "react";
import styles from './AddTodo.module.css'
import {BiMessageAdd} from 'react-icons/bi';

function AddTodo({onNewItem}){
 const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement=useRef();
  const dueDateElement=useRef();


  const handleAddButtonClicked=(event)=>{
   
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";

    addNewItem(todoName,dueDate)
    
  }


return <div classNameNameName="container text-center">
     <form  classNameNameName={`row ${styles.krow}`}
            onSubmit={handleAddButtonClicked}>
          <div classNameNameName="col-6">
            <input ref={todoNameElement}
            classNameNameName={styles.inputBox} 
            type="text" placeholder="Enter TODO Here" 
           />
          </div>
          <div classNameNameName="col-4">
            <input ref={dueDateElement} 
            classNameNameName={styles.inputBox}  
            type="date" />
          </div>
          <div classNameNameName="col-2">
          <button onSubmit={handleAddButtonClicked} classNameNameName="btn btn-success kbutton" ><BiMessageAdd></BiMessageAdd></button>
          </div>
        </form>
</div>
}

export default AddTodo;