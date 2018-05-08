import * as consts from "./consts";
import axios from "axios";

export const searchAction = (val: string) => async dispatch => {
	const root: string = "https://images-api.nasa.gov/";
	dispatch({ type: consts.LOADER_SHOW });
	const res = await axios.get(`${root}/search?q=${val}`);
	dispatch({ type: consts.SEARCH_INIT, payload: res.data.collection.items });
	dispatch({ type: consts.LOADER_HIDE });
};

export const changeMode = (val: string) => {
	console.log(val);
	return {
		type: consts.CHANGE_MODE,
		payload: val
	};
};
