import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import  {updatePlace,updateData}  from "../actions/index";


const Form = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          marginLeft: "200px",
          display: "inline-block",
          marginTop: "10px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="City_Name"
          variant="outlined"
          value={place}
          style={{ backgroundColor: "#D3D3D3" }}
          onChange={(e) => {
            dispatch(updatePlace(e.target.value));
            
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={()=>{
            
            dispatch(updateData(place))}}
          style={{ margin: "10px" }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
export default Form;