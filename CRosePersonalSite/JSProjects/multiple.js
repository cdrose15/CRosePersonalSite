function getMultiple() {

    var x = document.getElementById("a").value
    var y = document.getElementById("b").value
    document.getElementById("mult").innerHTML = multiple(x, y);
}

function multiple(x,y) {
    for (i=1; i<=100; i++){

         if (i % x == 0 && i % y == 0){
             document.write ("FizzBuzz" + "-")
         }
        else if (i % x == 0) {
             document.write  ("Fizz" + "-")
        }
        else if (i % y == 0) {
            document.write ("Buzz" + "-")
        }
        else{
             document.write ( i + "-");
        }    
    }
}