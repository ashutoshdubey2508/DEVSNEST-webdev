const updateDataR= (state = {},action)=>{
    if(action.type==="daata"){
        return action.payload;
    }
    return state;

}
export default updateDataR;