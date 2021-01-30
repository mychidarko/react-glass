import { USER_STORAGE_KEY, TOKEN_STORAGE_KEY } from "./../config/constants";

/**
 * Get the current user
 *
 * @param selector The particular field to return
 */
export function get(selector = null) {
	return selector ? (
		JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY))[selector]
	) : JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY));
}

/**
 * Save a user in storage
 *
 * @param user The user object to save
 */
export function save(user) {
	window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

/**
 * Remove current user from storage
 */
export function remove() {
	window.localStorage.removeItem(USER_STORAGE_KEY);
}

/**
 * Return user token
 */
export function getToken() {
	return window.localStorage.getItem(TOKEN_STORAGE_KEY);
}

/**
 * Check if user is logged in
 */
export function hasAuth() {
	return !!(getToken() && get());
}

/**
 * Completely logout a user and remove from storage
 *
 * @param $function The callback function to run after removing user
 */
export function logout($function = null) {
	window.localStorage.removeItem(TOKEN_STORAGE_KEY);
	remove();

	if ($function !== null) return $function();
	return null;
}
