$(document).ready(function(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://micktk.github.io/JS-Server/Database/db.json',
        asynch: false,
        data: {},
        success: function(data){
           if(data.username == getParam('user') && data.password == getParam('pass'))
            $('h2').text(data.content[0] + ' ' + data.content[1]);
           else{
            alert("Username or password incorrect!");
            location.href = 'https://micktk.github.io/JS-Server/index'
           }
        },
        error: function(){
           alert("Something went wrong!");
           location.href = 'https://micktk.github.io/JS-Server/index'
        }
    });
});

function getParam(param){
    return new URLSearchParams(window.location.search).get(param);
}
