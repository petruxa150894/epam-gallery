app.eventsPhotosPage = (function () {
	"use strict";

	function prevImgClick() {
		var carouselImages = $("#carouselImages").find(".carousel-image"),
			i;
		for (i = 0; i < carouselImages.length; i++) {
			if ($(carouselImages[i]).hasClass("active")) {
				$(carouselImages[i]).removeClass("active");
				if (i === 0) {
					$(carouselImages[carouselImages.length - 1]).addClass("active");
				} else {
					$(carouselImages[i - 1]).addClass("active");
				}
				break;
			}
		}
	}
	function nextImgClick() {
		var carouselImages = $("#carouselImages").find(".carousel-image"),
			i;
		for (i = 0; i < carouselImages.length; i++) {
			if ($(carouselImages[i]).hasClass("active")) {
				$(carouselImages[i]).removeClass("active");
				if (carouselImages.length - 1 === i) {
					$(carouselImages[0]).addClass("active");
				} else {
					$(carouselImages[i + 1]).addClass("active");
				}
				break;
			}
		}
	}
	function openModal(event) {
		var $target,
			carouselImages,
			carouselIndicators,
			idElement,
			i;
		carouselImages = $("#carouselImages").contents();
		carouselIndicators = $("#carouselIndicators").contents();
		for (i = 0; i < carouselImages.length; i++) {
			$(carouselImages[i]).removeClass("active");
			$(carouselIndicators[i]).removeClass("active");
		}
		$target = $(event.target);
		idElement = $target.parent(".photo").data("id");
		if (idElement || idElement === 0) {
			for (i = 0; i < carouselImages.length; i++) {
				if (i === idElement) {
					$(carouselImages[i]).addClass("active");
					$(carouselIndicators[i]).addClass("active");
				}
			}
			$("#photoModal").modal("show");
			$('.carousel').carousel('pause');
		}
	}
	function downloadImage() {
		var path = $(".carousel-images .active").data("path");
		document.location.href = "./../" + path;
	}
	function closeModal() {
		$("#photoModal").modal("hide");
	}

	$("#photos").on('click', openModal);
	$("#downloadImgBtn").on('click', downloadImage);
	$("#closeModalBtn").on('click', closeModal);
	$("#prevImg").on('click', prevImgClick);
	$("#nextImg").on('click', nextImgClick);

})();