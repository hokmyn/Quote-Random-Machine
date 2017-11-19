var currentQuote = '', currentAuthor = '';
function getQuote() {
		$.ajax({
      headers: {
      "X-Mashape-Key": "5lvrM2bRhSmshHH4f9SfyFZTw5Isp1dFUtqjsnbG5fwDr6tE7Y",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
			type:'POST',
			dataType:'json',
			success:function(data){                
				$("#text").text(data.quote);
				$("#author").html(data.author);
				$("a#twitter").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        currentQuote = data.quote;
        currentAuthor = data.author;
      },
			error:function(error){
				$("#quote").html(error);				
			},		
		});
	}
$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
  $('#twitter').on('click', function() {
      window.open(url, 'Share');
    });  
});
