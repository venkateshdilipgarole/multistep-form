const form = document.getElementById("multiStepForm");
const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const backBtns = document.querySelectorAll(".back-btn");
const progressSteps = document.querySelectorAll(".step");
const summaryDiv = document.querySelector(".summary");

let currentStep = 0;
let formData = JSON.parse(localStorage.getItem("formData")) || {};


document.addEventListener("DOMContentLoaded", () => {
  if (Object.keys(formData).length > 0) {
    Object.entries(formData).forEach(([key, value]) => {
      const field = form.querySelector(`[name=${key}]`);
      if (field) field.value = value;
    });
  }
});

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!validateStep(currentStep)) return;

    saveFormData();
    currentStep++;
    updateFormSteps();
  });
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateFormSteps();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
  localStorage.removeItem("formData");
  form.reset();
  currentStep = 0;
  formData = {};
  updateFormSteps();
});

function validateStep(step) {
  const currentFields = formSteps[step].querySelectorAll("input, select, textarea");
  let valid = true;

  currentFields.forEach((field) => {
    if (!field.checkValidity()) {
      field.classList.add("invalid");
      valid = false;
    } else {
      field.classList.remove("invalid");
    }
  });

  return valid;
}

function saveFormData() {
  const inputs = formSteps[currentStep].querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });
  localStorage.setItem("formData", JSON.stringify(formData));
}

function updateFormSteps() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
    progressSteps[index].classList.toggle("active", index <= currentStep);
  });

  if (currentStep === formSteps.length - 1) {
    generateSummary();
  }
}

function generateSummary() {
  summaryDiv.innerHTML = `
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Date of Birth:</strong> ${formData.dob}</p>
    <p><strong>Gender:</strong> ${formData.gender}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Address:</strong> ${formData.address}</p>
  `;
}
