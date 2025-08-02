import { MdDelete } from "react-icons/md";

function TodoItem({ todoId, todoName, todoDate, completed, onDeleteClick, onToggleComplete }) {
    const formatDate = (dateString) => {
        if (!dateString) return "No due date";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
        });
    };

    return (
        <div className={`todo-item ${completed ? 'completed' : ''}`}>
            <div className="todo-checkbox">
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={() => onToggleComplete(todoId)}
                    className="form-check-input"
                />
            </div>
            <div className="todo-content">
                <p className={`todo-name ${completed ? 'completed' : ''}`}>
                    {todoName}
                </p>
                {todoDate && (
                    <p className="todo-date">
                        📅 {formatDate(todoDate)}
                    </p>
                )}
            </div>
            <div className="todo-actions">
                <button 
                    onClick={() => onDeleteClick(todoId)}
                    type="button" 
                    className="btn-danger"
                    aria-label="Delete todo"
                >
                    <MdDelete size={16} />
                </button>
            </div> 
        </div>
    );
}
  
  export default TodoItem;