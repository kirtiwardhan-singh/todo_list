import styles from './WelcomeMessage.module.css';
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todoItemsStore';

const WelcomeMessage=()=>{
    const contextObj=useContext(TodoItemsContext);
    const todoItems=contextObj.todoItems;
    return  (todoItems.length===0 &&<p classNameNameName={styles.welcome}>Enjoy your day</p>
);
};
export default WelcomeMessage;