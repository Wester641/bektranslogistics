// document.addEventListener("DOMContentLoaded", function () {
//   const contactsForm = document.getElementById("contactForm");
//   contactsForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const dataFromContactsPage = {
//       name: contactsForm.querySelector('input[type="text"]').value,
//       email: contactsForm.querySelector('input[type="email"]').value,
//       phone: contactsForm.querySelector('input[placeholder="Phone"]').value,
//       checkbox: contactsForm.querySelector('input[type="checkbox"]').checked,
//     };

//     fetch("https://bektransgroup.com/backend/cpanel_mail.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataFromContactsPage),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//     contactsForm.reset();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let success_message = document.getElementById("success_message");
  let checkbox_radio = document.querySelector('input[type="checkbox"]');
  let submit_button = document.querySelector("button[type='submit']");

  const contactsForm = document.getElementById("contactForm");

  // if (checkbox_radio && submit_button) {
  //   let checkbox_value = checkbox_radio.checked;
  //   submit_button.disabled = !checkbox_value;

  //   checkbox_radio.addEventListener("change", function () {
  //     submit_button.disabled = !this.checked;
  //   });
  // }

  contactsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataFromContactsPage = {
      name: contactsForm.querySelector('input[type="text"]').value,
      email: contactsForm.querySelector('input[type="email"]').value,
      phone: contactsForm.querySelector('input[placeholder="Phone"]').value,
      checkbox: contactsForm.querySelector('input[type="checkbox"]').checked,
    };

    console.log(dataFromContactsPage);

    fetch("https://bektransgroup.com/backend/cpanel_mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFromContactsPage),
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

    contactsForm.reset();

    // if (submit_button) {
    //   submit_button.disabled = true;
    // }
  });
});
