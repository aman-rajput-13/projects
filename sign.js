
    

document.getElementById('signInForm').addEventListener('submit', function(event) {
event.preventDefault(); 

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const message = document.getElementById('message');





if (email === '' || password === '') {
    message.textContent = 'Please fill in all fields.';
} else {
    message.textContent = 'Sign In successful!'; 
    message.style.color = 'white';
    
}
});
