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
var heght_poster = " ";
var heght_news = " ";
heght_poster = $(".poster").css('height');
heght_news = $(".news").css('height');
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

// Вычисление максимальной высоты колонок на странице конкретной новости, меньшей колонке присваиваем большую высоту
var heght_this_new = " ";
var heght_news_list = " ";
heght_this_new = $(".this_new").css('height');
heght_news_list = $(".news_list").css('height');

if($.trim(heght_this_new) != '' && $.trim(heght_news_list) != '' &&  document.documentElement.clientWidth > 992){

  heght_this_new = Number(heght_this_new.substr(0, heght_this_new.length - 2));
  heght_news_list = Number(heght_news_list.substr(0, heght_news_list.length - 2));

  if( heght_this_new > heght_news_list){
    $(".news_list").height(heght_this_new - 25);
    console.log(heght_this_new);
  }else{
    $(".this_new").height(heght_news_list);
    console.log(heght_news_list);
  }
}



//Прилипание контактов на странице коллектива
if(document.documentElement.clientWidth > 992){
  var heght_description_groups = " ";
  heght_description_groups = $(".col_description_groups").css('height');
  heght_description_groups = Number(heght_description_groups.substr(0, heght_description_groups.length - 2));
  $(".col_data").height(heght_description_groups);


  function getTopOffset(e) { 
    var y = 0;
    do { y += e.offsetTop; } while (e = e.offsetParent);
    return y;
  }
  var block = document.getElementById('groups_contact'); /* fixblock - значение атрибута id блока */
  if ( null != block ) {
    var topPos = getTopOffset( block );

    window.onscroll = function() {
      var scrollHeight = Math.max( document.documentElement.scrollHeight, document.documentElement.clientHeight),

        // определяем высоту рекламного блока
        blockHeight = block.offsetHeight,

        // вычисляем высоту подвала, footer заменить на значение атрибута id подвала
        footerHeight = document.getElementById('stop').offsetHeight,      

        // считаем позицию, до которой блок будет зафиксирован 
        stopPos = scrollHeight - blockHeight - footerHeight - 40; 

        var newcss = (topPos < window.pageYOffset) ? 
        'top:20px; position: fixed;' : 'position:relative;';

        if ( window.pageYOffset > stopPos ) 
          newcss = 'position:absolute; bottom: 20px;';

        block.setAttribute( 'style', newcss );
      }
    }
  }



// // Вычисление максимальной высоты колонок на странице новости, меньшей колонке присваиваем большую высоту
//  var heght_img_news = $(".row_news .img_news").css('height');
//  var heght_text_news = $(".row_news .text_news").css('height');

// if($.trim(heght_img_news) != '' && $.trim(heght_text_news) != '' && document.documentElement.clientWidth > 768){

//  heght_img_news = Number(heght_img_news.substr(0, heght_img_news.length - 2));
//  heght_text_news = Number(heght_text_news.substr(0, heght_text_news.length - 2));
//  if( heght_img_news > heght_text_news){
//    $(".row_news .text_news").height(heght_img_news );
//    // $(".news").css("padding-bottom","0");
//    // console.log(heght_img_news);
//  }else{
//    // $(".row_news .img_news").css("padding-bottom","0");
//    $(".row_news .img_news").height(heght_text_news);
//    // console.log(heght_text_news);
// }
// }

});

