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
            closeClass: "b-close",
            speed: 550,
            transition: 'slideIn',
            transitionClose: 'slideBack',
            positionStyle: 'fixed',
            onClose: function(){
                this.find('.popup__input').trigger('hideTooltip');
                this.find('form').trigger('reset');
            }
        });
    };
    return {
        init : init
    };
}());

myModule.init();

