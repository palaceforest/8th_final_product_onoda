
document.getElementById("Button").onclick = function() {
    const answers = [
        '自分自身を信じてみるだけでいい。\n' + 'きっと、生きる道が見えてくる。\n'+'\n' + '\n' +'\n' + '\n'+'\n' +　'ゲーテ　-',
        'たいていの人はほんとうになにがほしいのか、心の中でわかっています。\n' + '人生の目標を教えてくれるのは直感だけ。\n' + 'ただ、それに耳を傾けない人が多すぎるのです。\n' + '\n' + ' \n' + '\n' + '-　バーバラ・ブラハム　-',
        '運がいい人も、運が悪い人もいない。\n' + '運がいいと思う人と、運が悪いと思う人がいるだけだ。\n' + '\n' + ' \n' + '\n' + '-　中谷彰宏　-',
        '夢中で日を過ごしておれば、いつかはわかる時が来る。\n' + '\n' + ' \n' + '\n' + '-　坂本龍馬　-',
        'Learn from the mistakes of others. You can’t live long enough to make them all yourself.\n' + '\n' + '-　Eleanor Roosevelt（エレノア・ルーズベルト）　-\n' + '\n' + '他人の失敗から学びなさい。あなたは全ての失敗ができるほど長くは生きられないのだから。',
        'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.\n' + '\n' + '-　William Arthur Ward（ウィリアム・アーサー・ウォード）　-\n' + '\n' + '悲観主義者は風にうらみを言う。楽観主義者は風が変わるのを待つ。現実主義者は、帆を動かす。',
        'Life can only be understood backwards; but it must be lived forwards.\n' + '\n' + '-　Søren Kierkegaard（キルケゴール）　-\n' + '\n' + '人生は後ろ向きにしか理解できないが、前を向いてしか生きられない。\n' + '\n',
        "God doesn’t require us to succeed; he only requires that you try.\n' + '\n' + '-　Mother Teresa（マザー・テレサ）　-\n' + '\n' + '神様は私たちに成功してほしいなんて思っていません。ただ、挑戦することを望んでいるだけよ。",
        '山が高いからといって、戻ってはならない。\n' + '行けば越えられる。\n' + '仕事が多いからといって、ひるんではいけない。\n' + '行えば必ず終わるのだ。\n' + '\n' + ' \n' + '\n' + '-　モンゴルのことわざ　-',
        'ミスを犯さない人間には、何もできない。\n' + '\n' + ' \n' + '\n' + '-　イギリスのことわざ　-',
        '大切なのは、疑問を持ち続けることだ。\n' + '神聖な好奇心を失ってはならない。\n' + '\n' + '-　アインシュタイン　-',
        '天才とは努力する凡才のことである。\n' + '\n' + '-　アインシュタイン　-',
        '私は、先のことなど考えたことがありません。\n' + 'すぐに来てしまうのですから。\n' + '\n' + '-　アインシュタイン　',
        '神はいつでも公平に機会を与えてくださる。\n' + '\n' + '-　アインシュタイン　-',
        '過去から学び、今日のために生き、未来に対して希望をもつ。\n' + '大切なことは、何も疑問を持たない状態に陥らないことである。\n' + '\n' + '-　アインシュタイン　-',
        '人生は一冊の書物に似ている。\n' + '愚かな者はパラパラとそれをめくっていくが、賢い者は丹念にそれを読む。\n' + 'なぜなら彼は、ただ一度しかそれを読めないことを知っているからだ。\n' + '\n' + ' \n' + '\n' + '-　ジャン・パウル　-'
    ];

    const result = Math.floor( Math.random() * answers.length);
            console.log(answers[result]);
            return result;
        };


    // ツイートエリアの作成
// let tweetDivided;
// tweetDivided.innerText = "";
//     const anchor = document.createElement('a');
//     const hrefValue =
//         'https://twitter.com/intent/tweet?button_hashtag=' +
//         encodeURIComponent('あなたのいいところ') +
//         '&ref_src=twsrc%5Etfw';
//     anchor.setAttribute('href', hrefValue);
//     anchor.className = 'twitter-hashtag-button';
//     anchor.setAttribute('data-text', result);
//     anchor.innerText = 'Tweet #あなたのいいところ';
//     tweetDivided.appendChild(anchor);
//
//     // widgets.js の設定
//     const script = document.createElement('script');
//     script.setAttribute('src', "https://platform.twitter.com/widgets.js");
//     let ixmldomNode = tweetDivided.appendChild(script);
// };
