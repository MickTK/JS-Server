const urlParams = new URLSearchParams(window.location.search);

$(document).ready(function(){
    $("#test1").text(urlParams.get('test1'));
    $("#test2").text(urlParams.get('test2'));
});
