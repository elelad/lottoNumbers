/**
 * Created by Elad on 14/06/2016.
 */

function getRandom() {
    var min = 10000;
    var max = 99999;
    (localStorage.getItem("min") != null && localStorage.getItem("min") != "")? min = parseInt(localStorage.getItem("min")) : min = 10000;
    (localStorage.getItem("max") != null && localStorage.getItem("max") != "")? max = parseInt(localStorage.getItem("max")) : max = 99999;
    //$("#randomTitle").show();
    document.getElementById("random").innerHTML = Math.round(Math.random()*(max - min)+min);
    $("#btnRand").text("Try again");
    $(".randomCard").fadeIn(700);
}

function setMinMax() {
    let min = document.getElementById("minInp").value;
    let max = document.getElementById("maxInp").value;
    localStorage.setItem("min", min);
    localStorage.setItem("max", max);
    $("#btnRand").text("Get");
    $(".randomCard").hide();
    $("body").pagecontainer( "change", "#main", {transition: "fadeout(500)", showLoadMsg: true});
}

function setDigit(digitNumMin,digitNumMax) {
    localStorage.setItem("digitNumMin", digitNumMin);
    localStorage.setItem("digitNumMax", digitNumMax);
    let tempStr = digitNumMax.toString();
    tempStr = tempStr.length;
    localStorage.setItem("digit", tempStr);
    setFromLocalStorge();
    $("#minInp").attr("min", digitNumMin).attr("max", digitNumMax).val(digitNumMin);
    $("#maxInp").attr("min", digitNumMin).attr("max", digitNumMax).val(digitNumMax);
    $("div#range-slider").rangeslider("refresh");
}

function setFromLocalStorge(event) {
    for (let i=2; i<=6; i++){
        $("#digitBtn" + i).removeClass("ui-btn-active");
    }
    let digit = localStorage.getItem("digit");
    $("#digitBtn" + digit).addClass("ui-btn-active").blur();
    let digitNumMin = localStorage.getItem("digitNumMin");
    let digitNumMax = localStorage.getItem("digitNumMax");
    let min = localStorage.getItem("min");
    let max = localStorage.getItem("max");
    //$("#minInp").attr("min", digitNumMin).attr("max", digitNumMax).val(parseInt(min));
    //$("#maxInp").attr("min", digitNumMin).attr("max", digitNumMax).val(parseInt(max));
    //$("div#range-slider").rangeslider("refresh");
}

$(document).on("pagechange", setFromLocalStorge);

$(document).ready(function () {
    $(".randomCard").hide();
});