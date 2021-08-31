const updatePlaceR=(state="",action)=>{

    if(action.type==="up"){
        return action.payload;    
    }
    return state;

    
}
export default updatePlaceR;