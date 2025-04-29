document.getElementById('consultationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const animalType = document.querySelector('input[name="animalType"]:checked');
  const service = document.querySelector('input[name="service"]:checked');
  const phone = document.getElementById('phone').value.trim();
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
  let isValid = true;

  document.getElementById('animalError').textContent = '';
  document.getElementById('serviceError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('contactMethodError').textContent = '';

  if (!animalType) {
    document.getElementById('animalError').textContent = 'Будь ласка, оберіть тип тварини.';
    isValid = false;
  }

  if (!service) {
    document.getElementById('serviceError').textContent = 'Будь ласка, оберіть послугу.';
    isValid = false;
  }

  if (!phone) {
    document.getElementById('phoneError').textContent = 'Будь ласка, введіть номер телефону.';
    isValid = false;
  }

  if (!contactMethod) {
    document.getElementById('contactMethodError').textContent = 'Будь ласка, оберіть зручну мережу для спілкування.';
    isValid = false;
  }

  if (isValid) {
    this.reset();
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
      document.getElementById('successMessage').style.display = 'none';
    }, 4000);
  }
});
