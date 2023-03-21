
   let Score=0;
   btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
 
function playRound(playerSelection,computerSelection) {
    // your code here!
        console.log(computerSelection)
 

    if(playerSelection=="rock" && computerSelection=="rock"){
        alert("Draw");
    }
    else if(playerSelection=="rock" && computerSelection=="papper"){
        alert("You loose Pappers beat Rock")
        if(Score==0){
            Score=0;
        }
        else Score--;

    }
    else if(playerSelection=="rock" && computerSelection=="scisors"){
        alert("You win rock beat scisor")
        Score++;
    }
    else if(playerSelection=="papper" && computerSelection=="papper"){
        alert("Draw")
    }
    else if(playerSelection=="papper" && computerSelection=="scisors"){
        alert("You lose scssors beat papper")
        if(Score==0){
            Score=0;
        }
        else Score--;
    }
    else if(playerSelection=="papper" && computerSelection=="rock"){
        alert("You win pappers win rock")
        Score++;
    }
    else if(playerSelection=="scisors" && computerSelection=="scisors"){
        alert("Draw")
    }
    else if(playerSelection=="scisors" && computerSelection=="papper"){
        alert("You win scissors cut pappers");
        Score++;
    }
    else if(playerSelection=="scisors" && computerSelection=="rock"){
        alert("You lose scissors dont cut rocks")
        if(Score==0){
            Score=0;
        }
        else Score--;
    }
    else{
        alert("TF happend")
    }

}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter choice");
        let computerSelection = () => {
  
            let a=Math.floor(Math.random() * 3) +1 ;
            if(a==1){
                a="rock";
              }	
              else if(a==2){
              a="papper";
              }
              else if(a==3){
              a="scisors";
              }
            
                 return a;
           } 

         playRound(playerSelection,computerSelection())
     }
     console.log(Score)
    
}