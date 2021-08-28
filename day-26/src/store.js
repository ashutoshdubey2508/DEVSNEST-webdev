
// first import root reducer file
// import create store

import rootReducer from "./reducer/index";
import {createStore} from "redux";

const store= createStore(rootReducer);
export default store;