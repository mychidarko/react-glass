import axios from "axios";

import { API_URL } from "./../config/constants";
import { hasAuth, getToken, save } from "./User";

const SpyderErrors = {
	offline: "No network detected! This feature requires an internet connection!",
};

export function $request(data) {
	// eslint-disable-next-line no-param-reassign
	if (!data.method) data.method = "GET";

	const authHeaders = hasAuth() ? {
		Authorization: `Bearer ${getToken()}`,
	} : null;

	const headers = {
		...data.headers || null,
		...authHeaders,
	};

	const request = {
		url: `${API_URL}/${data.url}`,
		method: data.method,
		data: data.params,
		headers,
		withCredentials: true,
	};

	return new Promise(async (resolve, reject) => {
		if (!window.navigator.onLine) {
			return reject(SpyderErrors.offline);
		}

		try {
			const res = await axios(request);
			if (res.data.error && res.data.error.down) {
				return reject(res.data.error.text);
			}
			return resolve(res);
		} catch (err) {
			if (err.response) {
				if (err.response.status !== 200) {
					if (hasAuth() && err.response.status === 401) {
						// window.localStorage.clear();
						// window.location.reload();
					}

					return reject(err.response.data);
				}
			} else if (err.request) {
				return reject(err.request);
			} else {
				return reject(err.message);
			}

			const errors = String(err).split(" ");
			let errorString = "";

			for (let index = 0; index < errors.length; index + 1) {
				const error = errors[index];
				if (index > 0) {
					errorString = `${errorString} ${error} `;
				}
			}

			return reject(errorString);
		}
	});
}

/**
 * Make a get request
 *
 * @param {String} url The url to access
 * @param {Object} headers The request headers
 */
export function $get(url, headers = null) {
	return new Promise((resolve, reject) => (
		$request({
			url, headers, method: "GET",
		})
		.then(res => resolve(res))
		.catch(err => reject(err))
	));
}

/**
 * Make a post request
 *
 * @param {String} url The url to access
 * @param {Object} params The data to pass in request
 * @param {Object} headers The request headers
 */
export function $post(url, params = null, headers = null) {
	return new Promise((resolve, reject) => (
		$request({
			url, params, headers, method: "POST",
		})
		.then(res => resolve(res))
		.catch(err => reject(err))
	));
}

/**
 * Get a user from server and save in storage
 *
 * @param data The user credentials to look up
 */
export async function $login(data) {
	return new Promise((resolve, reject) => (
		$request({
			url: "users/admin/login",
			method: "POST",
			params: data,
		})
		.then(res => resolve(res))
		.catch(err => reject(err))
	));
}

/**
 * Create a new user on server and save in storage
 *
 * @param user The user credentials
 * @param $function The callback function to run after saving user
 */
export async function $register(data, $function, $err = null) {
	try {
		const res = await $post("auth/register", data);
		save(res.data);
		return $function(res);
	} catch (err) {
		if ($err) return $err(err);
	}
	return null;
}
