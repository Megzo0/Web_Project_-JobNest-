const contactForm = document.getElementById("contact-form");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const text = document.getElementById("text");
        contactForm.addEventListener("submit", (e) => {
            if (email.value == "" ||  username.value == "" || text.value == "") {
                alert("Please fill all the fields");
                e.preventDefault();
            }else{
                return true;
            }
});