// JavaScript File
/*global $*/

$("#broly").click(function(){
    $(".planet").hide();
    $(".kaioken").hide();
    $(".vegeta").hide();
    $(".frieza").hide();
    $("h3").hide();
    $("h4").hide();
    $("h5").hide();
    $(".prince").show();
    $(".goku").show();
    $(".gods").show();
    $(".berserker").show();
    $(".poster").show();
    $(".fusion").show();
    $(".enemy").show();
    $(".piccolo").show();
});

$("#DBS").click(function(){
    $(".planet").show();
    $(".kaioken").show();
    $(".vegeta").show();
    $(".frieza").show();
    $("h3").show();
    $("h4").show();
    $("h5").show();
    $(".prince").hide();
    $(".goku").hide();
    $(".piccolo").hide();
    $(".enemy").hide();
    $(".gods").hide();
    $(".berserker").hide();
    $(".fusion").hide();
    $(".poster").hide();
});