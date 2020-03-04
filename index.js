var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var userMouseIsDown = false;
var prev = undefined;
var curr = undefined;

canvas.onmousedown = function (e) {
    userMouseIsDown = true;
}
canvas.onmouseup = function (e) {
    userMouseIsDown = false;
}
canvas.onmousemove = function (e) {
    if (userMouseIsDown) {
        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        prev = curr;
        curr = { x: x, y: y };

        if (prev && curr) {
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.closePath();
            ctx.stroke();
        }
    }
    else {
        prev = undefined;
        curr = undefined;
    }
}

document.getElementById("clearButton").addEventListener("click", function () {
    var width = $("#myCanvas").width();
    var height = $("#myCanvas").height();
    ctx.clearRect(0, 0, width, height);
});