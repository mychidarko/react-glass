/**
 * Get all URL parameters
 */
function params() {
    const urlParams = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
        urlParams[key] = value;
    });
    return urlParams;
}

/**
 * Get a particular URL Parameter
 *
 * @param {String} param Parameter to get
 */
function get(param) {
	return new URLSearchParams(window.location.search).get(param);
}

/**
 * Check for the presence of a URL parameter, set one if it's absent
 *
 * @param {String} parameter Paramter to find
 * @param {String} defaultValue Value to use if *Parameter* is absent
 */
function find(parameter, defaultValue) {
	let param = defaultValue;

	if (window.location.href.indexOf(parameter) > -1) {
		param = params()[parameter];
	}

	return param;
}

/**
 * Encode a URI
 *
 * @param {String} uri The URI to encode
 * @param {String} hash (Optional) A hash to encode URI, use 'default' for default JS URI encoding
 */
function encode(uri, hash = "default") {
	if (hash === "default") {
		return encodeURI(uri);
	}
	return uri;
}

/**
 * Decode an encoded URI
 *
 * @param {String} uri The value to decode
 * @param {String} hash (Optional) A hash to encode URI, use 'default' for default JS URI encoding
 */
function decode(uri, hash = "default") {
	if (hash === "default") {
		return decodeURI(uri);
	}
	return uri;
}

export default {
	params, find, get, encode, decode,
};
