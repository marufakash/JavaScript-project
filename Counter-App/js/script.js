// finding element
let countValue = document.querySelector(".count");
let allBtn = document.querySelectorAll(".btn");

// Initial a value
let count = 0;

allBtn.forEach((btn) => btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        count--;
    }else if(styles.contains("increase")){
        count++;
    }else{
        count = 0;
    }

    if(count < 0){
        countValue.style.color = "red";
    }else if( count > 0){
        countValue.style.color = "green";
    }else{
        countValue.style.color = "#333";
    }

    countValue.textContent = count;
}))