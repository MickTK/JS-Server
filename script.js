var json;

$(document).ready(function(){
    $("#test1").text("test1 = " + getParam('test1'));
    $("#test2").text("test2 = " + getParam('test2'));

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
           json = data;
           console.log(json);
        },
        error: function(){
           json = undefined;
           console.log("Something went wrong!");
        }
    });
}
