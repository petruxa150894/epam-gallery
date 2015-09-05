app.helperFunctions = (function () {
	"use strict";
	function parseGET() {
		var tmpArray = [],
			tmpArray2 = [],
			getObj = {},
			url = location.search,
			i;
		if (url !== '') {
			tmpArray = (url.substr(1)).split('&');
			for (i = 0; i < tmpArray.length; i++) {
				tmpArray2 = tmpArray[i].split('=');
				getObj[tmpArray2[0]] = tmpArray2[1];
			}
		}
		return getObj;
	}
	function datePicker() {
		$.fn.datepicker.defaults.format = "mm/dd/yy";
		$('#datepicker').datepicker();
	}

	return {
		parseGET: parseGET,
		datePicker: datePicker
	};
})();