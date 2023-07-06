const container = document.getElementById('container');
const loginContainer = document.getElementById('loginbox');

    //create a h1 tag
const heading = document.createElement('h1');
heading.textContent = 'LOGIN';
loginContainer.appendChild(heading);

    //create a h3 tag
const subHead = document.createElement('h3');
subHead.textContent = 'welcome back! please login to your account.';
loginContainer.appendChild(subHead);

    //create a input container and input field
const userNameField = document.createElement('div');
loginContainer.appendChild(userNameField);

const userNameInput = document.createElement('input');
userNameInput.type = "text";
userNameInput.placeholder = "username" 
userNameField.appendChild(userNameInput);

const passwordField = document.createElement('div');
loginContainer.appendChild(passwordField);

const passwordInput = document.createElement('input');
passwordInput.type = "password";
passwordInput.placeholder = "password" 
passwordField.appendChild(passwordInput);

const errorMsg = document.createElement('div');
errorMsg.id = "error"
passwordField.appendChild(errorMsg);
errorMsg.style.display = "none";

/*const errorSymbol = document.createElement("span");
errorMsg.appendChild(errorSymbol);
errorSymbol.style.display = "none";
errorSymbol.id = "exinCircle"*/


    //create button
const loginButton = document.createElement('button');
loginButton.textContent = 'login'
loginButton.id = "submit"
loginContainer.appendChild(loginButton);

    //function for login button click event
function clickLogin(){
    const userNameInputValue = userNameInput.value.trim();
    const passwordInputValue = passwordInput.value.trim();
    if((userNameInputValue === "") || (passwordInputValue === "")){
       // errorSymbol.innerText = '\u20DD';
        //errorSymbol.style.cssText = "display:block; color:red;";
        errorMsg.innerText = "Input fields are cannot be blank"
        errorMsg.style.cssText="display:block; color:red;";
    }else if (userNameInputValue !== "" && passwordInputValue !== ""){
        verifyCredentials(userNameInputValue,passwordInputValue);
    }
}
    //create userpass
const userPass = document.createElement('div');
userPass.id = 'userPass'
loginContainer.appendChild(userPass);


    //create newuser
const newUser = document.createElement('div');
newUser.id = 'newUser';
newUser.textContent = 'New user'
userPass.appendChild(newUser);

    //create forgotpassword
const forgot = document.createElement('div');
forgot.id = 'pass';
forgot.textContent = 'Forgot password'
userPass.appendChild(forgot);

    // addEventlisener click function
loginButton.addEventListener('click', clickLogin);

newUser.addEventListener('click', function(){
    window.location.href = "newuser.html";  

})

