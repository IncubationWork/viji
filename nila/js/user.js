const userCredentials = [
    {userId: 'user1', password:'password1'},
    {userId: 'user2', password:'password2'},
    {userId: 'user3', password:'password3'}
];
    // function to check user credentials
function verifyCredentials(userId,password){
    const isValidCredentials = userCredentials.some(cred => cred.userId === userId && cred.password === password);
   
    if(isValidCredentials) {
        window.location.href="dashboard.html"
        //return true;
    }else{
        alert ("Please enter a valid userid and password");
        //return false;
    }
}