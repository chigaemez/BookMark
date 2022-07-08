const arrow = document.querySelector('.faq-holder')
const dropDownItem = document.querySelector('.hidden-text')
const obj = document.querySelector('obj')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')

// let number = new Number(1,2,3,4);
let number = 1
const name = {
    firstname:'okon',
    bet:function(){
        return this.firstname
    }
};
let array1 = [1,2,'abbey'];
let array2= new Array(1,2,'abbey');
console.log(array2);

const btn1 =document.querySelector('.value1')
const btn2 =document.querySelector('.value2')
const btn3 =document.querySelector('.value3')

arrow.addEventListener("click", dropDown);

function displayContent(db,dn1,dn2){
    db.style.display = 'flex'
    dn1.style.display = 'none'
    dn2.style.display = 'none'
}


function dropDown(e) {
    console.log("hello");
    
        var x = e.target.parentElement.nextElementSibling;

        if (e.target.parentElement.classList.contains('arrow-btn') && window.getComputedStyle(x).display === "none"){
            e.target.parentElement.nextElementSibling.style.display = "block";
        }
        else if (e.target.parentElement.classList.contains('arrow-btn') && window.getComputedStyle(x).display === "block"){
            e.target.parentElement.nextElementSibling.style.display = "none";
        }
    
    
 }
 
btn1.addEventListener('click', display)

function display (){
    displayContent(one,two,three);
}

btn2.addEventListener('click', display2)

function display2 (){
    displayContent(two,one,three);
}

btn3.addEventListener('click', display3)

function display3 (){
    displayContent(three,two,one);
}

const APP = (function(){

    return{
        init: ()=>{
            displayContent(one,two,three);
        }
    }
})();

APP.init();



let btn = document.getElementById('btn')
let form = document.getElementById('Email')
let error = document.getElementById('error')


btn.addEventListener('click', SubmitEven);


function SubmitEven(e){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let input = form.value
    


    if(input == '' || !re.test(input)){
        errmsg = 'Please input a correct Email'
        ShowErrorMessage(form, errmsg)
        console.log('wrong')
        setTimeout(removeMessage, 3000)

    }else{
        error.innerHTML = 'Email Verified';
        error.style.color = 'white'

        setTimeout(removeMessage, 3000)
    }


    function ShowErrorMessage(msg, errmsg){
        form.style.border = '1px solid red'
        error.innerHTML = errmsg
        error.style.color = 'red'
    }
    

    function removeMessage(){
        document.querySelector('#error').remove()
    }
}



