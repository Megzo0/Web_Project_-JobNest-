form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(username.value == "" || email.value == "" || password.value == "" || conPassword.value == ""){
        alert("Please fill all the fields");
    }
    else if(password.value!= conPassword.value){
        alert("Passwords do not match");
    }
});