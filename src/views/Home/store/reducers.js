export const SET_USER = (state, dispatch, payload) => {
	state.user = payload;
};

export const SET_TOKEN = (state, dispatch, payload) => {
	state.token = payload;
};

export const SET_REFRESH_TOKEN = (state, dispatch, payload) => {
	state.refreshToken = payload;
};

export const SET_RESET_TOKEN = (state, dispatch, payload) => {
	state.resetToken = payload;
};

export const SET_HAS_AUTH = (state, dispatch, payload) => {
	state.hasAuth = payload;
};
