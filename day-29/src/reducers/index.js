import { combineReducers } from "redux";
import updatePlaceR from "./updatePlaceR";
import updateDataR from "./updateDataR";

const rootReducer= combineReducers({
place:updatePlaceR,
data:updateDataR, 
});
export default rootReducer;