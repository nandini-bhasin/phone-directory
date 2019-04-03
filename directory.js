

// File by Nandini Bhasin 
// Contact no: 9999759963 
// Email ID: bhasin.nandini@gmail.com 


//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on trash icon to delete todos
$("ul").on("click", "span", function(event){
	
	//fade the parent of span in li
	$(this).parent().parent().fadeOut(function(){
		//remove the li
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todo
$("button").click(function(event){
		//get value in the input
		var name = $("input[type='text']").val();
		var phone = $("input[type='number']").val();
		
		//if name or phone number are empty, show error msg and abort
		if(name==="" || phone === ""){
			alert("Please enter name and phone number");
			return
		}
		//create new li
		$("ul").append("<li><div class='wrapper'><span><i class='fa fa-trash' aria-hidden='true'></i></span><div>" + name + "</div><div>" + phone + "</div></div></li>");
		//set fields as blank
		$("input[type='number']").val("");
		$("input[type='text']").val("");
	}
);

//toggle function on clicking edit button
$(".fa-pencil").click(function(){
	$("input").fadeToggle();
	$("button").fadeToggle();
});
