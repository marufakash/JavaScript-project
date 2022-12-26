// finding elements
const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".withdraw-btn");
const withdrawTitle = document.getElementById("withdraw-title");

// Add the listeners
depositBtn.addEventListener("click", () => {
    const depositNumber = getInputNumber("deposit-value");

    updateText("current-deposit",depositNumber);
    updateText("current-balence",depositNumber);

    document.getElementById("deposit-value").value = '';
})

withdrawBtn.addEventListener("click", () => {
    const withdrawNumber = getInputNumber("withdraw-value");

    updateText("current-withdraw",withdrawNumber);
    updateText("current-balence", -1*withdrawNumber);

    document.getElementById("withdraw-value").value = '';
})

const getInputNumber = (id) => {
    const amountNumber = parseFloat(document.getElementById(id).value);
    return amountNumber;
}

const updateText = (id, depositNumber) => {
    const currentNumber = parseFloat(document.getElementById(id).innerText);
    const totalNumber = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalNumber;
}











// depositBtn.addEventListener("click", () => {
//     const depositAmount = parseFloat(document.getElementById("deposit-value").value);
//     const currentDeposit = parseFloat(document.getElementById("current-deposit").innerText);

//     const totalDeposit = depositAmount + currentDeposit;

//     document.getElementById("current-deposit").innerText = totalDeposit;
//     document.getElementById("deposit-value").value = '';

//     const currentBalence = parseFloat(document.getElementById("current-balence").innerText);
//     const totalBalence = currentBalence + depositAmount;
//     document.getElementById("current-balence").innerText = totalBalence;
// })

// withdrawBtn.addEventListener("click", () => {
//     const withdrawAmount = parseFloat(document.getElementById("withdraw-value").value);
//     const currentWithdraw = parseFloat(document.getElementById("current-withdraw").innerText);

//     const totalWithdraw = currentWithdraw + withdrawAmount;

//     document.getElementById("current-withdraw").innerText = totalWithdraw;
//     document.getElementById("withdraw-value").value = '';

//     const currentBalence = parseFloat(document.getElementById("current-balence").innerText);
//     const totalBalence = currentBalence - withdrawAmount;
//     document.getElementById("current-balence").innerText = totalBalence;
// })