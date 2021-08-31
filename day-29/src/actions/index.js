const updatePlace=(place)=>{
    return{
        type:"up",
        payload:place,
    };
};

const updateData= (place) => {
    return (dispatch) => {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=3b30c57f7d77448a8c9195735210808&q=${place}`
      )
        .then((res) => res.json())
        .then((data) => {
           
          dispatch({
           type:"daata",
           payload:data, 

          })
          
        });
    };
  };
