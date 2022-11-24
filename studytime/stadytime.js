let game = {
    startTime: null,
    displayArea: document.getElementById('display-area')
};

function start() {
    game.startTime = Date.now();
    c = setInterval(updateParagraph, 50)
}

function stop () {
    clearInterval(c)
    //setIntervalを中止する
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime)  / 1000; 
    let dataArray = [];
    //let minutes = (currentTime - game.startTime) /1000
    //let minutes2 = minutes % 60
    // var array = [];
    // var obj = {
    //     'stadyTime':seconds,
    //     'stadyTime2':seconds
    // };
    // array.push(obj);

    // var setjson = JSON.stringify(obj);
    // localStorage.setItem('stadyTime',setjson);
    // let stadyTmie = localStorage.getItem('stadyTime');
    //var obj = JSON.parse(stadyTmie);
    var today = new Date();
    today = today.getFullYear()+"/"+today.getMonth()+"/"+today.getDate();
    console.log(today);

    console.log();
    var studyTime  = seconds
    localStorage.setItem(today, studyTime);
    var aa = localStorage.getItem(today);
    console.log("今日の勉強時間は"+aa);
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let rem = seconds % 60;
    rem = Math.floor(rem * 100) / 100;
    game.displayArea.innerText = (`${hour}時間${min}分${rem}秒`) + 'でした。ナイスファイト。';
    dataArray.push(seconds);
    return dataArray;
    
}    

function clicktest() {
    //console.log(stop.seconds);

    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime)  / 1000; 
    let dataArray = [];
    console.log(dataArray[0]);

    // var today = new Date();
    // today = today.getFullYear()+"/"+today.getMonth()+"/"+today.getDate();
    // let aa = localStorage.getItem(today);
    // game.displayArea.innerText = (Number(aa) + Number(aa));
    // var Numbers = (Number(aa) + Number(aa));
    //  alltime = today.getFullYear();
    //  localStorage.setItem(alltime, Numbers);
    //  let bb = localStorage.getItem(alltime);
    //  game.displayArea.innerText = (Number(bb) + Number(aa));
    
}

function updateParagraph() {
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime) / 1000;
    //seconds = Math.floor(seconds * 100) / 100;
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let rem = seconds % 60;
    rem = Math.floor(rem * 100) / 100;
    //console.log("hour",hour)
    game.displayArea.innerText = (`${hour}時間${min}分${rem}秒`); + '経過しました';
}

// json = JSON.parse(localStorage.getItem('stadyTime'));
// jsonKeys = Object.keys(json);

// lastStudyTime = json[`${jsonKeys[jsonKeys.length - 1]}`]
// lastStudyTime2 = json[`${jsonKeys[jsonKeys.length - 2]}`]

// if (lastStudyTime < lastStudyTime2){
//     game.displayArea.innerText = oji['stadyTime'] + '分でした。ナイスファイト！'
// } else if (0 < lastStudyTime) {

// }   else{
//     game.displayArea.innerText = oji['stadyTime'] + '分でした。もっと頑張れ！'
// }

// var totalTime = 0;
// JSON.parse(localStorage.getItem('stadyTime'), (key, value) => {
//     totalTime += value
// })
