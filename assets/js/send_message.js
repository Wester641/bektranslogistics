document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".request__form-body");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataFromMainPage = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[placeholder="Phone"]').value,
      checkbox: form.querySelector('input[type="checkbox"]').checked,
    };

    console.log(dataFromMainPage);
    form.reset();
  });
});
