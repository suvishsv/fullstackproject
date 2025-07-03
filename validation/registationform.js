const form = document.querySelector('#form');
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const cPassword= document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
   
    if(!validateInputs()){
         e.preventDefault();
    }
    else
    {
        // Redirect to another HTML file, e.g., "success.html"
        window.location.href = "success.html";
        e.preventDefault();
    } // Prevent default form submission if you want only JS navigation
});



function validateInputs(){
    const usernameVal =username.value.trim();
    const emailVal =email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cPassword.value.trim();
    let success = true;

    if(usernameVal === ''){
        success = false;
        setError(username, 'Username is required');
    }
    else{
        setsuccess(username);
    }

    if(emailVal === ''){
        success = false;
        setError(email, "Email is required");
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email, "Email is not valid");
    }
    else{
        setsuccess(email);
    }


    if(passwordVal === ''){
        success = false;
        setError(password, "Password is required");
    }
    else if(passwordVal.length < 8){
        success = false;
        setError(password, "Password must be at least 8 characters");
    }
    else{
        setsuccess(password);
    }


    if(cpasswordVal === ''){
        success = false;
        setError(cPassword, "Confirm Password is required");
    }
    else if(cpasswordVal !== passwordVal){
        success = false;
        setError(cPassword, "Passwords do not match");
    }
    else{
        setsuccess(cPassword);
    }

    return success;
    

}

function setError(element, message){
    const inputGroup= element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText= message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}



function setsuccess(element){
    const inputGroup= element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText= '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail= (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}