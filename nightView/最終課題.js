//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});



//スライドショーとマップのフェードイン
$(function(){
 
	$(window).on('load scroll', function(){
	  //現時点のスクロールの高さ取得
	  var scrollPosition = $(window).scrollTop();
	  //ウィンドウの高さ取得
	  var windowHeight = $(window).height();
   
	  $('.container_box').each(function(){
		//要素の位置（高さ）を取得
		var elemPosition = $(this).offset().top;
		//スクロールの高さが要素の位置を超えたら以下のスタイルを適用
		if(elemPosition < scrollPosition + windowHeight){
		  $(this).css({
			opacity: 1,
			transform: 'translateY(0)'
		  });
		}
	  });
	});
   
  });

//本文のフェードイン
$(function(){
 
	$(window).on('load scroll', function(){
	  //現時点のスクロールの高さ取得
	  var scrollPosition = $(window).scrollTop();
	  //ウィンドウの高さ取得
	  var windowHeight = $(window).height();
   
	  $('.Honbun').each(function(){
		//要素の位置（高さ）を取得
		var elemPosition = $(this).offset().top;
		//スクロールの高さが要素の位置を超えたら以下のスタイルを適用
		if(elemPosition < scrollPosition + windowHeight){
		  $(this).css({
			opacity: 1,
			transform: 'translateY(0)'
		  });
		}
	  });
	});
   
  });