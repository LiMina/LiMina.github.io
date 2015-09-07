$( document ).ready( function() {
	$(".nav li").click( function() {
		var index = $(".nav li").index(this);
		$(".nav li").each(function() {
			$(this).css("background-color", "#f9c3b1");
		})
		$(".nav li:eq(0)").css("background-color", "#f2693d");
		$(".nav li:eq(" + index + ")").css("background-color", "#f7a58a");
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
			$(this).css("background-color", "#f9c3b1");
		})
		$(".nav li:eq(0)").css("background-color", "#f2693d");
		$(".section-body").each(function() {
			$(this).css("display", "none");
		});
		$(".section-body:eq(0)").css("display", "");
	})
});