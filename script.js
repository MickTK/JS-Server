/* Get URL Parameters */
const urlParams = new URLSearchParams(window.location.search);

$(document).ready(function(){

    /* 
        Parameters usage
        Query example = ?test1=foo&test2=foo
    */
    $("#test1").text(urlParams.get('test1'));
    $("#test2").text(urlParams.get('test2'));

    request();
});

function request(){
    $.ajax({
        type: 'GET',
        dataType: 'application/json',
        url: 'https://raw.githubusercontent.com/MickTK/JS-Server/main/Database/db.json',
        data: {},
        success: function(data){
           alert(data.foo);
        },
        error: function(){
           alert('Something went wrong!');
        }
      });
}
