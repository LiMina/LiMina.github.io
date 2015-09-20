function toggleDescription() {
   $(".class-description").each(function() {
		$(this).toggle("slow");
   });
};

function toggleMajors() {
   $(".class-non-major").each(function() {
   		$(this).toggle("slow");
   });
};