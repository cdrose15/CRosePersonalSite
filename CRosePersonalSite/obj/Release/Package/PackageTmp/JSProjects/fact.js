
function getFactorial() {
    var num = document.getElementById("num").value
    document.getElementById("fac").innerHTML = "Factorial of " + num + " = " + factorial(num);
}


function factorial(num) {
    if (num == 0) {
        return 1;
    }
    if (num < 0) {
        return "Undefined - Please enter a positive number";
    }
    else {
        return num * factorial(num - 1);
    }
}