const photos =["./image/img1.jpg","./image/img2.jpg","./image/img3.jpg","./image/img4.jpg","./image/img5.jpg","./image/img6.jpg"];

// finding elements
image = document.getElementById("img");
let count = 0;

const next = () => {
    count++;
    
    if(count >= photos.length) {
        count = 0;
        image.src = photos[count];
    }else {
        image.src = photos[count];
    }
}

const prev = () => {
    count--;

    if(count < 0) {
        count = photos.length - 1;
        image.src = photos[count];
    }else {
        image.src = photos[count];
    }
}