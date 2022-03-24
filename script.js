function computerPlay(){
    let arr=["Paper","Rock","Scissors"];
    let ind=Math.floor(Math.random()*(2)+0);
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
            if(computerSelection=="Paper")
            {
                return "You Lose."
            }
            else{
                return "You Win."
            }
        }
}
function game()
{
    let sc1=0,sc2=0;
    
    for(let i=0;i<5;i++)
    {
        let out = playRound(prompt("Plese enter your card: ","Paper"),computerPlay());
        if(out=="You Win.")
        {
            sc1++;
        }else{
            sc2++;
        }
        
    }
    if(sc1>sc2)
        {
            console.log("you are winner!.")
        }else if(sc1==sc2)
        {
            console.log("draw");
        }else{
            console.log("You Lose.")
        }
}