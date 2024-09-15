const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const loginBtn = document.querySelector(".loginbtn");
const errorMessageSpan = document.getElementById('errorMessage');
const alertElement = document.querySelector('.alert');
const box = document.querySelector('.box');

const boxRect = box.getBoundingClientRect();
const loginBtnRect = loginBtn.getBoundingClientRect();

loginBtn.addEventListener('mouseover', () =>{
   const usernameValue = usernameInput.value.trim();
   const passwordValue = passwordInput.value.trim();
   let errorMessage = "";
   if(usernameValue==="" || passwordValue=="") {
      errorMessage = "Username or Password Not Entered";
   } else if(passwordValue !== "bijoy123" ){
      errorMessage = "Incorrect Password! Try again";
   }
   if(errorMessage){
      errorMessageSpan.innerText = errorMessage;
      alertElement.classList.remove("hidden"); // Show the error message

      const i = Math.floor(Math.random() * (boxRect.width 
      - loginBtnRect.width)) + 1;
      const j = Math.floor(Math.random() * (boxRect.height 
         - loginBtnRect.height)) + 1;
      
         loginBtn.style.left =  i + 'px';
         loginBtn.style.top = j + 'px';
      
   }
   else{
      alertElement.classList.add("hidden");
   }

});


// let body = document.querySelector('body');
// let form = document.querySelector('form');
// let input = document.querySelectorAll('input');


// const spanElement = alertElement.querySelector('span');


// console.dir(input);
// console.log(input[2]);

// if(input[0].value==="" && input[1].value===""){
//    alert.innerText = "type your username and password."
// }


// loginBtn.onmouseover = function() { 
//    if(input[0].value==""|| input[1].value==""|| input[1].value!=="bijoy123"){
//       if(input[2].style.marginLeft==""){
//          input[2].style.marginLeft = "200px";   
//       } else {
//          input[2].style.marginLeft = "";
//       }
//    } 
   
//  }

