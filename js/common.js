$(function() {

 $("#carusel_photo_report").owlCarousel({
 	items : 1,
 	slideSpeed: 1000,
 	autoPlay: true,
 	itemsDesktop : [1199,1],
 	itemsDesktopSmall : [980,1],
 	itemsTablet: [768,1],
 	stopOnHover: true
 });


$(".carusel").owlCarousel({
 	items : 1,
 	slideSpeed: 1000,
 	autoPlay: true,
 	itemsDesktop : [1199,1],
 	itemsDesktopSmall : [980,1],
 	itemsTablet: [768,1],
 	stopOnHover: true
 });
 

$(".custom_prev").click(function() {
     $("#carusel_photo_report").trigger("owl.prev");
  });
  $(".custom_next").click(function() {
     $("#carusel_photo_report").trigger("owl.next");
  });

$(".custom_prev_banner").click(function() {
     $(".carusel").trigger("owl.prev");
  });
  $(".custom_next_banner").click(function() {
     $(".carusel").trigger("owl.next");
  });


// Вычисление максимальной высоты колонок Афиша и Новости, меньшей колонке присваиваем большую высоту
var heght_poster = $(".poster").css('height');
var heght_news = $(".news").css('height');
if($.trim(heght_poster) != '' && $.trim(heght_news) != '' &&  document.documentElement.clientWidth > 768){

heght_poster = Number(heght_poster.substr(0, heght_poster.length - 2)) - 105;
heght_news = Number(heght_news.substr(0, heght_news.length - 2)) - 105;

if( heght_poster > heght_news){
	$(".news").height(heght_poster );
	$(".news").css("padding-bottom","0");
	// console.log(heght_poster);
}else{
	$(".poster").css("padding-bottom","0");
	$(".poster").height(heght_news + 105);
	// console.log(heght_news);
}
}

// Вычисление максимальной высоты колонок на странице новости, меньшей колонке присваиваем большую высоту
 var heght_img_news = $(".row_news .img_news").css('height');
 var heght_text_news = $(".row_news .text_news").css('height');

if($.trim(heght_img_news) != '' && $.trim(heght_text_news) != '' && document.documentElement.clientWidth > 768){

 heght_img_news = Number(heght_img_news.substr(0, heght_img_news.length - 2));
 heght_text_news = Number(heght_text_news.substr(0, heght_text_news.length - 2));
 if( heght_img_news > heght_text_news){
   $(".row_news .text_news").height(heght_img_news );
   // $(".news").css("padding-bottom","0");
   // console.log(heght_img_news);
 }else{
   // $(".row_news .img_news").css("padding-bottom","0");
   $(".row_news .img_news").height(heght_text_news);
   // console.log(heght_text_news);
}
}

});
