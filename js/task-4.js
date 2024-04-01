const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  let info = {};
  if (elements.email.value === "" || elements.password.value === "") {
    alert("Всі поля форми мають бути заповнені");
  } else {
    info = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };
    console.log(info);
    form.reset();
  }
}
