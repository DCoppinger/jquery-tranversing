$(document).ready(function() {
    // put your code here
    // $(".container").click(function() {
    // $(this).siblings().hide();
    // });

    // $(".theButton").click(function() {
    //    $(this).hide();
    //});

    $(".container").click(function() {
        $(this).siblings().fadeTo("slow", 0.1);
    });

    $(".superButton").click(function() {
        $("#panel .container").siblings().fadeTo("slow", 1.0);
    });

    $(".theButton").mouseenter(function() {
        $(this).addClass("black");
    });

    //$(".theButton").mouseenter(function() {
    //    $(this).css("background-color","black");
    //});

    $(".theButton").mouseleave(function() {
        $(this).removeClass("black");
    });

    //$(".theButton").hover(function() {
    //    $(this).css("background-color","black");
    // });

    //$(".theButton").hover(function(){$(this).css("background-color", "black");},function(){$(this).css("background-color", "black");});
    //$(".theButton").hover(function(){$(this).addClass("makeBlack");},function(){$(this).removeClass("makeBlack");});
});
