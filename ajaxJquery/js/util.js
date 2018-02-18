// $(document).ready(function(){
// 	 var names = ["alex","loco","popo"];
// 	 // if(jQuery.inArray("alex",names)!= '-1'){
// 	 // 	alert("found");
// 	 // }
// 	 $("#check").click(function(){
// 	 	var name = $("#name").val();
// 	 	if(jQuery.inArray(name,names)!='-1'){
// 	 		alert(name + "is in the array");
// 	 	}
// 	 	else {
// 	 		alert(name + "is not the array");
// 	 	}

// 	 });
// });

$(document).ready(function(){

	function display_array(){
		$("#names").text('');

		$.each(names,function(index,value){
			$("#names").append(value + '<br />');
		});
	}

	var names =["alex","coco","vivo"];
	display_array();

	$("#insert").click(function(){
		var name = $("#name").val();
		names.push(name);
		display_array();

	});
})