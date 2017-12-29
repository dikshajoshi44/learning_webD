function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}


// your code goes here

emotions("happy", function myFunc(n) {
    var laugh="";
    for(var i=0;i<n;i++){
        laugh+="ha";
    }
    laugh+="!";
    return laugh;
});