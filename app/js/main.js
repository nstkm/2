var myModule = (function () {

	var init = function() {
		_setUpListeners();
	};

	var _setUpListeners = function() {
		$('#add-new-item').on('click' , _showModal); // открыть модальное окно
	};

	var _showModal = function (e) {
		console.log('Модальное окно');
		e.preventDefault();
			$('#new-project-popup').bPopup({
			speed: 650,
			transition: 'slideIn',
			transitionClose: 'slideBack'
		});
	};
	return {
		init : init
	};
}());

myModule.init();