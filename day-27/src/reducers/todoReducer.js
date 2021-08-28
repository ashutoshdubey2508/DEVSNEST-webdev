const todoReducer=(state=[],action)=>{

    if(action.type==="add"){
     return [...state,action.payload] ; 
    }
    else if(action.type==="remove"){
        return state.filter((item,index)=> index!==action.payload);
    }
    return state;
};
export default todoReducer;