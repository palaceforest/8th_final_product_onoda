const quizData = [
    {
        title:"13+8=?",
        choices:[
            { id:1, value:"31"},
            { id:2, value:"21"},
            { id:3, value:"24"},
            { id:4, value:"28"},
        ],
        correctId: 2,
        imgPath: "file:///Users/user/Pictures/%E7%84%A1%E9%A1%8C1_20221123011758.png"
    },
    {
        title:"枕草子の作者は？",
        choices:[
            { id:1, value:"青少納言"},
            { id:2, value:"清少納吟"},
            { id:3, value:"清少納言"},
            { id:4, value:"清小納言"},
        ],
        correctId: 3,
        imgPath: "file:///Users/user/Pictures/%E7%84%A1%E9%A1%8C3_20221123012837.png"
    },
    {
        title:"Wednesdayを日本語にすると？",
        choices:[
            { id:1, value:"木曜日"},
            { id:2, value:"火曜日"},
            { id:3, value:"日曜日"},
            { id:4, value:"水曜日"},
        ],
        correctId: 4,
        imgPath: "file:///Users/user/Pictures/%E7%84%A1%E9%A1%8C4_20221123013250.png"
    }
]

let imgItem = document.getElementById("item");

function makehtml (i){
    for (const choice of quizData[i].choices) {
        quizAnswerSelect.innerHTML += `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}"><label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`;
    }
    quizSentence.innerHTML = `<p>${quizData[i].title}</p>`;
    imgItem.src = quizData[i].imgPath;

    correctId = quizData[i].correctId;
}

const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const quizResult = document.getElementById('quiz_result');


let isCorrect = false; // 正解したかどうかのフラグ
let nowindex = 0
let correctId;
makehtml(nowindex)
    
quizSendButton.onclick = ev => {
for (const element of quizAnswerSelect.querySelectorAll("input")) {
    if (element.checked) {
        // 正解のidとチェックついたidが一致しているかどうか
        isCorrect = element.id == correctId;
    } 
    if(isCorrect){
        // 正解した時の挙動
        //document.querySelector('#item').remove();
        
        const str ="正解です";
        quizResult.innerHTML = `<p>${str}</p>`;
        nowindex++;
        quizAnswerSelect.innerHTML = "";
        isCorrect = false;
        if(nowindex <=  2){
            makehtml(nowindex)
        }else{
            const str ="クリア！";
            quizResult.innerHTML = `<p>${str}</p>`;
            quizSentence.innerHTML = ``;
            
            const txt = document.getElementById('quiz_send_button');
            txt.style.display ="none";

        }
    } else {
        // 不正解した時の挙動
        const str = "";
        quizResult.innerHTML = `<p>${str}</p>`;
}
}


};

