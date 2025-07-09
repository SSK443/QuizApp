const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
    answer: "Blue Whale",
  },
  {
    question: "What is H2O?",
    options: ["Sugar", "Salt", "Water", "Oxygen"],
    answer: "Water",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
    answer: "Shakespeare",
  },
  {
    question: "What is 10 × 5?",
    options: ["40", "50", "60", "70"],
    answer: "50",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Nitrogen",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: "Japan",
  },
];


// start

let currentQuestion=0;
let currentScore=0;
let time=30;
let timer;




function start(){
  document.getElementById("questionPages").style.display = "block";
  document.getElementById("starting-page").style.display = "none";
  showQuestion()
}


function showQuestion(){
  const q=questions[currentQuestion];
  document.getElementById("questNumberHeading").textContent=currentQuestion+1;
  document.getElementById("quests").textContent=q.question;
  const options=document.getElementById("options");
  options.innerHTML=q.options.map((opt)=>` <button onclick=" selectOption('${opt}')" >${opt}</button>`).join("");
  time=30;
  document.getElementById("timer Heading").textContent=time;

  clearInterval(timer);
  timer =setInterval(() => {
    document.getElementById("timer Heading").textContent = --time;
    if(time<=0)nextQuestion();
  }, 1000);
 
}

function selectOption(opt){
  clearInterval(timer);
  if(opt==questions[currentQuestion].answer) {
    currentScore++;
  }
  nextQuestion();
}


function nextQuestion(){
  currentQuestion++
  if(currentQuestion<questions.length){
    showQuestion();
  }else{
    document.getElementById("questionPages").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
    document.getElementById("totalScore").textContent=`Score: ${currentScore}/${questions.length}`
}


}

function Reset(){
  document.getElementById("finalPage").style.display = "none";
  document.getElementById("starting-page").style.display = "block";
  currentQuestion=0;
  time=30;
  currentScore=0;

}