document.addEventListener("DOMContentLoaded", function () {
  const contactsForm = document.getElementById("contactForm");
  contactsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataFromContactsPage = {
      name: contactsForm.querySelector('input[type="text"]').value,
      email: contactsForm.querySelector('input[type="email"]').value,
      phone: contactsForm.querySelector('input[placeholder="Phone"]').value,
      checkbox: contactsForm.querySelector('input[type="checkbox"]').checked,
    };

    console.log(dataFromContactsPage);
    contactsForm.reset();
  });
});
