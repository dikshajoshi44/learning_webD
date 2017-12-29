var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(-2,1,"Yellow","Green");
rainbow.push("Purple");
for(var i=0;i<rainbow.length;i++){
	console.log(rainbow[i]);
}