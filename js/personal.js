$( document ).ready( function() {
	$(".nav li").click( function() {
		var index = $(".nav li").index(this);
		$(".nav li").each(function() {
			$(this).css("background-color", "#c3b2d6");
		})
		$(".nav li:eq(0)").css("background-color", "#754ca0");
		$(".nav li:eq(" + index + ")").css("background-color", "#9e81bc");
		$(".section-body").each(function() {
			$(this).css("display", "none");
		});
		$(".section-body:eq(" + index + ")").css("display", "inline");
	});
	$(".nav li:eq(0)").click( function() {
		$(".section-body:eq(0)").css("display", "");
	});
	$(".instructions-back").click( function() {
		$(".nav li").each(function() {
			$(this).css("background-color", "#c3b2d6");
		})
		$(".nav li:eq(0)").css("background-color", "#754ca0");
		$(".section-body").each(function() {
			$(this).css("display", "none");
		});
		$(".section-body:eq(0)").css("display", "");
	})
});