function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(x){
    var str="";
    for(var i=1;i<=x;i++){
        str+=makeLine(i);
    }
    return str;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));
