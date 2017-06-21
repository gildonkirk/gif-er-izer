var topicChoice = '';
var queryURL = '';

$('form').submit(function(event){	
	$('.response').html('');
	topicChoice = $('#movie-input').val();
	event.preventDefault();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicChoice + "&api_key=dc6zaTOxFJmzC"
	$('#movie-input').val('');
	$.ajax({
		url:queryURL, 
		method:'GET'
	}).done(function(response){
		for(i = 0; i < 24; i++){
			var container = $('<div>').addClass('col-xs-12 col-md-4 img-container');
			var image = $('<img>').addClass('img-responsive center-block');
			image.attr('src', response.data[i].images.fixed_height_still.url);
			image.attr('data-still', response.data[i].images.fixed_height_still.url);
			image.attr('data-animate', response.data[i].images.fixed_height.url);
			image.attr('state', 'still');
			image.addClass('gif');
			container.append(image);
			if (i <= 2){
				$('#response1').append(container);
			} else if (i <= 5) {
				$('#response2').append(container);
			} else if (i <= 8) {
				$('#response3').append(container); 
			} else {
				$('#response4').append(container);
			}
		};	
	});
});

$(document).on('mouseover', '.gif', function(){
	$(this).attr('src', $(this).attr('data-animate'));
	$(this).attr('state', 'animate');
});
	// make it so url turns back to _s in middle
$(document).on('mouseleave', '.gif', function(){	
	$(this).attr('src', $(this).attr('data-still'));
	$(this).attr('state', 'still');
});