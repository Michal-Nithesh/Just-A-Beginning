function myFunction(){
    document.getElementById('click').innerHTML = "Welcome, to Learn JavaScript";
    document.getElementById('clickMe').innerHTML = "Why are you Click Me...";
}

document.getElementById('color').style.color = "red";

// alert("Your Website is Hacked");

const element = document.getElementById('id01')
element.innerHTML = 'New Heading';

document.getElementById('curDate').innerHTML = "Date :" + Date();

//document.write(Date());

function validateForm(){
    let x = document.forms["myForm"]["FormName"].value;
    if(x == ""){
        alert("Name must be filled out");
        //return false;
    }
}

function countNum(){
    let y = document.getElementById('numb').value;
    let text;
    if(isNaN(y) || y < 1 || y > 10){
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById('print-value').innerHTML = text;
}
