﻿$(document).ready(function() {
	/*console.log('ошибок нет');*/
	$('input, textarea').placeholder();
});

var contactMe = (function(){


	var init = function () {
		_setUpListeners();
	};


	var _setUpListeners = function () {
		$('#contact-me').on('submit', _formSubmit);
	};


	var _formSubmit = function (e) {
		console.log('отправка формы');
		e.preventDefault();

		var form = $(this),
				url = "contact_me.php",
				defObj = _ajaxForm(form, url);
				//работа с ответом от сервера
	};


	var _ajaxForm = function (form, url) {
		//console.log('ajax запрос, но с проверкой!');
		if (!validation.validateForm(form)) {
			return false;
		}
		//работа php-файла "contact_me.php"
	};



	return {
		init : init
	};


}());

contactMe.init();