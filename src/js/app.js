import svgUseIt from 'svg-use-it';
import slick from 'slick-carousel';
import slider from './components/slider.js';
import counter from './components/counter.js';
import localStorageInit from './components/localStorageLinks.js';
import formSubmit from './components/form.js';
$(document).ready(function(){
	svgUseIt();

	slider();

	let date = new Date();
	let dayOfMonth = date.getDate();



	counter(dayOfMonth);
	formSubmit();
	// formSubmit(actionStatus);

localStorageInit();
	//end
});

