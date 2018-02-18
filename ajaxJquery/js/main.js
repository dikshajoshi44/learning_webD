var count = 1;
var animalinfo = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + count + '.json');
ourRequest.onload = function(){
	//console.log(ourRequest.responseText);
	var ourData = JSON.parse(ourRequest.responseText);
	//console.log(ourData[0]);
	renderHTML(ourData);
};
ourRequest.send();
count++;
if(count>3){
	btn.classList.add("hide-me");
}
});

function renderHTML(data){
	var htmlstring = "";
	for(i = 0; i< data.length; i++){
		htmlstring += "<p>" + data[i].name + "is a " + data[i].species +"</p>"
	}
	animalinfo.insertAdjacentHTML('beforeend',htmlstring);
}



