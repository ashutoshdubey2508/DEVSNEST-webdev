import React, { useState} from "react";

import "./todo.css";

function App(){
 
 const idx=true; 
  
const [users,setUsers]= useState([
]);

const [show,setShow] = useState(idx)
const [grocery,setGrocery] = useState("");
const [calorie,setCalorie] = useState();
const [newid,setNewid]=useState(-1);


const Add1 = (e) => {
  setGrocery(e.target.value)

};

const Add2=(ev)=>{
  setCalorie(ev.target.value)
}

function handleAddNewUser(){
  const updateUsers = [
    ...users ,
    {
      id: users.length+1 ,
      name : grocery,
      type:calorie

    }

    
  ]

  setUsers(updateUsers);
  
}

return (

  <div className="App">
    <ul>
      {users.map((user)=>(
        
        
        <div key={user.id}>
          <span>{user.name}</span> consumes 
          <span>{user.type}</span> calories .
          
          { newid===user.id?
            show?<div><input type="text" onChange={(event1)=>{
              user.name=event1.target.value;
            }

            }></input><input type="number" onChange={(event2)=>{
              user.type=event2.target.value;
            }
            
            }></input></div>:null 
            :null        
          }
      
          
          <button onClick={()=>{
            // console.log(user.id);
            const newusers = users.filter((el)=>el!== user);
            setUsers(newusers);
          }}>Delete</button>
          <button onClick={()=> {
          {
            show?setShow(false):setShow(true)
           }
           {
             setNewid(user.id);
           }
          }}>Edit</button>
        
            
        </div>
      ))

      }
    </ul>
    <input type="text" onChange={Add1} />
    <input type="number" onChange={Add2}/>
    <button onClick={handleAddNewUser}>Add</button>
  </div>
);

}

export default App;