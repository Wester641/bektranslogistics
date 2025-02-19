document.addEventListener("DOMContentLoaded", function () {
  let success_message = document.getElementById("success_message");
  let checkbox_radio = document.querySelector('input[type="checkbox"]');
  let submit_button = document.querySelector("button[type='submit']");

  const form = document.querySelector(".request__form-body");

  if (checkbox_radio && submit_button) {
    let checkbox_value = checkbox_radio.checked;
    submit_button.disabled = !checkbox_value;

    checkbox_radio.addEventListener("change", function () {
      submit_button.disabled = !this.checked;
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataFromMainPage = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[placeholder="Phone"]').value,
      checkbox: form.querySelector('input[type="checkbox"]').checked,
    };

    console.log(dataFromMainPage);

    fetch("https://bektransgroup.com/backend/cpanel_mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFromMainPage),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (success_message) {
          success_message.innerHTML = data.status;
          success_message.className = "n-success";
          setTimeout(() => {
            success_message.innerHTML = null;
            success_message.className = "";
          }, 5000);
        } else {
          console.log(data.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    form.reset();

    if (submit_button) {
      submit_button.disabled = true;
    }
  });
});
