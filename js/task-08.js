const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
        return alert('Усі поля мають бути заповнені!');
    }
        console.log(`Email: ${mail}, Password: ${ password}`);
        event.currentTarget.reset();
}
