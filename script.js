// ===== Demo 1: a button changes content =====
const specialButton = document.querySelector("#specialButton");
const specialMessage = document.querySelector("#specialMessage");

specialButton.addEventListener("click", function () {
  specialMessage.textContent = "Tomato soup";
});

// ===== Demo 2: typing changes a style =====
const guestName = document.querySelector("#guestName");
const box = document.querySelector("#box");

guestName.addEventListener("input", function () {
  const hasText = guestName.value.trim() !== "";
  box.classList.toggle("active", hasText);
});

// ===== Demo 3: form validation (one block per field) =====
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

const nameField = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const emailField = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const messageField = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formStatus.textContent = "";
  let firstInvalid = null;

  if (nameField.value.trim() === "") {
    nameError.textContent = "Enter your name.";
    nameField.setAttribute("aria-invalid", "true");
    firstInvalid = nameField;
  } else {
    nameError.textContent = "";
    nameField.setAttribute("aria-invalid", "false");
  }

  if (emailField.value.trim() === "") {
    emailError.textContent = "Enter your email address.";
    emailField.setAttribute("aria-invalid", "true");
    if (firstInvalid === null) {
      firstInvalid = emailField;
    }
  } else {
    emailError.textContent = "";
    emailField.setAttribute("aria-invalid", "false");
  }

  if (messageField.value.trim() === "") {
    messageError.textContent = "Enter a message.";
    messageField.setAttribute("aria-invalid", "true");
    if (firstInvalid === null) {
      firstInvalid = messageField;
    }
  } else {
    messageError.textContent = "";
    messageField.setAttribute("aria-invalid", "false");
  }

  if (firstInvalid !== null) {
    firstInvalid.focus();
  } else {
    formStatus.textContent = "Checks passed. Demo only: nothing sent.";
  }
});

// Clear a field's error as soon as the visitor starts fixing it.
nameField.addEventListener("input", function () {
  nameError.textContent = "";
  nameField.setAttribute("aria-invalid", "false");
});
emailField.addEventListener("input", function () {
  emailError.textContent = "";
  emailField.setAttribute("aria-invalid", "false");
});
messageField.addEventListener("input", function () {
  messageError.textContent = "";
  messageField.setAttribute("aria-invalid", "false");
});

// ===== Demo 4: a list that grows =====
const itemInput = document.querySelector("#itemInput");
const addItem = document.querySelector("#addItem");
const menuList = document.querySelector("#menuList");

addItem.addEventListener("click", function () {
  const text = itemInput.value.trim();
  if (text === "") {
    itemInput.focus();
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  menuList.appendChild(li);
  itemInput.value = "";
  itemInput.focus();
});
