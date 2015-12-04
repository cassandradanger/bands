//Ajax
//REST - standardization of communication with server

//Get - pulls info from server
//Post - sends info to server
//Put - modifies existing file in server
//Delete - deletes file from server

//Connection between client and server

//Ajax - asynchronous javascript and xml

//Request -
//Response -

//
var fortuneCookies = null;

$(document).ready(function(){
    $('#button').on('click',function(){

        $('.here').empty();

        $.get('data.json', function(data) {
            fortuneCookies = data;

            var i = Math.floor((Math.random() * fortuneCookies.firsts.length-1) + 1);
            var first = fortuneCookies.firsts[i].first;
            var i = Math.floor((Math.random() * fortuneCookies.seconds.length-1) + 1);
            var second = fortuneCookies.seconds[i].second;
            var i = Math.floor((Math.random() * fortuneCookies.thirds.length-1) + 1);
            var third = fortuneCookies.thirds[i].third;

            console.log("It worked");
            $(".here").append("<div><p>" + first + " " + second + " " + third + "</p></div>").hide().fadeIn("slow");
        });
    });
});