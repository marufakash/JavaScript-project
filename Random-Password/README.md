## 1. Password Generator Project

- Create the html file

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <div class="container">
        <div class="box">
            <span id="pass-box">Testing</span>
            <div class="row">
                <div class="left">PassWord Length : </div>
                <div class="right">
                    <input type="number" min="8" value="10" max="30" id="total-char">
                </div>
            </div>
            <div class="row">
                <div class="left">Contains Uppercase : </div>
                <div class="right">
                    <input type="checkbox" id="upper-case" checked>
                </div>
            </div>
            <div class="row">
                <div class="left"> Contains Lowercase</div>
                <div class="right">
                    <input type="checkbox" id="lower-case">
                </div>
            </div>
            <div class="row">
                <div class="left">Contains Numbers : </div>
                <div class="right">
                    <input type="checkbox" id="numbers">
                </div>
            </div>
            <div class="row">
                <div class="left">Contains Symbols : </div>
                <div class="right">
                    <input type="checkbox" id="symbols">
                </div>
            </div>
            <div class="row">
                <button id="btn">Generate</button>
            </div>
        </div>
    </div>

    <script src="./js/script.js"></script>
  </body>
  </html>
  ```

- Add the JavaScript file

  ```JavaScript
  // initializing some values
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerSet = "abcdefghijklmnopqrstuvwxyz";
  const numberSet = "1234567890";
  const symbolSet = "~!@#$%^&*()_+/";

  // finding elements
  const passBox = document.getElementById("pass-box");
  const totalChar = document.getElementById("total-char");
  const upperInput = document.getElementById("upper-case");
  const lowerInput = document.getElementById("lower-case");
  const numberInput = document.getElementById("numbers");
  const symbolInput = document.getElementById("symbols");

  // getRandomData
  const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
  }

  const truncateString = (str,num) => {
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }
  }

  // getRandomPassword
  const generatePassword = (password="") => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }if(numberInput.checked){
        password += getRandomData(numberSet);
    }if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }if(password.length < totalChar.value){
        return generatePassword(password);
    }

    passBox.innerText = truncateString(password, totalChar.value);
  }

  generatePassword();

  document.getElementById("btn").addEventListener("click", () => 
  generatePassword());
  ```
  