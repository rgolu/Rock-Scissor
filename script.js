function computerPlay(){
    let arr=["Paper","Rock","Scissors"];
    let ind=Math.floor(Math.random()*(3)+0);
    console.log(arr[ind]);
    return arr[ind];

}

function playRound(playerselection,computerSelection)
{
    playerselection = playerselection.toLowerCase();
    playerselection = playerselection.charAt(0).toUpperCase()+ playerselection.slice(1);
    console.log(playerselection);
        if(playerselection==computerSelection)
        {
           // console.log("Draw");
            return "Draw";
        }
        else if(playerselection=="Paper")
        {
            if(computerSelection=="Scissors")
            {
                return "You Lose."
            }
            else{
                return "You Win."
            }
        }
        else if(playerselection=="Scissors")
        {
            if(computerSelection=="Rock")
            {
                return "You Lose."
            }
            else{
                return "You Win."
            }
        }
        else if(playerselection=="Rock")
        {
            if(computerSelection == "Paper")
            {
                return "You Lose."
            }
            else{
                return "You Win."
            }
        }
}
let sc=Number(0),ttl=Number(0);
function game(e)
{
    ttl+=1;
    const playerSelection = e;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection,computerSelection);
    console.log(result);
    const dp = document.querySelector('.result');
    dp.value = result;
    if(result == "You Win."){sc+=1;}
    console.log(sc);
    const score = document.querySelector('#score');
    score.innerText = sc + " / " + ttl;


   

}