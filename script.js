
document.addEventListener("DOMContentLoaded", function () {
    let chance = 'X';
    let reset = document.getElementById("reset");
    let box = [];
    let fillCondition = [];
    let win = [[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6] ];
    let result = document.getElementById("result");
    let chance_score = document.getElementById("chance");
    let X = document.getElementById("X");
    let O = document.getElementById("O");
    let scoreX = 0;
    let scoreO = 0;
    let resetScore = document.getElementById("resetScore");

    for (let i = 1; i <= 9; i++) {
        let temp = String(i);
        box[i - 1] = document.getElementById(temp);
        fillCondition[i - 1] = 0;
    }

    for (let i = 0; i < 9; i++) {
        box[i].addEventListener("click", function() {
            mark(i);
        });
    }

    function mark(num) {
        if(fillCondition[num]==0){
            box[num].textContent = chance;
            
            fillCondition[num] = 1;
        
        if(checkWin()){
            if(chance == 'X') {
                result.innerHTML = "X wins !!";
                scoreX+=10;
                X.innerHTML = "X: " + scoreX +" points";
            }
            else{
                result.innerHTML = "O wins !!";
                scoreO+=10;
                O.innerHTML = "O: " + scoreO +" points";
            }
            
        }
        else{
            if(fillConditionCheck()){
                result.innerHTML = "It's a Tie !!";
                scoreX+=5;
                scoreO+=5;
                X.innerHTML = "X: " + scoreX +" points";
                O.innerHTML = "O: " + scoreO +" points";
                for(let i=0;i<9;i++){
                    box[i].style.color = "yellow";
                }
            }

            if(chance == 'X') {
                chance = 'O';
            }
            else{
                chance = 'X';
            }
        }

        chance_score.innerHTML = ("Chance: " + chance);

    }  
    }
    function checkWin() {
        let temp = [];
        for(let i=0;i<8;i++){
            for(let j=0;j<3;j++){
                temp[j] = win[i][j];
            }
            
            if(box[temp[0]].textContent === box[temp[1]].textContent && box[temp[1]].textContent === box[temp[2]].textContent && box[temp[2]].textContent==="X" || box[temp[0]].textContent === box[temp[1]].textContent && box[temp[1]].textContent === box[temp[2]].textContent && box[temp[2]].textContent==="O")
            {
                for(let i=0;i<3;i++){
                    box[temp[i]].style.color = "Green";
                }
                for(let i=0;i<9;i++){
                    fillCondition[i] =1;
                }
                return true;
            }
            
        }
        return false;
    }

    function fillConditionCheck(){
        let x=0;
        for(let i=0;i<9;i++){
            if(fillCondition[i]==0){
                x=1;
            }
        }
        if(x==1){
            return false;
        }
        else{
            return true;
        }
    }
    reset.addEventListener("click", resetbtn);

    function resetbtn() {
        for (i = 0; i < 9; i++) {
            box[i].textContent = "";
            fillCondition[i] =0;
            box[i].style.color = "white";
        }
        chance = 'X';
        result.innerHTML ="";
    }

    resetScore.addEventListener("click", resetScorebtn);

    function resetScorebtn(){
        chance_score.innerHTML = "Chance : X";
        X.innerHTML = "X: 0 points";
        O.innerHTML = "O: 0 points";
        scoreO =0;
        scoreX = 0;
    }

});

