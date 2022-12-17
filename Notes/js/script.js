// finding elements
const addBtn = document.querySelector(".addBtn");
const Container = document.querySelector(".container");

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

    Container.appendChild(note);
}

addBtn.addEventListener("click",addNote);

// read notes
(function() {
    const isNotes = JSON.parse(localStorage.getItem("notes"));
    if(isNotes === null){
        addNote();
    }else{
        isNotes.forEach((note) => addNote(note));
    }
})();
