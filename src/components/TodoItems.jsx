import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({onDeleteClick }) => {
  const contextObj=useContext(TodoItemsContext);
  const todoItems=contextObj.todoItems;

  return (
    <div classNameNameName={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem 
        todoDate={item.dueDate} 
        todoName={item.name} 
        onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
