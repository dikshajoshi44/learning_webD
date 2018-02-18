$("#button").click(function(){
	$.ajax({
		url: 'index2.html',
		success: function(data){
			$("#content").html(data);
		}
		error: function(){
			$("#messages").text("error occured");
		}
	});
});