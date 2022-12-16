// Random Color Generator in JavaScript
document.getElementById("btn").addEventListener("click", () => {
    // Hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = `#${randomNumber.toString(16)}`;
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;

    // for copy the hex code auto
    navigator.clipboard.writeText(randomCode);
})