app.albums = (function () {
	"use strict";

	var albums = [
		{
			id: 1,
			cover: 'Content/img/8.jpg',
			photoList: ['Content/img/8.jpg', 'Content/img/9.jpg',
			'Content/img/10.jpg']
		},
		{
			id: 2,
			cover: 'Content/img/12.jpg',
			photoList: ['Content/img/16.jpg', 'Content/img/17.jpg',
			'Content/img/18.jpg', 'Content/img/21.jpg', 'Content/img/22.jpg']
		},
		{
			id: 3,
			cover: 'Content/img/13.jpg',
			photoList: ['Content/img/19.jpg', 'Content/img/20.jpg',
			'Content/img/17.jpg', 'Content/img/18.jpg']
		},
		{
			id: 4,
			cover: 'Content/img/14.jpg',
			photoList: ['Content/img/23.jpg', 'Content/img/24.jpg',
			'Content/img/25.jpg', 'Content/img/26.jpg']
		},
		{
			id: 5,
			cover: 'Content/img/15.jpg',
			photoList: ['Content/img/27.jpg', 'Content/img/28.jpg',
			'Content/img/29.jpg', 'Content/img/30.jpg']
		}
	];
	function getAlbumById(id) {
		var album = null, i;
		for (i = 0; i < albums.length; i++) {
			if (albums[i].id === id) {
				album = albums[i];
				break;
			}
		}
		return album;
	}
	function getAlbums() {
		return albums;
	}

	return {
		getAlbumById: getAlbumById,
		getAlbums: getAlbums
	};
})();