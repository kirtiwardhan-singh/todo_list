import { MdDelete } from "react-icons/md";

function TodoItem({todoName,todoDate,onDeleteClick}){
    return  <div classNameNameName="container">
      <div classNameNameName="row krow">
      <div classNameNameName="col-6">
      {todoName}
      </div>
      <div classNameNameName="col-4">
       {todoDate}
      </div>
      <div classNameNameName="col-2">
      <button onClick={()=>onDeleteClick(todoName)}
      type="button" classNameNameName="btn btn-danger kbutton"><MdDelete /></button>
      </div> 
    </div>
      </div>
  }
  
  export default TodoItem;