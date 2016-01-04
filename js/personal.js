$( document ).ready( function() {
	$(".nav li").click( function() {
		var index = $(".nav li").index(this);
		var lastItem = $(".nav li").last();
		var lastIndex = $(".nav li").index(lastItem);
		if (index != lastIndex) {
			$(".nav li").each(function() {
				if ($(".nav li").index(this) != lastIndex) {
					$(this).css("background-color", "#c3b2d6");
				}
			})
			$(".nav li:eq(0)").css("background-color", "#754ca0");
			$(".nav li:eq(" + index + ")").css("background-color", "#9e81bc");
			$(".section-body").each(function() {
				$(this).css("display", "none");
			});
			$(".section-body:eq(" + index + ")").css("display", "inline");
		}
	});
	$(".nav li:eq(0)").click( function() {
		$(".section-body:eq(0)").css("display", "");
	});
	$(".instructions-back").click( function() {
		var lastItem = $(".nav li").last();
		var lastIndex = $(".nav li").index(lastItem);
		$(".nav li").each(function() {
			if ($(".nav li").index(this) != lastIndex) {
				$(this).css("background-color", "#c3b2d6");
			}
		})
		$(".nav li:eq(0)").css("background-color", "#754ca0");
		$(".section-body").each(function() {
			$(this).css("display", "none");
		});
		$(".section-body:eq(0)").css("display", "");
	})
});