let gamescq = [];
let userseq = [];

let startGame = false;
let lavel = 0;
let score = 0;

document.addEventListener('click', function (event) {
    if (startGame == false) {
        if (event.target.id == "btn") {
            startGame = true;
            lavelUp();
        }
    }
})

function btnflash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);

}

function lavelUp() {
    lavel++;
    document.querySelector('h2').innerText = `Lavel ${lavel}`;
    let btnnumber = Math.floor(Math.random() * 4);
    let btn = document.querySelectorAll('.btn');
    let selectbtn = btn[btnnumber];
    gamescq.push(selectbtn.id);
    btnflash(selectbtn);
}
function check(inx) {
    if (userseq[inx] === gamescq[inx]) {
        if (userseq.length == gamescq.length) {
            setTimeout(function () {
                lavelUp();
                userseq = [];
            }, 1000)
        }
    } else {
        document.querySelector('h2').innerHTML = `Game Over! Your lavel ${lavel} <br> Start again`;
        document.querySelector('body').style.background = "rgb(255, 150, 150)";
        setTimeout(function(){
            document.querySelector('body').style.background = "white";
        },200)
        highScore();
        reset();
    }
}
function btnPress() {
    userseq.push(this.id);
    btnflash(this);

    check(userseq.length - 1);
}

let btns = document.querySelectorAll('.btn');
for (btn of btns) {
    btn.addEventListener('click', btnPress)
}
function highScore(){
    if(score < lavel){
        score = lavel;
        let scoreBord = document.querySelector('h3');
        scoreBord.innerText = `Hight score ${score}`;
    }  
}
function reset(){
    startGame = false;
    gamescq = [];
    userseq = [];
    lavel = 0;
    
}
