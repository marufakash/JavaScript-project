## 1. Quiz App build With JavaScript

- Add the HTML

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <section class="main">
        <div class="container">
            <div class="col">
                <h3 id="questionBox"></h3>
            </div>
            <div class="col box">
                <input type="radio" name="option" id="first" value="a" required>
                <label for="first">Testing 1</label>
            </div>
            <div class="col box">
                <input type="radio" name="option" id="second" value="b" required>
                <label for="second">Testing 2</label>
            </div>
            <div class="col box">
                <input type="radio" name="option" id="third" value="c" required>
                <label for="third">Testing 3</label>
            </div>
            <div class="col box">
                <input type="radio" name="option" id="fourth" value="d" required>
                <label for="fourth">Testing 4</label>
            </div>
        </div>
        <button id="submit">Submit</button>
    </section>

    <script src="./js/script.js"></script>
  </body>
  </html>
  ```

- Add the JavaScript
 
  ```JavaScript
  const quizData = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
  ]

  // initializing some values
  let index = 0;
  let correct = 0;
  let inCorrect =0;
  let total = quizData.length;

  // find the elements
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']");

  // reset
  const reset = () => {
    allInputs.forEach((input) => input.checked = false);
  }

  // loadQuestion
  const loadQuestion = (index) => {
    if(total === index){
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}. ${data.question}`;
    allInputs[0].nextElementSibling.textContent = data.a;
    allInputs[1].nextElementSibling.textContent = data.b;
    allInputs[2].nextElementSibling.textContent = data.c;
    allInputs[3].nextElementSibling.textContent = data.d;
  }
  loadQuestion(index);

  // submit 
  document.getElementById("submit").addEventListener("click",()=> {
    const data = quizData[index];
    const ans = getAnswer();
    if(ans == data.correct){
        correct++;
    }else{
        inCorrect++;
    }
    index++;
    loadQuestion(index);
  })

  // getAnswer
  const getAnswer = () => {
    let ans;
    allInputs.forEach((input) => {
        if(input.checked){
            ans = input.value;
        }
    })
    return ans;
  }

  // quizEnd
  const quizEnd = () => {
    document.querySelector(".main").innerHTML = `
        <div class="col">
            <h3> Your score : ${correct} / ${total} </h3>
        </div>
    `
  }
  ```
  