const urlParams = new URLSearchParams(window.location.search);
var json;

$(document).ready(function(){
    $("#test1").text(urlParams.get('test1'));
    $("#test2").text(urlParams.get('test2'));

    json = request('https://micktk.github.io/JS-Server/Database/db.json');
});

function request(json){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: json,
        data: {},
        success: function(data){
           alert(data.foo);
           return data;
        },
        error: function(){
           alert('Something went wrong!');
           return undefined;
        }
    });
}
