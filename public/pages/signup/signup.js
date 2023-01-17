/*formElement is either loginform or creatAccountForm

type is succes or error*/
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    //resetting the style of the two messages
    messageElement.classList.remove("form__message--success", "form__message--error");

    //here we add the style, but the style is based on the type
    messageElement.classList.add(`form__message--${type}`);
}

/* setting the message on the individual input field  */

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    /* we are starting with the input-field itself and then we are going to the parent 
    meaning the html-element that wraps the input-field
    and then we grap the div with the class called  form__input-error-message 
    */
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    // adding the style we have defined in the css for the form__input--error
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        /*preventdefault: so when you clcik on the link it is going to the actual page in the href
        using the preventdefault it is not going to redirect 
        */
        e.preventDefault();
        /*here we are adding the style called form-hidden when clicking on createAccount,
        so the loginForm will disapear bc we add the style form-hidden which hides the login-form*/
        loginForm.classList.add("form--hidden");
        /* and to show the createAccountForm we make it visible by removing the style that hides the form
        bc in the html the style that hides the createAccount form is active when first-time loading the page
        */
        createAccountForm.classList.remove("form--hidden");
    });

    //this one does the opposite of the code above
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    /*upon the submitting the login-form we can then grab the event-object  */
    loginForm.addEventListener("submit", e => {
        // this prevents the form from being submitted through a page refresh 
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    /*Here we are saying on every single input-field when the user takes their focus away aka
    when they clcik out of the input-field, we can do a few checks
    */

    document.querySelectorAll(".form__input").forEach(inputElement => {
        /* here blur means when user takes their focus off the actual input-field */
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});