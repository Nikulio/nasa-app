//@flow
import * as consts from './consts';
import axios from "axios"

export const searchAction = (val:string) => async dispatch => {
	const root:string = "https://images-api.nasa.gov/";
	const res = await axios.get(`${root}/search?q=${val}`);
	return dispatch({
		type: consts.SEARCH_INIT,
		payload: res.data.collection.items
	})
};

export const changeMode = (val:string) => {
	return {
		type: consts.CHANGE_MODE,
		payload: val
	}
};
