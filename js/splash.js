$( document ).ready( function() {
	var rand = Math.floor(Math.random() * 10); // Should be an int value between 0 and 10
	var selection;
	if (rand % 2 == 0) {
		selection = 1;
	} else {
		selection = 2;
	}
	if (selection == 1) {
		$("img.splash").attr("src", "img/splash-1.jpg");
		$("body").css("background-color", "#8BBBD1");
		$("div#img-info").html("The image above was taken on the Golden Gate Bridge.");
	} else {
		$("img.splash").attr("src", "img/splash-2.jpg");
		$("body").css("background-color", "#3C7AC7");
		$("div#banner").css("text-align", "right");
		$("header").css("text-align", "left");
		$("header").css("color", "white");
		$("header h1").css("left", "25px");
		$("div.home").css("background-color", "#3C7AC7");
		$("div#intro-box div#pages").css("background-color", "#6294d2");
		$("div#img-info").html("The image above was taken at the Berkeley Aquatic Park.");
	}
});