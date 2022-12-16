const endDate = "23 December 2022 12:00:00 AM";

document.querySelector(".end-date").textContent = endDate;
const inputs = document.querySelectorAll("input");

setInterval(() => {
    const end = new Date(endDate);
    const start = new Date();
    const diff = (end - start) / 1000;

    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
},1000)