$(document).ready(function(){
    $("#login").click(function(event){
        event.preventDefault();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://micktk.github.io/JS-Server/Database/db.json',
            data: {},
            success: function(data){
               if(data.username == $("#username").val() && data.password == $("#password").val())
                location.href = 'https://micktk.github.io/JS-Server/post?' + 'user=' + $("#username").val() + '&' + 'pass=' + $("#password").val();
               else
                alert("Username or password incorrect!");
            },
            error: function(){
               alert("Something went wrong!");
            }
        });
    });
});
