// DOM ELEMENTS
const gameBtn = document.querySelectorAll(".game__btn");
const gameEle = document.querySelector(".game");
const contest = document.getElementById("contest");
const houseHandImg = document.querySelector(".contest__househand img");
const userHandImg = document.querySelector(".contest__userhand img");
const resultEle = document.querySelector("h1#result");
const scoreEle = document.getElementById("score");
const resetBtn = document.getElementById("play-again");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector("img.close");

// console.log(houseHandImg);

// Game array
const gameArr = ["Paper", "Scissors", "Rock"];

// Score Count
let scoreCount = 0;

// Set Score Function
const setScore = () => {
  scoreCount++;
  scoreEle.innerHTML = scoreCount;
};

// Pick User hand function
const pickUserHand = (hand) => {
  gameEle.style.display = "none";
  contest.style.display = "block";
  // console.log(hand.classList);
  userHandImg.setAttribute("src", `./images/${hand.classList}.png`);
  return hand.classList[0];
};

// House Hand Function
const pickHouseHand = () => {
  const randomNum = Math.floor(Math.random() * gameArr.length);
  // console.log(gameArr[randomNum]);
  houseHandImg.setAttribute("src", `./images/${gameArr[randomNum]}.png`);
  return gameArr[randomNum];
};

// Declare Result Function
const declareResult = (userHand, houseHand) => {
  console.log("Working");
  console.log("Userhand: ", userHand, "HouseHand: ", houseHand);
  if (userHand == "Paper" && houseHand == "Rock") {
    resultEle.innerHTML = `You Win!`;
    setScore();
  } else if (userHand == "Rock" && houseHand == "Scissors") {
    resultEle.innerHTML = `You Win!`;
    setScore();
  } else if (userHand == "Scissors" && houseHand == "Paper") {
    resultEle.innerHTML = `You Win!`;
    setScore();
  } else if (userHand == houseHand) resultEle.innerHTML = `It's a tie!`;
  else resultEle.innerHTML = `You lose!`;
};

// Reset Function
function resetGame() {
  gameEle.style.display = "block";
  contest.style.display = "none";
}

// Event Listeners
gameBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    pickUserHand(e.target);
    pickHouseHand();
    const userHand = pickUserHand(e.target);
    const ChouseHand = pickHouseHand();
    declareResult(userHand, ChouseHand);
  });
});

// Rules Modal Event listener
document.getElementById("rules-btn").addEventListener("click", () => {
  document.body.classList.add("overlay");
  modal.style.display = "block";
});

// Close Btn Event listener
closeBtn.addEventListener("click", (e) => {
  document.body.classList.remove("overlay");
  modal.style.display = "none";
  e.preventDefault();
});

// Reset button event listener
resetBtn.addEventListener("click", resetGame);
