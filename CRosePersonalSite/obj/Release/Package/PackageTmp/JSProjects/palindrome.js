$(document).ready(function () {
    $("#palindrome").click(function () {

        var string = $("#word").val();
        string = string.toUpperCase();
        string = string.trim();
        var reverseString = string.split('').reverse().join('');

        if (string == reverseString) {
            $("#result").append("Yep! " + string + " is a Palindrome");
        }
        else {
            $("#result").append("Sorry! " + string + " is not a Palindrome");
        }
    });
});

