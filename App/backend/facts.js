app.facts = (function () {
	"use strict";

	var facts = [
		{
			id: 1,
			date: 'August 27, 2015',
			imgPath: 'Content/img/1.jpg',
			title: 'it weekend summer 2015 samara',
			description: 'Some description you can see here. ' +
				'And some description you can read here. ' +
				'Description about this party',
			theme: 'business',
			country: 'Australia',
			city: 'Sydney',
			photoAlbums: [1, 2, 3, 5]
		},
		{
			id: 2,
			date: 'August 3, 2015',
			imgPath: 'Content/img/2.jpg',
			title: 'sec August 2015',
			description: 'Some description you can see here. ' +
				'And some description you can read here. ' +
				'Description about this party',
			theme: 'party',
			country: 'Russia',
			city: 'Saratov',
			photoAlbums: [4, 5]
		},
		{
			id: 3,
			date: 'August 27, 2015',
			imgPath: 'Content/img/3.jpg',
			title: 'epam conference in usa',
			description: 'Some description you can see here. ' +
				'And some description you can read here. ' +
				'Description about this party',
			theme: 'feast',
			country: 'Russia',
			city: 'Moscow',
			photoAlbums: [3, 4, 5]
		},
		{
			id: 4,
			date: 'August 27, 2015',
			imgPath: 'Content/img/8.jpg',
			title: 'minsk open day for kids',
			description: 'Some description you can see here. ' +
				'And some description you can read here. ' +
				'Description about this party',
			theme: 'game',
			country: 'Canada',
			city: 'Toronto',
			photoAlbums: [3, 1, 2]
		},
		{
			id: 5,
			date: 'August 27, 2014',
			imgPath: 'Content/img/5.jpg',
			title: 'gomel lazertag cup',
			description: 'Some description you can see here. ' +
				'And some description you can read here. ' +
				'Description about this party',
			theme: 'sport',
			country: 'Russia',
			city: 'St.Peterburg',
			photoAlbums: [1, 2, 3, 4, 5]
		},
		{
			id: 6,
			date: 'June 1, 2015',
			imgPath: 'Content/img/6.jpg',
			title: 'sec june 2015',
			description: 'Some description you can see here. ' +
				'And some description you can read here.' +
				' Description about this party',
			theme: 'party',
			country: 'Russia',
			city: 'Minsk',
			photoAlbums: [1, 4, 5]
		},
		{
			id: 7,
			date: 'May 7, 2014',
			imgPath: 'Content/img/7.jpg',
			title: 'epam conference in usa',
			description: 'Some description you can see here. ' +
				'And some description you can read here. ' +
				'Description about this party',
			theme: 'business',
			country: 'USA',
			city: 'Vashington',
			photoAlbums: [1, 2, 3, 4, 5]
		}
	];

	function getFactById(id) {
		var fact = null, i;
		for (i = 0; i < facts.length; i++) {
			if (facts[i].id === id) {
				fact = facts[i];
				break;
			}
		}
		return fact;
	}
	function getFacts() {
		return facts;
	}

	return {
		getFacts: getFacts,
		getFactById: getFactById
	};
})();