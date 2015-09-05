app.renderMediaFunctions = (function () {
	"use strict";

	function drawFact(fact, theme) {
		var factMarkup = [
			'<section class="uui-info-panel-vertical ' + theme.color + ' album">' +
				'<a class="album-link" href="./Pages/albums.html?fact=' + fact.id + '">' +
					'<div class="info-panel-body album-image" style="background-image: url(./' +
					fact.imgPath + '); background-size: cover;">' +
					'</div>' +
					'<div class="info-panel-footer album-description">' +
						'<div class="info-panel-section album-date">' +
							fact.date +
							'<i class="fa ' + theme.icon + ' album-icon"></i>' +
						'</div>' +
					'</div>' +
					'<div class="album-title">' + fact.title + '</div>' +
				'</a>' +
			'</section>'
		].join('');
		return factMarkup;
	}
	function drawMediaPage() {
		var $factsBody = $("#facts"),
			facts = app.facts.getFacts(),
			themes = app.themesFacts.getThemes(),
			tempHtml = [],
			tempElement,
			fact, i;
		$factsBody.empty();
		for (i = 0 ; i < facts.length; i++) {
			fact = facts[i];
			tempElement = drawFact(fact, themes[fact.theme]);
			tempHtml.push(tempElement);
		}
		$factsBody.append(tempHtml);
	}

	return {
		drawMediaPage: drawMediaPage
	};
})();