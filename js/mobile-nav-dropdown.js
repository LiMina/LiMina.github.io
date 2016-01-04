$( document ).ready( function() {
	$(window).resize( function() {
		if (window.innerWidth > 767) {
			$(".nav li").each(function() {
				$(this).css("display", "block");
			});
			$(".nav li").last().css("display", "none");
		} else {
			$(".nav li").last().css("display", "block");
			if ($(".nav li:eq(0)").css("display") != "none") {
				$("section:eq(0)").css("border-top-width", ($(".nav li").length * 45 + 50) + "px");
			} else {
				$("section:eq(0)").css("border-top-width", "100px")
			}
		}
	});
	$(".nav li.show-toggle").click( function() {
		var index = $(".nav li").index(this);
		$(".nav li").each(function() {
			$(this).toggle();
		});
		$(".nav li").last().toggle();
		if ($(".nav li:eq(0)").css("display") != "none") {
			$("section:eq(0)").css("border-top-width", "250px");
		} else {
			$("section:eq(0)").css("border-top-width", "100px")
		}
	});
});