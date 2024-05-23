//console.log("login");
//Login Page
// const loginForm = document.getElementById('login-form');
// console.log(loginForm);
// const loginButton = document.getElementById('login-btn');
//console.log(loginButton);

// loginButton.addEventListener("click" , (e) => {
//     e.preventDefault();
//     //console.log("clicked");
//     const userName = loginForm.elements['username'];
//     //console.log(userName);
//     const password = loginForm.elements['password'];
//     console.log(password);


    
//     //console.log(loginForm);
// })

//Create a form dynamically
var form = document.createElement("form");
form.setAttribute("method","post");
form.setAttribute("action","submit.php");

//Create an input element for username
let userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("name", "userName");
userName.setAttribute("placeholder","userName");

//Create an input element for password
let PWD = document.createElement("input");
PWD.setAttribute("type", "password");
PWD.setAttribute("placeholder","Password");



//Append username to the form
form.appendChild(userName);

//Append password to the form
form.appendChild(PWD);

document.getElementsByTagName("body")[0].appendChild(form)




