$(document).ready(function() {
    $('input').placeholder();
});

var loginPage = (function(){


    var init = function () {
        _setUpListeners();
    };


    var _setUpListeners = function () {
        $('#login-page').on('submit', _formSubmit);
    };


    var _formSubmit = function (e) {
        console.log('отправка формы');
        e.preventDefault();

        var form = $(this),
                url = "login.php",
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

loginPage.init();