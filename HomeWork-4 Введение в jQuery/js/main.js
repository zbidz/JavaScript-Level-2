$(document).ready(function () {
    var ACTIVE = 'active';
    $('.btns').on('click', 'div:not(.active)', function () {
        $('.btns > .active').removeClass(ACTIVE);
        $('.blocks > .active').removeClass(ACTIVE);
        $('.btns > div:eq(' + $(this).index() + ')').addClass(ACTIVE);
        $('.blocks > div:eq(' + $(this).index() + ')').addClass(ACTIVE);
    })
});

$(document).ready(function () {
    var ACTIVE = 'active';
    $('.btns1').on('click', 'div:not(.active)', function () {
        $('.btns1 > .active').removeClass(ACTIVE);
        $('.blocks1 > .active').removeClass(ACTIVE);
        $('.btns1 > div:eq(' + $(this).index() + ')').addClass(ACTIVE);
        $('.blocks1 > div:eq(' + $(this).index() + ')').addClass(ACTIVE);
    })
});

$(document).ready(function () {
    var $city = $('.select_city');
    $.ajax({
        type: 'GET',
        url: './city.json',
        success: function (data) {
            $.each(data.city, function (index, value) {
                $city.append('<option>' + value + '</option>');
            })
        }
    })
});

function validate(form, name, phone, email) {
    var regName = /^[a-zA-Zа-яА-ЯёЁ]*[^.0-9\/#@&?;:|,><}{')(*^%!"\][]$/;
    var name = document.forms[form].elements[name].value;
    if (regName.test(name) == false) {
        var border = document.getElementById('name');
        border.setAttribute('style', 'border: 1px solid red');
        var error_name = document.getElementById('error_name');
        error_name.innerText = '*Неверное имя';

    } else {
        var border = document.getElementById('name');
        border.setAttribute('style', 'border: 1px solid lightgreen');
        var error_name = document.getElementById('error_name');
        error_name.innerText = '';
    }

    var regPhone = /^\+\d\(\d{3}\)\d{3}-\d{4}$/i;
    var phone = document.forms[form].elements[phone].value;
    if (regPhone.test(phone) == false) {
        var border = document.getElementById('phone');
        border.setAttribute('style', 'border: 1px solid red');
        var error_name = document.getElementById('error_phone');
        error_name.innerText = '*Неверный формат телефона';
    } else {
        var border = document.getElementById('phone');
        border.setAttribute('style', 'border: 1px solid lightgreen');
        var error_name = document.getElementById('error_phone');
        error_name.innerText = '';
    }

    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form].elements[email].value;
    if (regEmail.test(address) == false) {
        var border = document.getElementById('email');
        border.setAttribute('style', 'border: 1px solid red');
        var error_name = document.getElementById('error_email');
        error_name.innerText = '*Неверный формат E-mail';

    } else {
        var border = document.getElementById('email');
        border.setAttribute('style', 'border: 1px solid lightgreen');
        var error_name = document.getElementById('error_email');
        error_name.innerText = '';
    }
    return false;
}