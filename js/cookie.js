function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

var hide = function (elem) {
    elem.style.display = 'none';
};

var show = function (elem) {
    elem.style.display = 'block';
};

if (readCookie('cookie-notice-dismissed') == 'true') {
    var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101216626);
    var ref = document.getElementsByTagName( 'script' )[ 0 ];
    var script = document.createElement( 'script' );
    script.src = 'https://static.getclicky.com/js';
    ref.parentNode.insertBefore( script, ref );
} else {
    show(document.getElementById('cookie-notice'));
}
document.getElementById('cookie-notice-accept').addEventListener(
    'click', function () {
        createCookie('cookie-notice-dismissed', 'true', 31);
        hide(document.getElementById('cookie-notice'));
        location.reload();
    });