
let answer = parseInt(Math.random() *100)+0;
let count = 1;
console.log(answer)
const judgeArea=document.getElementById("judgement-area")
const countArea = document.getElementById('count');

let scoreMessage = document.getElementById('message');

function onButtonClick() {
        let correctNumber = document.getElementById("number").value
        if (answer>correctNumber) {
            judgeArea.innerHTML = "正解の数は入力した値よりもおおきいです！";
            count++;
        }else if(answer<correctNumber){
            judgeArea.innerHTML = "正解の数は入力した値よりも小さいです！";
            count++;
        }else{
            judgeArea.innerHTML = "正解" 
            countArea.innerHTML = `あなたの入力回数は、${count}です`
            if (count === 1){
                scoreMessage.innerHTML = "天才！";
            }
        if (count >= 2, count <= 5){
            scoreMessage.innerHTML = "すごい！"
        }
        }
        console.log(score)
}
