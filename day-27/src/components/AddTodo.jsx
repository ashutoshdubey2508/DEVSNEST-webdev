import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../action";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="AddItem"
        variant="outlined"
        size="small"
        type="text"
        placeholder="add item"
        value={item}
        onChange={(e) => {
          setItem((e.target.value).toUpperCase());
        }}
      />
      <Button 
        variant="contained"
        color="secondary"
        onClick={() => {
          dispatch(addItem(item));
          //     {
          //     title:item,

          // }));
          setItem("");
        }}
      >
        Add Item
      </Button>
    </div>
  );
};
export default AddTodo;