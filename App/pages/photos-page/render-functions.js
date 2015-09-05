app.renderPhotosFunctions = (function () {
	"use strict";

	function drawPhoto(url) {
		var photoMarkup = [
			'<div class="uui-info-panel-vertical photo" data-toggle="modal" ' +
			'data-target="#popup1">' +
				'<div class="info-panel-body album-image" style="background-image: url(./../' +
				url + '); background-size: cover;">' +
				'</div>' +
			'</div>'
		].join('');
		return photoMarkup;
	}
	function drawTitleInformation(fact, theme, numberPart) {
		var titleInformationMarkup = [
				'<div class="album-title">' +
					'<i class="fa ' + theme.icon + ' ' + theme.color + ' album-icon blue"></i>' +
						fact.title + ' part ' + numberPart +
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
	function drawOtherAlbum(factId, album, i) {
		var otherAlbumMarkup = [
			'<div class="uui-info-panel-vertical other-album">' +
				'<a class="album-link" href="./../Pages/photos.html?fact=' +
				factId + '&album=' + album.id + '&part=' + (i + 1) + '">' +
					'<div class="info-panel-body album-image" style="background-image: url(./../' +
					album.cover + '); background-size: cover;">' +
					'</div>' +
					'<div class="other-album-title">Part ' + (i + 1) + '</div>' +
				'</a>' +
			'</div>'
		].join('');
		return otherAlbumMarkup;
	}
	function drawCarouselImage(url) {
		var imageHtml = [
			'<div class="item carousel-image" style="background-image: url(./../' + url + '); ' +
			'background-size: cover;">' +
			'</div>'
		].join('');
		return imageHtml;
	}
	function drawCarouselIndicator(url, i) {
		var indicatorHtml = [
			'<li data-target="#uuiCarousel" data-slide-to="' + i + '" ' +
			'style="background-image: url(./../' +
				url + '); background-size: cover;">' +
			'</li>'
		].join('');
		return indicatorHtml;
		
	}
	function drawPhotosPage() {
		var $titleInformation = $("#titleInformation"),
			$photosBody = $("#photos"),
			$otherAlbums = $("#otherAlbums"),
			getObj, i, numberPart,
			tempHtml = [], $tempElement,
			idFact, fact, album,
			albumId, albumsIds, photos,
			themes = app.themesFacts.getThemes();
		$titleInformation.empty();
		$photosBody.empty();
		$otherAlbums.empty();
		getObj = app.helperFunctions.parseGET();
		idFact = getObj.fact;
		albumId = getObj.album;
		numberPart = getObj.part;
		fact = app.facts.getFactById(+idFact);
		$titleInformation.html(drawTitleInformation(fact, themes[fact.theme], numberPart));
		photos = app.albums.getAlbumById(+albumId).photoList;
		for (i = 0 ; i < photos.length; i++) {
			$tempElement = $(drawPhoto(photos[i], themes[fact.theme]));
			$tempElement.data("id", i);
			tempHtml.push($tempElement);
		}
		$photosBody.append(tempHtml);
		tempHtml.length = 0;
		albumsIds = fact.photoAlbums;
		for (i = 0 ; i < albumsIds.length; i++) {
			if (+numberPart === (i + 1)) {
				continue;
			}
			album = app.albums.getAlbumById(albumsIds[i]);
			$tempElement = $(drawOtherAlbum(idFact, album, i));
			tempHtml.push($tempElement);
		}
		$otherAlbums.append(tempHtml);
		drawModalWindow(photos);
	}
	function drawModalWindow(photos) {
		var $carouselImages = $("#carouselImages"),
			$carouselIndicators = $("#carouselIndicators"),
			otherBlockHtml = '<div class="arrow"></div>',
			tempIndicator,
			$tempImage, i, j = 0,
			tempHtmlIndicators = [],
			tempHtmlImages = [];
		for (i = 0; i < photos.length; i++) {
			$tempImage = $(drawCarouselImage(photos[i]));
			$tempImage.data("path", photos[i]);
			tempHtmlImages.push($tempImage);
		}
		
		i = 0;
		do {
			j++;
			if (i === photos.length) {
				i = 0;
			}
			tempIndicator = drawCarouselIndicator(photos[i], i);
			tempHtmlIndicators.push(tempIndicator);
			i++;
		} while (j !== 5);
		
		tempHtmlImages.push(otherBlockHtml);
		$carouselIndicators.empty();
		$carouselImages.empty();
		$carouselImages.append(tempHtmlImages);
		$carouselIndicators.append(tempHtmlIndicators);
	}

	return {
		drawPhotosPage: drawPhotosPage
	};
})();