## Movie Guide App using JavaScript

- Add the html file

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Guide App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <div class="container">
        <div class="search-container">
            <input type="text" id="movie-name" placeholder="Enter movie name here...">
            <button id="search-btn">Search</button>
        </div>
        <div id="result"></div>
    </div>

    <script src="./js/script.js"></script>
  </body>
  </html>
  ```

- Add the JavaScript file

- API website : https://www.omdbapi.com

  ```JavaScript
  // finding elements
  const movieNameRef = document.getElementById("movie-name");
  const searchBtn = document.getElementById("search-btn");
  const result = document.getElementById("result");

  // fetch data from API
  const getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=83c380f`;

    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="msg">Please enter a movie name...</h3>`;
    }else{
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw Error("fetching is not successful");
            }else{
                return res.json();
            }
        })
        .then((data) => {
            console.log(data);
            const {Poster, Title, Rated, Released, Type, Country, Runtime, Genre, Director, Actors, Awards, Plot} = data;
            if(data.Response){              
                result.innerHTML = `
                    <div class="info">
                        <img src=${Poster} class="poster">
                        <div class="info-des">
                            <h1 class="heading">NETFLIX</h1>
                            <h2 class="title">${Title}</h2>
                            <p>${Released}, ${Country}</p>
                            <p><span class="border">${Runtime}</span> ${Genre}, <span class="border">${Rated}</span></p>
                            <p>${Plot}</p>
                            <p>Type : ${Type}</p>
                            <p><span class="red">Director</span> : ${Director}</p>
                            <p><span class="red">Actors</span> : ${Actors}</p>
                            <p><span class="red">Awards</span> : ${Awards}</p>
                        </div>
                    </div>
                `;
            }else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        .catch((err) => result.innerHTML = `<h3 class="msg">${err}</h3>`);
    }
  }

  searchBtn.addEventListener("click",getMovie);
  window.addEventListener("load", getMovie);
  ```
  