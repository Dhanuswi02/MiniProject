const termsBtn = document.getElementById('terms-btn');
const privacyBtn = document.getElementById('privacy-btn');
const termsSection = document.getElementById('terms-section');
const privacySection = document.getElementById('privacy-section');

termsBtn.addEventListener('click', () => {
  termsSection.classList.remove('hidden');
  privacySection.classList.add('hidden');
  termsBtn.classList.add('active');
  privacyBtn.classList.remove('active');
});

privacyBtn.addEventListener('click', () => {
  privacySection.classList.remove('hidden');
  termsSection.classList.add('hidden');
  privacyBtn.classList.add('active');
  termsBtn.classList.remove('active');
});

// Show Terms of Service by default
termsSection.classList.remove('hidden');
