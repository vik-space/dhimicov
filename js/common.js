$(function() {

	 // $(".carusel").owlCarousel();


// Вычисление максимальной высоты колонок Афиша и Новости, меньшей колонке присваиваем большую высоту
var heght_poster = $(".poster").css('height');
var heght_news = $(".news").css('height');
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

});
