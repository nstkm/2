
var validation = (function () {


	var init = function () {
		_setUpListeners();
	};


	var _setUpListeners = function () {
		$('form').on('keydown', '.has-error',  _removeError);
		$('form').on('reset', _clearForm);
	};


	var _removeError = function () {
		$(this).removeClass('has-error');
	};


	var _clearForm = function (form) {
		console.log('reset');
		var form = $(this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');
	};


	var _createQtip = function (item, position) {
		console.log('создание кутипа');


		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			};
		} else {
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			};
		}


		item.qtip({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-red my-style qtip-rounded',
				tip: {
					height: 7,
					width: 10
				}
			}
		}).trigger('show');
	};


	var validateForm = function (form) {
		console.log("в валидации");

		var validElements = form.find('input, textarea , .upload-image' ).not('input[type="file"], input[type="hidden"]'),
			valid= true;
		//console.log(validationItems);

		$.each(validElements, function(index, val) {
			var element = $(val),
				val = element.val(),
				position = element.attr('qtip-position');

			if (val.length == 0) {
					element.addClass('error');
					_createQtip(element, position);
						validElements.addClass('has-error').removeClass('has-success');
						valid = false;
				}else{
						//validElements.removeClass('has-error').addClass('has-success');
						_createQtip('hide');
				}
			});
			return valid;
	};

	return {
		init : init,
		validateForm : validateForm
	};
})();

validation.init();