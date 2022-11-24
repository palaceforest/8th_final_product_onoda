let genzaimasu1 = 0;
let genzaimasu2 = 0;
let ibenntomasu = 0;

$(function on() {
    $(".accordion").click(function() {
      $(this).toggleClass("close").next().slideToggle();
    });
  });


//カウンタの初期値を設定
var countUpValue1 = 0;

//カウントアップする関数 countUp の定義
function countUp1(){
//カウンタに 1 を加算
countUpValue1++;
//カウンタの値を HTML 内の counter に表示
//document.getElementById("counter").innerHTML=cnt;
console.log(countUpValue1);
} 


function saikorofuru1(){
    // サイコロを振る(1~3をランダムで取得)
    const number =Math.floor(Math.random() * 3) + 1;
    console.log("サイコロ振りました！")

     // 出た目は:に出た目を表示
    // idが「出た目表示id」のHtmlタグを取得。サイコロの値を表示させる。
    document.getElementById("出た目表示id1").innerHTML = number;

    // 「現在マスid」にサイコロの値を表示する。
    // let gokei = genzaimasu + number;
    console.log("足す前", genzaimasu1)
    console.log("サイコロ", number);
    genzaimasu1 = number + genzaimasu1;
    console.log("足した後", genzaimasu1)
    document.getElementById("現在マスid1").innerHTML = genzaimasu1;

    // ゴールまでマスを表示
    let nokori = 50
    let keisango = nokori - genzaimasu1;
    document.getElementById("ゴールまでid1").innerHTML = keisango;


    function omikuji() {
	rand = Math.floor(Math.random()*47);
    console.log("イベントマスのif文",rand);
    
    //プラスイベント


        if (rand == 0) msg = "仮想通貨で資産運用。";
        //ルーレットをまわし、出た数×＄10,000もらう
        if (rand == 1) msg = "メタバースでショップ店員のアルバイトに挑戦！";
        //$25,000もらう。
        if (rand == 2) msg = "古民家カフェをプロデュース！";
        //＄70,000もらう。
        if (rand == 3) msg = "お気に入りのパン屋を店ごと買い占め大繁盛。";
        //＄80,000もらう。
        if (rand == 4) msg = "乗り続けた愛車がヴィンテージ扱いになった。";
        //＄130,000もらう。
        if (rand == 5) msg = "考案したビーガン料理が大ヒット！";
        //＄55,000もらう。


        if (rand == 6) msg = "超ムズいクイズ大会でIQ300をマーク。";
        //＄45,000もらう。
        if (rand == 7) msg = "万病に効くワクチンを開発！";
        //＄100,000もらう。
        if (rand == 8) msg = "クラウドファンディングで海底探査。";
        //全員から＄5,000ずつもらう。
        if (rand == 9) msg = "フォロワー数爆上げでインフルエンサーになる。";
        //＄25,000もらう。
        if (rand == 10) msg = "焼き肉アンバサダーに選ばれた。";
        //＄20,000もらう。
        if (rand == 11) msg = "昆虫柄の子供服をプロデュース。";
        //＄12,000もらう。
        if (rand == 12) msg = "通勤で毎日フルマラソン。";
        //＄10,000もらう。
        if (rand == 13) msg = "指の汚れないポテチを開発。";
        //＄5,000もらう。


        if (rand == 14) msg = "キャッシュレス決済でポイント還元。";
        //＄50,000もらう。
        if (rand == 15) msg = "自宅のソーラーパネルで売電。";
        //＄20,000もらう。
        if (rand == 16) msg = "炎上きっかけで注目度アップ。";
        //＄20,000もらう。
        if (rand == 17) msg = "eスポーツの世界大会で優勝。";
        //＄20,000もらう。
        if (rand == 18) msg = "料理配達サービスの副業で大忙し。";
        //＄60,000もらう。
        if (rand == 19) msg = "コンビニスイーツの完コピに成功。";
        //＄70,000もらう。
        if (rand == 20) msg = "海外からの旅行客に民泊サービス。";
        //＄70,000もらう。
        if (rand == 21) msg = "月の裏側をスクープ！";
        //＄150,000もらう。
        if (rand == 22) msg = "相撲大会でクマさんに勝った！";
        //＄70,000もらう。
        if (rand == 23) msg = "フリマでひともうけ。";
        //＄40,000もらう。


        //マイナスイベント


        if (rand == 24) msg = "石橋を叩きすぎて割れた！";
        //＄8,000はらう。
        if (rand == 25) msg = "ヘッドスパで思わず居眠り。";
        //＄5,000はらう
        if (rand == 26) msg = "家財を売ってミニマリストになる。";
        //＄80,000もらう。
        if (rand == 27) msg = "サッカーの世界大会を観に自家用ジェットでひとっ飛び！";
        //＄35,000はらう。
        if (rand == 28) msg = "推しの結婚で悲しみに暮れる。";
        //1回休み。
        if (rand == 29) msg = "宇宙旅行の懸賞にハガキで応募。";
        //＄8,000はらう。
        if (rand == 30) msg = "純金で作ったマイフォークが予想以上に重かった。";
        //＄30,000はらう。
        if (rand == 31) msg = "テレワーク用にPCを新調。";
        //＄1,000はらう。


        if (rand == 32) msg = "置き配の荷物が盗まれた。";
        //＄30,000はらう。
        if (rand == 33) msg = "リモート会議で下だけパジャマなのがバレた。";
        //＄8,000はらう。
        if (rand == 34) msg = "ウー〇ーイーツーグルメがうますぎる～。";
        //＄30,000はらう。
        if (rand == 35) msg = "オンライン会議用にVRゴーグルを買う。";
        //＄18,000はらう。
        if (rand == 36) msg = "災害に備えて防災グッズを買う。";
        //＄80,000はらう。
        if (rand == 37) msg = "映画館並みのホームシアターを作る。";
        //＄42,000はらう。
        if (rand == 38) msg = "リモートワークが増えてギックリ腰に…。";
        //＄35,000はらう。
        if (rand == 39) msg = "最新ゲームで毎日夜更かし。";
        //＄17,000はらう。
        if (rand == 40) msg = "サブスクで服をレンタル。";
        //＄26,000はらう。


        if (rand == 41) msg = "動画配信のお試し期間が過ぎていた。";
        //＄6,000はらう。
        if (rand == 42) msg = "発明品のクラウドファンディングに投資。";
        //＄5,000はらう。
        if (rand == 43) msg = "目覚めたら知らない駅だった。";
        //＄8,000はらう。
        if (rand == 44) msg = "税金対策で無駄遣い。";
        //＄50,000はらう。
        if (rand == 45) msg = "ホットヨガでリフレッシュ。";
        //＄10,000はらう。
        if (rand == 46) msg = "カーナビが目的地寸前で案内を終了。";
        //＄5,000はらう。
        if (rand == 47) msg = "猫をモフりにカフェへ行く。";
        //＄5,000はらう。
        document.getElementById("イベントマスid1").innerHTML = (msg);

    };
    ibenntomasu = omikuji() + ibenntomasu

    countUp1();
    document.getElementById("振った回数id1").innerHTML = countUpValue1;
    
}

//カウンタの初期値を設定
var countUpValue2 = 0;

//カウントアップする関数 countUp の定義
function countUp2(){
//カウンタに 1 を加算
countUpValue2++;
//カウンタの値を HTML 内の counter に表示
//document.getElementById("counter").innerHTML=cnt;
console.log(countUpValue2);
} 



function saikorofuru2(){
    // サイコロを振る(1~3をランダムで取得)
    const number =Math.floor(Math.random() * 3) + 1;
    console.log("サイコロ振りました！")

     // 出た目は:に出た目を表示
    // idが「出た目表示id」のHtmlタグを取得。サイコロの値を表示させる。
    document.getElementById("出た目表示id2").innerHTML = number;

    // 「現在マスid」にサイコロの値を表示する。
    // let gokei = genzaimasu + number;
    console.log("足す前", genzaimasu2)
    console.log("サイコロ", number);
    genzaimasu2 = number + genzaimasu2;
    console.log("足した後", genzaimasu2)
    document.getElementById("現在マスid2").innerHTML = genzaimasu2;

    // ゴールまでマスを表示
    let nokori = 50
    let keisango = nokori - genzaimasu2;
    document.getElementById("ゴールまでid2").innerHTML = keisango;

    
    function omikuji() {
        rand = Math.floor(Math.random()*47);
        console.log("イベントマスのif文",rand);
        
        //プラスイベント
    
    
            if (rand == 0) msg = "仮想通貨で資産運用。";
            //ルーレットをまわし、出た数×＄10,000もらう
            if (rand == 1) msg = "メタバースでショップ店員のアルバイトに挑戦！";
            //$25,000もらう。
            if (rand == 2) msg = "古民家カフェをプロデュース！";
            //＄70,000もらう。
            if (rand == 3) msg = "お気に入りのパン屋を店ごと買い占め大繁盛。";
            //＄80,000もらう。
            if (rand == 4) msg = "乗り続けた愛車がヴィンテージ扱いになった。";
            //＄130,000もらう。
            if (rand == 5) msg = "考案したビーガン料理が大ヒット！";
            //＄55,000もらう。
    
    
            if (rand == 6) msg = "超ムズいクイズ大会でIQ300をマーク。";
            //＄45,000もらう。
            if (rand == 7) msg = "万病に効くワクチンを開発！";
            //＄100,000もらう。
            if (rand == 8) msg = "クラウドファンディングで海底探査。";
            //全員から＄5,000ずつもらう。
            if (rand == 9) msg = "フォロワー数爆上げでインフルエンサーになる。";
            //＄25,000もらう。
            if (rand == 10) msg = "焼き肉アンバサダーに選ばれた。";
            //＄20,000もらう。
            if (rand == 11) msg = "昆虫柄の子供服をプロデュース。";
            //＄12,000もらう。
            if (rand == 12) msg = "通勤で毎日フルマラソン。";
            //＄10,000もらう。
            if (rand == 13) msg = "指の汚れないポテチを開発。";
            //＄5,000もらう。
    
    
            if (rand == 14) msg = "キャッシュレス決済でポイント還元。";
            //＄50,000もらう。
            if (rand == 15) msg = "自宅のソーラーパネルで売電。";
            //＄20,000もらう。
            if (rand == 16) msg = "炎上きっかけで注目度アップ。";
            //＄20,000もらう。
            if (rand == 17) msg = "eスポーツの世界大会で優勝。";
            //＄20,000もらう。
            if (rand == 18) msg = "料理配達サービスの副業で大忙し。";
            //＄60,000もらう。
            if (rand == 19) msg = "コンビニスイーツの完コピに成功。";
            //＄70,000もらう。
            if (rand == 20) msg = "海外からの旅行客に民泊サービス。";
            //＄70,000もらう。
            if (rand == 21) msg = "月の裏側をスクープ！";
            //＄150,000もらう。
            if (rand == 22) msg = "相撲大会でクマさんに勝った！";
            //＄70,000もらう。
            if (rand == 23) msg = "フリマでひともうけ。";
            //＄40,000もらう。
    
    
            //マイナスイベント
    
    
            if (rand == 24) msg = "石橋を叩きすぎて割れた！";
            //＄8,000はらう。
            if (rand == 25) msg = "ヘッドスパで思わず居眠り。";
            //＄5,000はらう
            if (rand == 26) msg = "家財を売ってミニマリストになる。";
            //＄80,000もらう。
            if (rand == 27) msg = "サッカーの世界大会を観に自家用ジェットでひとっ飛び！";
            //＄35,000はらう。
            if (rand == 28) msg = "推しの結婚で悲しみに暮れる。";
            //1回休み。
            if (rand == 29) msg = "宇宙旅行の懸賞にハガキで応募。";
            //＄8,000はらう。
            if (rand == 30) msg = "純金で作ったマイフォークが予想以上に重かった。";
            //＄30,000はらう。
            if (rand == 31) msg = "テレワーク用にPCを新調。";
            //＄1,000はらう。
    
    
            if (rand == 32) msg = "置き配の荷物が盗まれた。";
            //＄30,000はらう。
            if (rand == 33) msg = "リモート会議で下だけパジャマなのがバレた。";
            //＄8,000はらう。
            if (rand == 34) msg = "ウー〇ーイーツーグルメがうますぎる～。";
            //＄30,000はらう。
            if (rand == 35) msg = "オンライン会議用にVRゴーグルを買う。";
            //＄18,000はらう。
            if (rand == 36) msg = "災害に備えて防災グッズを買う。";
            //＄80,000はらう。
            if (rand == 37) msg = "映画館並みのホームシアターを作る。";
            //＄42,000はらう。
            if (rand == 38) msg = "リモートワークが増えてギックリ腰に…。";
            //＄35,000はらう。
            if (rand == 39) msg = "最新ゲームで毎日夜更かし。";
            //＄17,000はらう。
            if (rand == 40) msg = "サブスクで服をレンタル。";
            //＄26,000はらう。
    
    
            if (rand == 41) msg = "動画配信のお試し期間が過ぎていた。";
            //＄6,000はらう。
            if (rand == 42) msg = "発明品のクラウドファンディングに投資。";
            //＄5,000はらう。
            if (rand == 43) msg = "目覚めたら知らない駅だった。";
            //＄8,000はらう。
            if (rand == 44) msg = "税金対策で無駄遣い。";
            //＄50,000はらう。
            if (rand == 45) msg = "ホットヨガでリフレッシュ。";
            //＄10,000はらう。
            if (rand == 46) msg = "カーナビが目的地寸前で案内を終了。";
            //＄5,000はらう。
            if (rand == 47) msg = "猫をモフりにカフェへ行く。";
            //＄5,000はらう。
            document.getElementById("イベントマスid2").innerHTML = (msg);
    
        };
        ibenntomasu = omikuji() + ibenntomasu
    
    countUp2();
    document.getElementById("振った回数id2").innerHTML = countUpValue2;

}












