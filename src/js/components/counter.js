	import {data} from'./data.js';

	function counter(dayOfMonth){
		let counterObj;
		let $matElem = $(`.js-counter[data-counter="mat"]`);
		let $satinElem = $(`.js-counter[data-counter="satin"]`);
		counterObj = data[dayOfMonth - 1];
		// console.log(counterObj);

		$matElem.html(`${counterObj.mat}`);
		$satinElem.html(`${counterObj.satin}`);




// insertCountOnPage()
		// counter.each(function(index, item){
		// 	let $item = $(item);
		// 	let attr = $($item).attr('data-counter');

		// 	if(attr == 'mat'){
		// 		counterObj = matArr; 
		// 	}else if(attr == 'satin'){
		// 		counterObj = satinArr;
		// 	};


		// 	parseObj(counterObj[day], $item)
		// });
		// function parseObj(arr, item){

		// 	for (let i = 0; i < arr.length; i++) {
		// 		let lastVeiw = arr[i].maxTime == 0 ? true: false;

		// 		if(!lastVeiw){
		// 			if( hour >= arr[i].minTime && hour < arr[i].maxTime ){
		// 				parseCount(arr[i].value, item)
		// 			}
		// 		}else{
		// 			if( hour >= arr[i].minTime ){
		// 				parseCount(arr[i].value, item)
		// 			}
		// 		}
		// 	};

		// };
	// 	function parseCount(value, item){

	// 	let valueStr = value + "";
	// 	let valueLength = valueStr.length;
	// 	let simbolArr = [];

	// 	for (let i = 0; i < valueLength; i++) {
	// 		simbolArr.push(valueStr[i])
	// 	}

	// 	insertCountOnPage(simbolArr, item);
	// };


};
module.exports = counter;