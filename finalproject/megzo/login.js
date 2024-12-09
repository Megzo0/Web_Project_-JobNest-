const Login = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

Login.addEventListener("submit", (e) => {
    if (email.value == "" || password.value == "") {
        alert("Please fill all the fields");
        e.preventDefault(); 
    } else if (password.value.length < 8) {
        alert("Password should not be less than 8 characters");
        e.preventDefault(); 
        return false; 
    }
});