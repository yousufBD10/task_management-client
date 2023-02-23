import { combineReducers } from "redux";
import CheckListReducer from "./CheckListReducer";

const RootReducer = combineReducers({
    checkList: CheckListReducer
});

export default RootReducer;
