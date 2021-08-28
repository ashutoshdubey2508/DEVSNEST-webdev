  
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../action";
import DeleteIcon from '@material-ui/icons/Delete';
const Todo = () => { 
  const todos = useSelector((state) => state.todoReducer);
const dispatch=useDispatch();
  return (
    <ul>

      {todos.map((todo, index) => (
          <div className="del">
                 <li key={index} className="lis">{todo} </li>
             <button  class="bb"  onClick={()=>{
                 dispatch(remove(index))
             }}>   <DeleteIcon /></button>
          </div>
          
           

           
      
      )
   
    
   
       
      )}
    </ul>
  );}
export default Todo;