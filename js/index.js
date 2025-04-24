const card = document.querySelector(".card");
const form = document.getElementById("form");
const dismissBtn = document.querySelector(".dismiss__button");
const emailInput = document.getElementById("email");
const userEmail = document.getElementById("user-email");
const errorEmail = document.querySelector(".form__email__error");

const subscription = document.querySelector(".subscription");

function formSuccesFull(){
    subscription.classList.add("active");
    card.classList.add("success");
}

function validateEmail(email){
    return String(email).toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;

    if(validateEmail(email)){
        formSuccesFull();
        userEmail.innerHTML = email;
        emailInput.value = "";

        errorEmail.classList.remove("active");
        emailInput.classList.remove("active");
    } else {
        errorEmail.classList.add("active");
        emailInput.classList.add("active");
    }
});

dismissBtn.addEventListener("click", (e) => {
    card.classList.remove("success");
    subscription.classList.remove("active");
});
