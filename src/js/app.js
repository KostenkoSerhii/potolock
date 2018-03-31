import svgUseIt from 'svg-use-it';
import slick from 'slick-carousel';
import slider from './components/slider.js';
import counter from './components/counter.js';
import localStorageInit from './components/localStorageLinks.js';
import formSubmit from './components/form.js';
import AOS from 'aos';
$(document).ready(function(){
	svgUseIt();

	slider();
	
	AOS.init({
		disable: 'mobile'
	});


	let date = new Date();
	let dayOfMonth = date.getDate();



	counter(dayOfMonth);
	formSubmit();
	// formSubmit(actionStatus);

	localStorageInit();
	//end
});

