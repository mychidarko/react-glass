export const SET_USER = (state, dispatch, payload) => ({
	user: payload,
});

export const SET_TOKEN = (state, dispatch, payload) => ({
	token: payload,
});

export const SET_HAS_AUTH = (state, dispatch, payload) => ({
	hasAuth: payload,
});
