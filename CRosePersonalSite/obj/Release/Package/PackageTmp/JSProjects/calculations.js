$(document).ready(function () {
    $("#submit").click(function () {

         n1 = parseInt($("#num1").val(),10);
         n2 = parseInt($("#num2").val(), 10);
         n3 = parseInt($("#num3").val(), 10);
         n4 = parseInt($("#num4").val(), 10);
         n5 = parseInt($("#num5").val(), 10);

         a = (n1 + n2 + n3 + n4 + n5);
         b = (n1 * n2 * n3 * n4 * n5);
         c = ((n1 + n2 + n3 + n4 + n5) /5);
         d = Math.max(n1, n2, n3, n4, n5);
         e = Math.min(n1, n2, n3, n4, n5);

        $("#sum").append("The sum = " + a);
        $("#product").append("The product = " + b);
        $("#mean").append("The mean = " + c);
        $("#max").append("The maximum value = " + d);
        $("#min").append("The minimum value = " + e);
    });
});