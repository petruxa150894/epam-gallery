app.renderAlbumsFunctions = (function () {
	"use strict";

	function drawAlbum(factId, album, i) {
		var albumMarkup = [
			'<div class="uui-info-panel-vertical part">' +
				'<a class="album-link" href="./../Pages/photos.html?fact=' +
				factId + '&album=' + album.id + '&part=' + (i + 1) + '">' +
					'<div class="info-panel-body part-image" style="background-image: url(./../' +
					album.cover + '); background-size: cover;">' +
					'</div>' +
					'<div class="album-title">Part ' + (i + 1) + '</div>' +
				'</a>' +
			'</div>'
		].join('');
		return albumMarkup;
	}
	function drawTitleInformation(fact, theme) {
		var titleInformationMarkup = [
				'<div class="album-title">' +
					'<i class="fa ' + theme.icon + ' ' + theme.color + ' album-icon blue"></i>' +
						fact.title +
				'</div>' +
				'<div class="info-panel-footer album-description">' +
					fact.description +
				'</div>' +
				'<div class="info-panel-section album-date">' +
					fact.date +
				'</div>'
			].join('');
		return titleInformationMarkup;
	}
	function drawAlbumsPage() {
		var $titleInformation = $("#titleInformation"),
			$albumsBody = $("#albums"),
			getObj, i,
			tempHtml = [], tempElement,
			idFact, fact,
			albumsIds, album,
			themes = app.themesFacts.getThemes();
		$titleInformation.empty();
		$albumsBody.empty();
		getObj = app.helperFunctions.parseGET();
		idFact = getObj.fact;
		fact = app.facts.getFactById(+idFact);
		$titleInformation.html(drawTitleInformation(fact, themes[fact.theme]));
		albumsIds = fact.photoAlbums;
		for (i = 0 ; i < albumsIds.length; i++) {
			album = app.albums.getAlbumById(albumsIds[i]);
			tempElement = drawAlbum(fact.id, album, i);
			tempHtml.push(tempElement);
		}
		$albumsBody.append(tempHtml);
	}

	return {
		drawAlbumsPage: drawAlbumsPage
	};
})();