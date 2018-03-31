function localStorageInit(actionStatus){
	console.log(localStorage.getItem('btnInfo'));
	$(".js-email-data-link").on("click", function(e){
		e.preventDefault();

		let $this = $(this),
		btnInfo = $this.attr("data-to-email"),
		linkUrl = $this.attr('href');

		localStorage.setItem('btnInfo', btnInfo);

		document.location.href = linkUrl;
	})
};
module.exports = localStorageInit;