$(document).ready(function(){
    var $cat = $("#cat");
    $("#btnStart").click(function(){
        $cat.animate({
            left: "480px"
        }, 1000);
    })
})