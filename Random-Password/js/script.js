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

document.getElementById("btn").addEventListener("click", () => generatePassword());