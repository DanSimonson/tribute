$(document).ready(function(){

    function setHeight() {
        windowHeight = $(window).innerHeight();
        $(".jumbotron").css('background-image','url(img/download.jpg)');
        $(".jumbotron").css('height', windowHeight);
    }
    setHeight();
    $(window).resize(function() {
        setHeight();
    });


    //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    //var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    //windowHeight = $(window).innerHeight();
    //$(".jumbotron").css('background-image','url(img/download.jpg)');
    //$(".jumbotron").css('heigh', h);
 });



//document.getElementById(tabName).style.background-image= 'url("img/download.jpg")';