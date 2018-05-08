import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { loaderReducer } from "./loaderReducer";

export default combineReducers({
	posts: searchReducer,
	loader: loaderReducer
});
