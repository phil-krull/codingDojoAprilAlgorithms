# Fundamental Concepts

* Variables and Datatypes
* Conditionals
* Loops
    * For
    * While
* Arrays
* Functions

## Examples

    var name = "Bruce";
    if (name != "Bruce") {
        console.log("What's your name?");
    }    
    else {
        console.log("Hello, Bruce!");
    }
---
    for (var a = 0; a < 8; a++) {   
        console.log(a);
    }
---
    for (var b = 10; b < 100; b += 10) {   
        console.log(b);
    }
---
    var a = 2;
    while (a < 16) {       
        console.log(a);    
        a = a * 2;
    }
---
    var h = [2,4,6,8,10];
    for (var i = 0; i < h.length; i++) {
        console.log(i);
        console.log(h[i]);
    }
---
    function a() {
        console.log('hello');
    }
    console.log('Dojo');
---
    function a(n) {
        console.log('n is', n);
        return n+15;
    }
    var x = a(3);
    console.log('x is', x);