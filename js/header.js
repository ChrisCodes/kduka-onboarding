
// toggle menu on icon click
var site_menu = $(".navigation-container");
var menu_empty_space = $(".navigation-container .empty-space");
var menu_icon = $(".site-header .menu-icon");
var menu_close_icon = $(".menu-close-icon");


menu_icon.on("click", function(){

	if(site_menu.hasClass('hidemenu')) {

		showSiteMenu();

	} else {

		hideSiteMenu();
	}

});




menu_close_icon.on("click", function(){

	if(site_menu.hasClass('hidemenu')) {

		showSiteMenu();

	} else {

		hideSiteMenu();
	}

});




menu_empty_space.on("click", function(){

	hideSiteMenu();

});






function showSiteMenu(){

	//remove class
	site_menu.removeClass('hidemenu');

}





function hideSiteMenu(){

	//add class
	site_menu.addClass('hidemenu');
	
}