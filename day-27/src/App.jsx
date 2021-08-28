import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function App() {
  return (
    <div className="App">
        <div className="card">
     <h1 style={{marginTop:"50px"}}>Todo List</h1>
    
      <AddTodo/>
      <Todo/>
     </div>
 <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1544210163-257effe9399e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVvdGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1623904081325-9c8643ec1425?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ1fHxxdW90ZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                  
                </div>
            </Carousel>
   
    </div>
  );
}


export default App;