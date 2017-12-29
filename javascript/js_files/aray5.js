var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2, 0, "chocolate frosted", "glazed");
for(var i=0;i<donuts.length;i++){
	console.log(donuts[i]);
}