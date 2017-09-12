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


//Detect change to author textbot then apply it to our span called author-output
$(".author").change(function() {
  $(".author-output").text($(".author").val() + " - ");

  //Get picture of inputted author
  getPicture($(".author").val());


});

$(".quote").change(function() {
	$(".quote-output").text("\"" + $(".quote").val() + "\"");
});


function getPicture (author) {
	console.log("Getting wikipedia page...");

	var wikipediaAPI = "https://en.wikipedia.org/w/api.php";
  $.getJSON( wikipediaAPI, {
  	action: "query",
    titles: author,
    prop: "pageimages",
    format: "json",
    pithumbsize: "200",
    origin: "*"
  }).done(function( data ) {

  	console.log("Done getting wikipedia page...");

  	var wikipediaID = Object.keys(data.query.pages)[0];
  	
  	var imageSRC = data["query"]["pages"][wikipediaID]["thumbnail"].source;

      $(".picture").fadeOut();
      $(".picture").queue(function(){

      $(".picture").attr("src",imageSRC);
      $(".picture").dequeue();

      });

      $(".picture").delay(500).fadeIn();

  	
  	

  	
  });

}

