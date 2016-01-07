$(document).ready(function() {

    $("#fizzBuzzButton").click(function () {

        var x = $("#a").val();
        var y = $("#b").val();

        for (var i = 1; i <= 100; i++) {

            if ((i % x == 0) && (i % y == 0)) {
                $("#fizzBuzzResult").append("FizzBuzz" + " ");
            }
            else if (i % x == 0) {
                $("#fizzBuzzResult").append("Fizz" + " ");
            }
            else if (i % y == 0) {
                $("#fizzBuzzResult").append("Buzz" + " ");
            }
            else {
                $("#fizzBuzzResult").append(i + " ");
            }
        }
    });
});
