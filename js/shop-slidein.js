var trigger_shop = $(".trigger-shop");
var slide_shop = $(".shop-slidein-wrapper");
var shop_close_icon = $(".shop-close-icon");



trigger_shop.on('click mouseover', function() {

	showSlideShop();

});



shop_close_icon.on("click", function() {

	hideSlideShop();

});




function showSlideShop(){
	slide_shop.removeClass('hideshop');
}




function hideSlideShop(){
	slide_shop.addClass('hideshop');
}