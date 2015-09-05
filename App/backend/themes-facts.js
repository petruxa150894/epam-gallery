app.themesFacts = (function () {
	"use strict";

	var themes = {
		business: {
			icon: 'fa-briefcase',
			color: 'blue'
		},
		party: {
			icon: 'fa-glass',
			color: 'raspberry'
		},
		feast: {
			icon: 'fa-birthday-cake',
			color: 'raspberry'
		},
		game: {
			icon: 'fa-puzzle-piece',
			color: 'raspberry'
		},
		sport: {
			icon: 'fa-bullseye',
			color: 'lime-green'
		}
	};

	function getThemes() {
		return themes;
	}

	return {
		getThemes: getThemes
	};
})();