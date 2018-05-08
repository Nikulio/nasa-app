import * as consts from "../actions/consts";

const initState = {
	loader: false
};

export function loaderReducer(state = initState, action) {
	switch (action.type) {
		case consts.LOADER_SHOW:
			return { loader: true };
		case consts.LOADER_HIDE:
			return { loader: false };
		default:
			return state;
	}
}
