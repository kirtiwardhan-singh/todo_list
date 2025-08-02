import { useContext, useRef } from "react";
import { BiMessageAdd } from 'react-icons/bi';
import { TodoItemsContext } from '../store/todoItemsStore';

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value.trim();
    const dueDate = dueDateElement.current.value;
    
    if (!todoName) {
      todoNameElement.current.focus();
      return;
    }
    
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  }

  return (
    <div className="add-todo-form">
      <form onSubmit={handleAddButtonClicked}>
        <div className="form-row">
          <div className="input-group">
            <input 
              ref={todoNameElement}
              className="form-input" 
              type="text" 
              placeholder="What needs to be done?" 
              required
            />
          </div>
          <div className="input-group">
            <input 
              ref={dueDateElement} 
              className="form-input"  
              type="date" 
            />
          </div>
          <button type="submit" className="btn-primary">
            <BiMessageAdd size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;