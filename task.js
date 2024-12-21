// Task-1

function changeText(event) {  
    event.target.style.color = "gray";
}
let elements = document.querySelectorAll('.action');
elements.forEach((element) => {   
    element.addEventListener('click', changeText);
});

//Task-2

function changeTextBlue(event) {  
    event.target.style.color = "blue";
    event.target.style.textDecoration = "line-through";
}
let elements2 = document.querySelectorAll('.action1');
elements2.forEach((element) => {   
    element.addEventListener('click', changeTextBlue);
});

// Task-3                                   

document.addEventListener('keydown', (event) => {  
    if (event.key === "Enter"){
        console.log('ENTER');
    }
});


// Task-1 from lesson 23

document.querySelector('.myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let password = document.querySelector('.password').value;
    
    if (password.length > 5) {
        console.log("Icaze verildi");
    } else {
        console.log("Giris qadagandir");
    }
});