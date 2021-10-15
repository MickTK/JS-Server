# JS Server
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

### Query reader
#### Function
````
function getParam(param){
    return new URLSearchParams(window.location.search).get(param);
}
````
#### Query syntax
````
<link>?param1=value&param2=value&...&paramn=value
````
#### Example
````
micktk.github.io/JS-Server?test1=Hello&test2=World!
````

### JSON Request
#### Function
````
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
````
