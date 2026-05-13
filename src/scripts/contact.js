// Contact form handler - sends message to PocketBase
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      status: 'nouveau', // nouveau, en_cours, resolu
    };

    try {
      // Envoyer le message à PocketBase
      const response = await fetch('http://localhost:8090/api/collections/Messages_contact/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}`);
      }

      // Afficher le message de succès
      successMessage.classList.remove('hidden');
      errorMessage.classList.add('hidden');
      contactForm.reset();

      // Masquer le message après 5 secondes
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);

      console.log('Message envoyé avec succès:', formData);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      errorMessage.textContent = 'Une erreur est survenue. Veuillez réessayer. ' + (error.message || '');
      errorMessage.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }
  });
}
