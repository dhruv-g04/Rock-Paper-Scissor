var num1 = 0;
var num2 = 0;
var plyScore = 0;
var comScore = 0;
var buttonpress = 0;
var start = 0;


$("#reset").click(function () {
    plyScore = 0;
    comScore = 0;
    $(".player h3 span").text(plyScore);
    $(".computer h3 span").text(comScore);
    document.querySelector("#plyImg img").setAttribute("src", "images/All.png");
    document.querySelector("#comImg img").setAttribute("src", "images/All.png");
    document.querySelector("#result").innerText = "";
})

$("#plyOption button").click(function () {
    var chosenOption = $(this).attr("id");
    putImg(chosenOption);
    animatePress(chosenOption);
})

function animatePress(current) {
    $("#" + current).addClass("pressed");
    setTimeout(function () { $("#" + current).removeClass("pressed"); }, 100)
}
function putImg(idname) {
    num2 = Math.floor(Math.random() * 3) + 1;
    var st = idname;
    num1 = parseInt(st[4]);
    result(num1, num2);
    // $("#img2"+num2).fadeOut(200).fadeIn(100);
    animatePress("img2" + num2);
    document.querySelector("#plyImg img").setAttribute("src", "images/" + idname + ".png");
    document.querySelector("#comImg img").setAttribute("src", "images/img2" + num2 + ".png");
}

function result(num1, num2) {
    if (num1 === num2) {
        document.querySelector("#result").innerText = "DRAW!";
    }
    else if (num1 === 1 && num2 == 3) {
        document.querySelector("#result").innerText = "🚩Human Win";
        plyScore++;
    }
    else if (num1 === 1 && num2 === 2) {
        document.querySelector("#result").innerText = "Computer Win🚩";
        comScore++;
    }
    else if (num1 === 2 && num2 == 1) {
        document.querySelector("#result").innerText = "🚩Human Win";
        plyScore++;
    }
    else if (num1 === 2 && num2 === 3) {
        document.querySelector("#result").innerText = "Computer Win🚩";
        comScore++;
    }
    else if (num1 === 3 && num2 == 2) {
        document.querySelector("#result").innerText = "🚩Human Win";
        plyScore++;
    }
    else if (num1 === 3 && num2 === 1) {
        document.querySelector("#result").innerText = "Computer Win🚩";
        comScore++;
    }
    $(".player h3 span").text(plyScore);
    $(".computer h3 span").text(comScore);
}
