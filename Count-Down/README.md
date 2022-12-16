## Build a Countdown Timer from Scratch

- Create the HTML file

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Count Down</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <div class="container">
        <h1 class="heading">Welcome to the <span>Milky-way</span> Galaxy</h1>
        <h2 class="end-date"></h2>
        <div class="col">
            <div>
                <input type="text" readonly value="0">
                <label>Days</label>
            </div>
            <div>
                <input type="text" readonly value="0">
                <label>Hours</label>
            </div>
            <div>
                <input type="text" readonly value="0">
                <label>Minutes</label>
            </div>
            <div>
                <input type="text" readonly value="0">
                <label>Seconds</label>
            </div>
        </div>
    </div>

    <script src="./js/script.js"></script>
  </body>
  </html>
  ```

- Add the JavaScript file

  ```JavaScript
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
  ```
  