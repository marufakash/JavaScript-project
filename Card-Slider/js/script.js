// getting data
const departmentImg = ["./imges/bangla.jpg","./imges/botany.jpg","./imges/acce.png","./imges/arcitechere.png","./imges/english.jpg","./imges/bge.jpg","./imges/ir.jpg","./imges/phycies.jpg"];
const teacherImg = ["./imges/teacher1.png","./imges/teacher2.png","./imges/teacher3.png","./imges/teacher4.png","./imges/teacher5.png","./imges/teacher6.png","./imges/teacher7.png","./imges/teacher8.png"]
const departmentName = ["Bangla","Botany","Applied Chemistry & Chemical Engineering","Architecture","English","Biotechnology and Genetic Engineering","International Relations","Physics"];

// finding elements
const departmentBackground = document.querySelector(".department-bg");
const teacherImage = document.querySelector(".teacher-img");
const departmentNames = document.getElementById("department-name");

let count = 0;

// getData()
const getData = () => {
    departmentBackground.src = departmentImg[count];
    teacherImage.src = teacherImg[count];
    departmentNames.innerText = departmentName[count];
}

// next()
const next = () => {
    count++;
    if(count > teacherImg.length){
        count = 0;
        getData();
    }else{
        getData();
    }
}
// prev()
const prev = () => {
    count--;
    if(count < 0){
        count = teacherImg.length - 1;
        getData();
    }else{
        getData();
    }
}