$(document).ready(function() {

	newsAjaxCall();


	function gifAjaxCall() {

		var term = $("#searchBox").val().trim();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		        term + "&api_key=dc6zaTOxFJmzC&limit=4";

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {

			var gifResult = response.data;

			displayingGifResults(gifResult);

		});




	};
	$(document).on("click", "#music", gifAjaxCall);



	function displayingGifResults(gifResult) {

		$(".card-image").empty();

		for (var i = 0; i < gifResult.length; i++) {

			var gifURL = gifResult[i].images.fixed_height.url;

			var gifImage = $("<img class='responsive-img'>");
			var colGif = $("<div class='col s3 m3 l3'>");
			var cardGif = $("<div class='card'>");
			var cardImgGif = $("<div class='card-image'>");

			gifImage.attr("src", gifURL);
			cardImgGif.html(gifImage);
			cardGif.html(cardImgGif);
			colGif.html(cardGif);

			$("#gifsDisplay").append(colGif);
		}
	};

	function newsAjaxCall () {

		var queryURL = "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23309161ae9b43a3b041da3802a26a76";

		$.ajax({

			url: queryURL,
			method: "GET"

		})
		.done(function(response) {

			var articles = response.articles;
			

			for (var i = 0; i < articles.length; i++) {

				var imgURL = articles[i].urlToImage;
				var title = articles[i].title;
				var artLink = articles[i].url;

				var articleIMG = $("<img>");
				var artTitle = $("<div>");
				var outsideLink = $("<a>");

				artTitle.text(title);
				outsideLink.attr("href", artLink);
				articleIMG.attr("src", imgURL);
				outsideLink.html(articleIMG);

				$("#newsArticles").append(outsideLink);
				$("#newsArticles").append(artTitle);
			}
		});	
	};
	

	// Database initialize

		// var config = {
		//     apiKey: "AIzaSyBGqVZ7nPhHkM8Y6mZPVGhNDrHWT8oh4EU",
		//     authDomain: "team-gams.firebaseapp.com",
		//     databaseURL: "https://team-gams.firebaseio.com",
		//     projectId: "team-gams",
		//     storageBucket: "team-gams.appspot.com",
		//     messagingSenderId: "867612522318"
		// };

		// firebase.initializeApp(config);
});