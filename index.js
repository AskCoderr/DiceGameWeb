var ran1 = Math.floor((Math.random()) * 6) + 1;
var ran2 = Math.floor((Math.random()) * 6) + 1;
console.log(ran1, ran2);
var image1 = document.querySelector(".sub1 img");
var image2 = document.querySelector(".sub2 img");
image1.setAttribute("src", "dices\\" + ran1 + ".png");
image2.setAttribute("src", "dices\\" + ran2 + ".png");
var result1 = document.querySelector(".sub1 .result");
var result2 = document.querySelector(".sub2 .result");
if (ran1 > ran2) {
    result1.textContent = "WINNER!!!"
    result2.style.display = "none"
}
else if (ran1 < ran2) {
    result2.textContent = "WINNER!!!"
    result1.style.display = "none"
}
else {
    result1.textContent = "DRAW"
    result2.textContent = "DRAW"
}
