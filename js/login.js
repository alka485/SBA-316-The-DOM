console.log("hello");

//Create a back button dynamically
const backButton = document.createElement('button');
backButton.textContent = 'Back';
backButton.classList.add('btn');

//Add an event listener to the back button
backButton.addEventListener('click', function(){
    window.history.back();
});

//Append the back button to the login container
document.querySelector('.login-container').appendChild(backButton);

//Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const formContainer = document.getElementById('form-container');
    
    signupBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log("clicked");
    formContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    const form = document.createElement('form');
    form.setAttribute('method','post');
    form.setAttribute('action', 'submit_signup.php');
    //console.log(form);
    
    const userName = document.createElement('input');
    userName.setAttribute('type', 'text');
    userName.setAttribute('name', 'username');
    userName.setAttribute('placeholder', 'Username');
    userName.setAttribute('required', true);
    
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    email.setAttribute('required', true);
    
    const pwd = document.createElement('input');
    pwd.setAttribute('type', 'password');
    pwd.setAttribute('name', 'password');
    pwd.setAttribute('placeholder', 'Password');
    pwd.setAttribute('minlength', '6');
    pwd.setAttribute('maxlength', '14');
    pwd.setAttribute('required', true);
    
    const signupBtn = document.createElement('button');
    signupBtn.setAttribute('type', 'submit');
    signupBtn.classList.add('btn');
    signupBtn.textContent = 'Sign Up';
    
    const backBtn = document.createElement('button');
    backBtn.classList.add('btn');
    backBtn.textContent = 'Back';
    backBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
    });
    
    form.appendChild(userName);
    form.appendChild(email);
    form.appendChild(pwd);
    form.appendChild(signupBtn);
    fragment.appendChild(form);
    fragment.appendChild(backBtn);
    
    formContainer.appendChild(fragment);
    formContainer.style.display = 'block';
    })

})