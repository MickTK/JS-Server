/* Get URL Parameters */
const urlParams = new URLSearchParams(window.location.search);

$(document).ready(function(){

    /* 
        Parameters usage
        Query example = ?test1=foo&test2=foo
    */
    $("#test1").text(urlParams.get('test1'));
    $("#test2").text(urlParams.get('test2'));

});
