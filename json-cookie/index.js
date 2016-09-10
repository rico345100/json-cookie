"use strict";
function setCookie(name, value, options) {
	options = options || {};

	const days = options.days || options.expires || '';
	const cpath = options.path || '';
	const domain = options.domain || '';
	const secure = options.secure || '';

	if(!name) {
		throw new Error('Cookie must have name.');
	}
	else if(!value) {
		throw new Error('Cookie must have value.');
	}

	if(typeof value === 'object') {
		value = JSON.stringify(value);
	}

	value = escape(value);

	let cookieString = `${name}=${value}`;
	if(days) {
		let time = new Date();
		let expires = time.setDate(time.getDate() + days);
		
		cookieString += `; expires=${new Date(expires).toGMTString()}`;
	}
	if(cpath) cookieString += `; path=${cpath}`;
	if(domain) cookieString += `; domain=${domain}`;
	if(secure) cookieString += `; secure`;

	document.cookie = cookieString;
}

function getCookie(name) {
	let findName = new RegExp(name + '=([^;]*)');
	let result = findName.test(document.cookie) ? unescape(RegExp.$1) : '';

	// try deserialize
	try {
		let resultJSON = JSON.parse(result);
		result = resultJSON; 
	}
	// it is not a object!
	catch(e) {}

	return result;
}

function deleteCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

module.exports = {
	set: setCookie,
	get: getCookie,
	delete: deleteCookie
};