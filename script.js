var json;

$(document).ready(function(){
    $("#test1").text(getParam('test1'));
    $("#test2").text(getParam('test2'));

    request(json, 'https://micktk.github.io/JS-Server/Database/db.json');
});

function getParam(param){
    return new URLSearchParams(window.location.search).get(param);
}

function request(json, url){
    var result;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        data: {},
        success: function(data){
           alert(data.foo);
           json = data;
           console.log(json);
        },
        error: function(){
           alert('Something went wrong!');
           json = undefined;
        }
    });
}
