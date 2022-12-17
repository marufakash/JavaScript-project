## 1. JavaScript Notes App Project

- Create the HTML file

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Own Notes Taking App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <div class="container">
        <button class="addBtn"><i class="fa-solid fa-plus"></i> Add Note</button>
    </div>

    <script src="./js/script.js"></script>
  </body>
  </html>
  ```

- Add the JavaScript file

  - finding elements

    ```JavaScript
    // finding elements
    const addBtn = document.querySelector(".addBtn");
    const Container = document.querySelector(".container");
    ```

  - add the listener

    ```JavaScript
    addBtn.addEventListener("click",addNote);
    ```

  - addNote()

    ```JavaScript
    // addNote
    const addNote = (text = "") => {
        const note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `
            <div class="tool">
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
        `;

        Container.appendChild(note);
    }
    ```

  - Save the notes in localStorage

    ```JavaScript
    // saveNotes
    const saveNotes = ()=> {
        const notes = document.querySelectorAll(".note textarea");
        const data = [];
        notes.forEach((note) => data.push(note.value));

        if(data.length === 0){
            localStorage.removeItem("notes");
        }else{
            localStorage.setItem("notes", JSON.stringify(data));
        }
    }
    ```

  - Add the listeners in addNote()

    ```JavaScript
    // addNote
    const addNote = (text = "") => {
        note.querySelector(".fa-trash").addEventListener("click",() => {
            note.remove();
            saveNotes();
        })

        note.querySelector(".fa-floppy-disk").addEventListener("click", () => {
            saveNotes();
        })

        note.querySelector("textarea").addEventListener("focusout", () => {
            saveNotes();
        })
    }
    ```

  - Read the notes

    ```JavaScript
    // read notes
    (function() {
        const isNotes = JSON.parse(localStorage.getItem("notes"));
        if(isNotes === null){
            addNote();
        }else{
            isNotes.forEach((note) => addNote(note));
        }
    })();
    ```
