var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
for(var i=0;i<donuts.length;i++){
	console.log(donuts[i]);
}
//output-glazed,chocolate cruller,creme de leche,Boston creme ,glazed cruller