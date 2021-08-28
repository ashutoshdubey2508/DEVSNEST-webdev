const addItem =(item =>{
    return{
        type:"add",
        payload: item,

    }
})

const remove=((id)=>{
    return{
        type:"remove",
        payload: id,
    };
})
export {addItem,remove} ;