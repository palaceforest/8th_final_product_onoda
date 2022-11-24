/*===========================================================*/
/* ゆっくりズームアウトさせながら全画面で見せる*/
/*===========================================================*/

//画像の設定

const windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
let responsiveImage;
if (windowwidth > 768){
    responsiveImage = [//PC用の画像
        {src: './img/bg_01.jpg'},
        {src: './img/bg_02.jpg'},
        {src: './img/bg_03.jpg'}
    ];
} else {
    responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './img/bg_sp01.jpg' },
        { src: './img/bg_sp02.jpg' },
        { src: './img/bg_sp03.jpg' }
    ];
}

//Vegas全体の設定

$('#slider').vegas({
    overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 10000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
});


/*===========================================================*/
/* リンクをクリックすると、背景が暗くなり動画や画像やテキストを表示*/
/*===========================================================*/

//テキストを含む一般的なモーダル
$(".btn-view2").modaal({
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
        $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
        $.scrollify.disable();//scrollfyのプラグインを無効に
    },
    after_close:function(){// モーダルが閉じた後に行う動作
        $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
        $.scrollify.enable();//scrollfyのプラグインを有効に
    }
});


/*===========================================================*/
/* サムネイルをクリックするとグループ化された画像一覧を表示する*/
/*===========================================================*/

//画像をクリックしたら現れる画面の設定
$(".btn-view").modaal({
    fullscreen:'true', //フルスクリーンモードにする
    before_open:function(){// モーダルが開く前に行う動作
        $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
        $.scrollify.disable();//scrollfyのプラグインを無効に
    },
    after_close:function(){// モーダルが閉じた後に行う動作
        $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
        $.scrollify.enable();//scrollfyのプラグインを有効に
    }
});


/*===========================================================*/
/*  スクロールすると1画面移動*/
/*===========================================================*/

$.scrollify({
    section : ".box",//1ページスクロールさせたいエリアクラス名
    scrollbars:"false",//スクロールバー表示・非表示設定
    interstitialSection : "#header",//ヘッダーを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 300, // スクロール時の速度

    //以下、ページネーション設定
    before:function(i,panels) {
        const ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
        let pagination = "<ul class=\"pagination\">";
        let activeClass = "";
        $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
            activeClass = "";
            if(i===$.scrollify.currentIndex()) {
                activeClass = "active";
            }
            pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";

        $("#box1").append(pagination);//はじめのエリアにページネーションを表示
        $(".pagination a").on("click",$.scrollify.move);
    }

});

/*===========================================================*/
/*  最低限おぼえておきたい動き*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
    // 4-6　じわっ（ぼかしから出現）

    $('.blurTrigger').each(function(){ //blurTriggerというクラス名が
        const elemPos = $(this).offset().top - 50;//要素より、50px上の
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
        }else{
            $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
        }
    });
}

/*===========================================================*/
/* テキストが1文字づつ出現*/
/*===========================================================*/

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("appeartext");

        } else {
            $(this).removeClass("appeartext");
        }
    });
}

/*===========================================================*/
/* 関数をまとめる*/
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    EachTextAnimeControl();//印象編 8-11テキストが1文字づつ出現の関数を呼ぶ
    fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
/*===========================================================*
/*プログレスバー＋数字カウントアップ＋画面が開く*
/*===========================================================*/

//テキストのカウントアップ+バーの設定
    const bar = new ProgressBar.Line(splash_text, {//id名を指定
        easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
        duration: 1000,//時間指定(1000＝1秒)
        strokeWidth: 0.2,//進捗ゲージの太さ
        color: '#fff',//進捗ゲージのカラー
        trailWidth: 0.2,//ゲージベースの線の太さ
        trailColor: '#bbb',//ゲージベースの線のカラー
        text: {//テキストの形状を直接指定
            style: {//天地中央に配置
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: '0',
                margin: '-30px 0 0 0',//バーより上に配置
                transform: 'translate(-50%,-50%)',
                'font-size': '1rem',
                color: '#fff',
            },
            autoStyleContainer: false //自動付与のスタイルを切る
        },
        step: function (state, bar) {
            bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
        }
    });

//プログレスバーのアニメーションスタート
    bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
        $("#splash_text").fadeOut(10);//フェードアウトでローディングテキストを削除
        $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
        $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加

        //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
        $("#splash").fadeOut('slow',function(){//#splashエリアをフェードアウトした後にアニメーションを実行

            /*テキストが1文字づつ出現*/
            //spanタグを追加する
            const element = $(".eachTextAnime");
            element.each(function () {
                const text = $(this).text();
                let textbox = "";
                text.split('').forEach(function (t, i) {
                    if (t !== " ") {
                        if (i < 10) {
                            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                        } else {
                            var n = i / 10;
                            textbox += `<span style="animation-delay:${n}s;">${t}</span>`;
                        }

                    } else {
                        textbox += t;
                    }
                });
                $(this).html(textbox);
            });

            EachTextAnimeControl();//テキストが1文字づつ出現の関数を呼ぶ
            fadeAnime();// 最低限おぼえておきたい動きの関数を呼ぶ

        }); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    });//=====ここまでプログレスバー表示

});// ここまでページが読み込まれたらすぐに動かしたい場合の記述

