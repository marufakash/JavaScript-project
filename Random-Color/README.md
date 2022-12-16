## Random Color Generator in JavaScript

- Create the HTML file

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Color Generator</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <div class="container">
        <h1 id="color-code">Cick the button</h1>
        <button id="btn">Click here</button>
    </div>

    <script src="./js/script.js"></script>
  </body>
  </html>
  ```

- Add the CSS
- Add the Javacript file

  ```JavaScript
  document.getElementById("btn").addEventListener("click", () => {
    // Hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = `#${randomNumber.toString(16)}`;
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;

    // for copy the hex code auto
    navigator.clipboard.writeText(randomCode);
  })
  ```