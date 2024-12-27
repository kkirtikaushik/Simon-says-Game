let gameseq=[];
let userseq=[];
let clr=["hotpink","seablue","orange","purple"];
let started=false;
let level=0;
let hscr=0;
document.addEventListener("keypress",function(){
    if(started==false){
        
      
        
        started=true;
        levelup();


    }
})

function levelup() {
    userseq=[];
    level++;

    let h3=document.querySelector("h3");
    h3.innerText=`Your Level Is ${level},Highest Score: ${hscr}`;
    let rndidx=Math.floor(Math.random()*clr.length);
    let rndclr=clr[rndidx];
    let rndbtn=document.querySelector(`.${rndclr}`);
    gameseq.push(rndclr); 
    btnflash(rndbtn);
    
}
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
    
}
let btns=document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click",btnpress)
    
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    let userclr=btn.getAttribute("id");
    userseq.push(userclr);
    checkans();


}
function checkans() {
    // Check if the user's sequence is correct so far
    for (let i = 0; i < userseq.length; i++) {
        if (userseq[i] !== gameseq[i]) {
            let h3 = document.querySelector("h3");

            if (level > hscr) {
                hscr = level - 1;  // High score is the last successful level
            }

            h3.innerHTML = `Game Over! Your score is<b> ${level}, highest score is ${hscr}<b><br>Press any key to start again.`;
            document.querySelector("body").style.backgroundColor="red"
            setTimeout(() => {
                 document.querySelector("body").style.backgroundColor="white"
            }, 250);
            reset();
            return;
        }
    }

    // If user has matched all the colors in the sequence, move to the next level
    if (userseq.length === gameseq.length) {
        setTimeout(levelup, 1000);
    }
}

function reset(){
     gameseq=[];
     userseq=[];
     started=false;
     level=0;
    // let h3=document.querySelector("h3");
    // h3.innerText="Press any key to start again"
    //  levelup();
}