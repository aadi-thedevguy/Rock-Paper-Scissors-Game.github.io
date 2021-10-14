
const handOptions = {
    'Rock': '/assets/Rock.png',
    'Paper': '/assets/Paper.png',
    'Scissors': '/assets/Scissors.png'
}
let SCORE = 0;
let contest = document.querySelector('.contest')
let hands = document.querySelector('.hands');


function pickUserHand(hand) {
// hiding the current page
    
    hands.style.display = 'none';

// showing next page with the hand you picked

contest.style.display = 'flex';

//set the user pick
    document.getElementById('userPickImage').src = handOptions[hand]
    
    // pickUserHand(hand)
    pickComputerHand(hand)
    
}

const pickComputerHand = (hand) => {
    let hands = ['Rock','Paper','Scissors']

    // picking random hand by the computer
    let cpHand = hands[Math.floor([Math.random() * 3])]

    //set the computer pick
    document.getElementById('computerPickImage').src = handOptions[cpHand]

    referee(hand, cpHand)
}

const referee = (userHand,cpHand) => {

    if ((userHand == "Paper" && cpHand == "Scissors") || (userHand == "Scissors" && cpHand == "Rock") || (userHand == "Rock" && cpHand == "Paper")) {
        setDecision("YOU LOSE!");
      } 
      else if ((userHand == "Scissors" && cpHand == "Paper") || (userHand == "Paper" && cpHand == "Rock") || (userHand == "Rock" && cpHand == "Scissors")) { 
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      } 
      else {
        setDecision("It's a tie!");
      }
        
    
}


const setDecision = (decision) => {
    document.querySelector('.decision h1').innerText = decision
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector('.score h1').innerText = score
}

const restartGame = () => {
    hands.style.display = 'flex'
    contest.style.display = 'none'
}