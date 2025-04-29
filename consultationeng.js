
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
    document.getElementById('animalError').textContent = 'Please select the type of animal.';
    isValid = false;
    }

    if (!service) {
    document.getElementById('serviceError').textContent = 'Please select the service.';
    isValid = false;
    }

    if (!phone) {
    document.getElementById('phoneError').textContent = 'Please enter a phone number.';
    isValid = false;
    }

    if (!contactMethod) {
    document.getElementById('contactMethodError').textContent = 'Please select a convenient network for communication.';
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
