import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoItems, deleteItem, toggleComplete } = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📝</div>
        <p className="empty-state-text">No todos yet. Start by adding one above!</p>
      </div>
    );
  }

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem 
          key={item.id}
          todoId={item.id}
          todoDate={item.dueDate} 
          todoName={item.name}
          completed={item.completed}
          onDeleteClick={deleteItem}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};
export default TodoItems;
