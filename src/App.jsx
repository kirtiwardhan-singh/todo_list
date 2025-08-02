import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { 
        id: Date.now(), 
        name: itemName, 
        dueDate: itemDueDate,
        completed: false 
      },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemId) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoItemId);
    setTodoItems(newTodoItems);
  };

  const toggleComplete = (todoItemId) => {
    const newTodoItems = todoItems.map((item) => 
      item.id === todoItemId ? { ...item, completed: !item.completed } : item
    );
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
        toggleComplete,
      }}
    >
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
