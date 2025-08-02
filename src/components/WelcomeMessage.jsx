import { useContext } from 'react';
import { TodoItemsContext } from '../store/todoItemsStore';

const WelcomeMessage = () => {
    const { todoItems } = useContext(TodoItemsContext);
    
    if (todoItems.length === 0) {
        return (
            <div className="welcome-section">
                <p className="welcome-message">🌟 Ready to be productive? Add your first todo!</p>
            </div>
        );
    }
    
    const completedCount = todoItems.filter(item => item.completed).length;
    const totalCount = todoItems.length;
    const pendingCount = totalCount - completedCount;
    
    return (
        <div className="stats-container">
            <div className="stat-item total">
                <p className="stat-number">{totalCount}</p>
                <p className="stat-label">Total</p>
            </div>
            <div className="stat-item completed">
                <p className="stat-number">{completedCount}</p>
                <p className="stat-label">Completed</p>
            </div>
            <div className="stat-item pending">
                <p className="stat-number">{pendingCount}</p>
                <p className="stat-label">Pending</p>
            </div>
        </div>
    );
};
export default WelcomeMessage;