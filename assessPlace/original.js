'use strict';

let userName;

const userNameInput = document.getElementById('user-name');
const originalButton = document.getElementById('original');
const resultDivided = document.getElementById('result-area');
userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
        originalButton.onclick();
    }
};

const tweetDivided = document.getElementById('tweet-area');
originalButton.onclick = () => {
    userName = userNameInput.value;
    if (userName.length === 0) {
        //名前が入力されなかったら何もしない
        return;
    }
        
    // 診断結果表示エリアの作成
    resultDivided.innerText = "";
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = original(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);



    tweetDivided.innerText = "";
    const anchor = document.createElement('a');
    const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag' +
    encodeURIComponent('あなたにおすすめのスポット') + 
    '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたにおすすめのスポット';

    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);


    let display = document.getElementById("place").style.display
    
    if (display === 'none') {
        document.getElementById("place").style.display = "block";
    } else {
        document.getElementById("place").style.display = "none";
    }

    let display2 = document.getElementById("2nd").style.display
    const colorbuttons = document.getElementsByClassName('color');

    if (display2 === 'none') {
        document.getElementById("2nd").style.display = "block";
        
        for(let i=0; i<colorbuttons.length; i++) {
            colorbuttons[i].classList.remove('hidden');
        }
    } else {
        document.getElementById("2nd").style.display = "none";
        
        for(let i=0; i<colorbuttons.length; i++) {
            Element.classList.add('hidden');
        }
    }
};

function colorSelect(color) {
    console.log(`あなたは${color}をクリックしました。`);
    elemIdNone("2nd")
    elemClassNone("color")
    switch (color){
        case 'yellow':
            // 黄色の場合のやつ
            elemIdBlock("3rd");
            elemIdNone("4th");
            elemIdNone("5th");
            elemIdNone("6th");
            elemClassBlock("room");
            break;
        case 'black':
            elemIdNone("3rd");
            elemIdBlock("4th");
            elemIdNone("5th");
            elemIdNone("6th");
            elemClassBlock("food")
            break;
        case 'red':
            elemIdNone("3rd");
            elemIdNone("4th");
            elemIdBlock("5th");
            elemIdNone("6th");
            elemClassNone("room");
            elemClassBlock("park");
            break;
        case 'blue':
            elemIdNone("3rd");
            elemIdNone("4th");
            elemIdNone("5th");
            elemIdBlock("6th");
            elemClassNone("room");
            elemClassBlock("place");
            break;
        default:
            return false;
    }    
}

function roomSelect(room) {
    console.log(`あなたは${room}をクリックしました。`);
    elemIdNone("2nd")
    elemIdNone("3rd")
    elemClassNone("color")
    elemClassNone("room")
    switch (room) {
        case 'in':
            elemIdNone("out");
            elemClassBlock("result1");
            document.getElementById("result1answer").textContent = `${userName}にはゲームするのおすすめ\naaaa`
            document.getElementById("result1-1answer").textContent = `仲のいい友達とDiscodeを繋いで朝から晩まで遊びまくろう‼`
            break;
        case 'out':
            elemIdNone("in");
            elemClassBlock("result2");
            document.getElementById("result2answer").textContent = `${userName}には中央公園がおすすめ‼`
            document.getElementById("result2-1answer").textContent = `一年中楽しめる公園といえばここ‼春は桜がきれいで、夏には流れるプール、秋は大きな滑り台、冬はBBQを楽しもう‼`
        default:
            return false;
    }
}


function foodSelect(food) {
    console.log(`あなたは${food}をクリックしました。`);
    elemIdNone("2nd")
    elemIdNone("4th")
    elemClassNone("color")
    elemClassNone("food")
    switch (food){
        case 'fast':
            elemIdNone("japanese");
            elemClassBlock("result3");
                document.getElementById("result3answer").textContent = `${userName}は食べ歩きをしよう‼`
                document.getElementById("result3-1answer").textContent = `田舎だった場所にできたスタバは新築でとってもきれい‼`
                document.getElementById("result3-2answer").textContent = `少し進んだとこにあるココイロはメニューの品が全部bigサイズのお店‼大きなお部屋もあるので大人数も大歓迎‼`
                document.getElementById("result3-3answer").textContent = `しめにはカフェ付きのマクドで食べまくろう‼`
            break;
            case 'japanese':
                elemIdNone("fast");
                elemClassBlock("result4");
                document.getElementById("result4answer").textContent = `${userName}は食べ歩きをしよう‼`
                document.getElementById("result4-1answer").textContent = `国道26号線沿いにはくら寿司、はま寿司、スシロー全部勢ぞろい`
                document.getElementById("result4-2answer").textContent = `冬はかに道楽にしゃぶ葉に木曽路‼鍋料理食べ放題‼`
                document.getElementById("result4-3answer").textContent = `最後におすすめするのはレストラン＆弁当GOCHI、洋食和食どちらも楽しめてお持ち帰りもできるのが魅力的`
        default:
            return false;
    }
}

function parkSelect(park) {
    console.log(`あなたは${park}をクリックしました。`);
    elemIdNone("2nd")
    elemIdNone("5th")
    elemClassNone("color")
    elemClassNone("park")
    switch (park){
        case 'Disney':
            elemIdNone("USJ");
            elemClassBlock("result5");
                document.getElementById("result5answer").textContent = `${userName}は大切な人と思い出を作りに行こう！`
                document.getElementById("result5-1answer").textContent = `${userName}は大切な人と思い出を作りに行こう！`
            break;
        case 'USJ':
            elemIdNone("Disney");
            elemClassBlock("result6");
                document.getElementById("result6answer").textContent = `${userName}は今ぱっと思いついた友達とはっちゃけに行こう！`
            break;
        default:
            return false;
    }
}

function placeSelect(place) {
    console.log(`あなたは${place}をクリックしました。`);
    elemIdNone("2nd")
    elemIdNone("6th")
    elemClassNone("color")
    elemClassNone("place")
    switch (place){
        case 'sea':
            elemIdNone("Mt");
            elemClassBlock("result7");
                document.getElementById("result7answer").textContent = `${userName}は水着を買って思いっきり泳ごう！`
                document.getElementById("result7-1answer").textContent = `海が見えるレアなショッピングモール、クライミングが体験できて夏には花火大会も行われている‼IMAX付き映画館も入っているので映画を見に行くのもあり‼`
                document.getElementById("result7-2answer").textContent = `空港からも近いりんくう南浜のビーチ、近くにイオンモールがあってグランピング設備も完備‼是非是非‼`
                break;
        case 'Mt':
            elemIdNone("sea");
            elemClassBlock("result8");
                document.getElementById("result8answer").textContent = `${userName}はのどかなところで自然を楽しもう！`
                document.getElementById("result8-1answer").textContent = `景色もきれいで空気もおいしい牛滝山、大自然の中を流れる川や滝で水遊びし放題‼夜は温泉のついたホテルでまったりしたひと時を‼`
                document.getElementById("result8-2answer").textContent = `子供からおじいちゃんおばあちゃんまで楽しめる公園、「蜻蛉池公園」遊具で遊んだり、まったりお花を見たり、大自然のなかでゆったりしたひと時が過ごせます‼`
            break;
        default:
            return false;
    }
}

function elemIdBlock(elem) {
    document.getElementById(elem).style.display = "block"; 
}

function elemIdNone(elem) {
    document.getElementById(elem).style.display = "none"; 
}

function elemClassBlock(elem) {
    let elements = document.getElementsByClassName(elem);
    for(let i=0;i<elements.length;i++){
        elements[i].style.display = "block";
    }
}

function elemClassNone(elem) {
    let elements = document.getElementsByClassName(elem);
    for(let i=0;i<elements.length;i++){
        elements[i].style.display = "none";
    }
}


    // TODO ツイートエリアの作成
    function original() {
        //
    }

    