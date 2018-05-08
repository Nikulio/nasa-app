import * as consts from "../actions/consts";
import _ from "lodash";

const initialState = {
	items: [],
	mode: "image"
};

export function searchReducer(state = initialState, action) {
	switch (action.type) {
		case consts.SEARCH_INIT:
			return {
				items: [...action.payload],
				mode: state.mode
			};
		case consts.CHANGE_MODE:
			return {
				items: [...state.items],
				mode: action.payload
			};
		default:
			return state;
	}
}
