var one_theme = $(".main-body.step-three .themes-section .one-theme");
var preview_sect = $(".main-body.step-three .preview-sect");



one_theme.click(function(event) {

	// desect all other themes
	one_theme.removeClass('selected');


	// select this one
	$(this).addClass('selected');


	// bring up sect area
	preview_sect.removeClass('hidden');

});