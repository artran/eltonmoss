$(document).ready(highlightActiveLang);

function setLang(languageCode) {
    createCookie('django_language', languageCode, 3650);
    highlightActiveLang();
    return false;
}

function highlightActiveLang() {
    var langCode = readCookie('django_language');
    if (langCode == null ) langCode = 'en';
    var langStr = 'lang-' + langCode;
    
    $('ul.language li').each(function() {
        $(this).removeClass('active');
    });
    $('ul.language li a.' + langStr).parent().addClass('active');
}