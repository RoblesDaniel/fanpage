// JavaScript File
/*global $*/
$("#anime").click(function(){
    $(".kaioken").show();
    $(".planet").show();
    $(".vegeta").show();
    $(".frieza").show();
    $("h3").show();
    $("h4").show();
    $("h5").show();
    $("#DBSB").hide();
});
$("#movie").click(function(){
    $(".kaioken").hide();
    $(".planet").hide();
    $(".vegeta").hide();
    $(".frieza").hide();
    $("h3").hide();
    $("h4").hide();
    $("h5").hide();
    $("#DBSB").show();
});