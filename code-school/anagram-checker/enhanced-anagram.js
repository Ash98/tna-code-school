$(function() {
	//Check jQuery loaded
	console.log( "jQuery Loaded!" );
	$(".submitButton").hide();


	$("input:text").keypress(function(event) {
        if (event.keyCode == 13) {
                event.preventDefault();
                
            }
    });


});

$(".string1").change(function() {

	checkAnagram();

});

$(".string2").change(function() {

	checkAnagram();


});




function checkAnagram () {

	if($(".string1").val() == $(".string2").val() ){
			$(".result").fadeOut();
			$(".result").queue(function(){

			$(".result").text($(".string1").val() +" and "+ $(".string2").val() + " ARE THE SAME WORD!" );
			$(".result").dequeue();

			});

			$(".result").fadeIn();

			
			
		
		
	}
	else {
		var string1 = $(".string1").val().toLowerCase().split('').sort().join('');
		var string2 = $(".string2").val().toLowerCase().split('').sort().join('');

		if(string1 == string2){
			$(".result").fadeOut();
			$(".result").queue(function(){

			$(".result").text($(".string1").val() +" and "+ $(".string2").val() + " ARE anagrams!" );
			$(".result").dequeue();

			});

			$(".result").fadeIn();
		}
		else {

			$(".result").fadeOut();
			$(".result").queue(function(){

			$(".result").text($(".string1").val() +" and "+ $(".string2").val() + " ARE NOT anagrams!" );
			$(".result").dequeue();

			});

			$(".result").fadeIn();


			
			
		}
	}

	

}