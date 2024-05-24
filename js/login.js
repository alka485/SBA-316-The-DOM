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