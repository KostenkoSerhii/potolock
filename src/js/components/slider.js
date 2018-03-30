function slider(){
	let btnPrev = `<div class="btn-prev"><?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 192 320" style="enable-background:new 0 0 192 320;" xml:space="preserve">
<polygon points="192,300.6 171.3,320 0,160 171.3,0 192,19.3 41.5,160 "/>
</svg></div>`;
	let btnNext = `<div class="btn-next"><?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 192 320" enable-background="new 0 0 192 320" xml:space="preserve">
<polygon points="150.5,160 0,19.3 20.7,0 192,160 20.7,320 0,300.6 "/>
</svg></div>`;

	$(".js-slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: btnPrev,
		nextArrow: btnNext
	})
};
module.exports = slider;