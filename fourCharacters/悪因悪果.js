const quizData = [
    {
        title1:"本末○倒",
        choices1:[
            { id:1, value:"止"},
            { id:2, value:"転"},
            { id:3, value:"同"},
            { id:4, value:"知"},
        ],
        correctId: 2,
    },
    {
        title2:"有○実行",
        choices2:[
            { id:1, value:"前"},
            { id:2, value:"己"},
            { id:3, value:"言"},
            { id:4, value:"鼎"},
        ],
        correctId: 3,
    },
];
const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
// const quizResult = document.getElementById('quiz_result');
const useQuizData = quizData[0];
// 問題文
quizSentence.innerHTML = `<p>${useQuizData.title1}</p>`
// 選択肢
for (const choice of useQuizData.choices1) {
    quizAnswerSelect.innerHTML += `<input
     id="${choice.id}" class="radio-inline__input"
    type="radio" name="answer" value="${choice.id}"><label
     class="radio-inline__label"
    for="${choice.id}">${choice.value}</label>`;
}
const quizSendButton2 =
document.getElementById('quiz_send_button')
quizSendButton2.onclick = ev => {
    console.log("クリックされた！");
    for (const element of quizAnswerSelect.querySelectorAll("input")) {
        console.log('hello')
        // 選択肢の状態を確認し、チェック状態なら{}の中身を実施
        if (element.checked) {
            console.log(element.id);
        }
    }
}
// quizSendButton2.onclick = ev => {
// }
const quizResult = document.getElementById('quiz_result');
//問題文
quizSentence.innerHTML = `<p>${useQuizData.title1}</p>`;
// 1．ボタン押下時
quizSendButton.onclick = ev => {
    // 2. 選択肢を全部取得しチェック状態を確認
    for (const element of
        quizAnswerSelect.querySelectorAll("input")) {
        if (element.checked) {
            // 3. 正誤判定
            const result = element.id ==
 useQuizData.correctId;
         const str = result ? "正解です" : "不正解です";
            quizResult.innerHTML = `<p>${str}</p>`;
        }
    }
};

const quizSentence2 = document.getElementById('quiz_sentence2');
const quizAnswerSelect2 = document.getElementById('quiz_answer_select2');
const quizSendButton3 = document.getElementById('quiz_send_button3');

// const quizResult = documennt.getElementById('quiz_result');
const useQuizData2 = quizData[1];
// 問題文
quizSentence2.innerHTML = `<p>${useQuizData2.title2}</p>`
// 選択肢
for (const choice2 of useQuizData2.choices2) {
    quizAnswerSelect2.innerHTML += `<input
     id="${choice2.id}" class="radio-inline__input"
    type="radio" name="answer" value="${choice2.id}"><label
     class="radio-inline__label"
    for="${choice2.id}">${choice2.value}</label>`;
}
const quizSendButton4 =
document.getElementById('quiz_send_button4')
quizSendButton4.onclick = ev => {
    console.log("クリックされた！");
    for (const element of quizAnswerSelect2.querySelectorAll("input")) {
        console.log('hello')
        // 選択肢の状態を確認し、チェック状態なら{}の中身を実施
        if (element.checked) {
            console.log(element.id);
        }
    }
}
// quizSendButton2.onclick = ev => {
// }
const quizResult2 = document.getElementById('quiz_result2');
//問題文
quizSentence2.innerHTML = `<p>${useQuizData2.title2}</p>`;
// 1．ボタン押下時
quizSendButton4.onclick = ev => {
    // 2. 選択肢を全部取得しチェック状態を確認
    for (const element of
        quizAnswerSelect2.querySelectorAll("input")) {
        if (element.checked) {
            // 3. 正誤判定
            const result = element.id ==
 useQuizData2.correctId;
         const str = result ? "正解です" : "不正解です";
            quizResult2.innerHTML = `<p>${str}</p>`;
        }
    }
};