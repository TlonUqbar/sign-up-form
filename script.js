const password1 = document.querySelector("#password");
const password2 =  document.querySelector("#confirm");
const error_msg = document.querySelector(".error-message");
const success_msg = document.querySelector(".success-message");

let p1 = '';
let p2 = '';


const comparePasswords = (e) => {
  p1 = password1.value;
  p2 = password2.value;
  console.log(e);
  if(p1 === p2 && p1 && p2){
    console.log("true");
    password1.classList = ["success"];
    password2.classList = ["success"];
    error_msg.style.display = "none";
    success_msg.style.display = "block";
  } else {
    console.log("false");
    password1.classList = ["error"];
    password2.classList = ["error"];
    error_msg.style.display = "block";
    success_msg.style.display = 'none';
  }

}


password1.addEventListener('input', comparePasswords);
password2.addEventListener('input', comparePasswords);