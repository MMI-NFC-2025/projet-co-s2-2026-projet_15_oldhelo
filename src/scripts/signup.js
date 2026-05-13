document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');
  const errorDiv = document.getElementById('errorMessage');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (!email || !password) {
        errorDiv.textContent = 'Veuillez remplir tous les champs';
        errorDiv.classList.remove('hidden');
        return;
      }
      
      try {
        // Envoyer les données à PocketBase
        const response = await fetch('http://localhost:8090/api/collections/Compte_etudiant/records', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
            passwordConfirm: password,
          }),
        });

        if (response.ok) {
          // Rediriger vers la page de connexion
          window.location.href = '/connection';
        } else {
          const data = await response.json();
          console.error('Erreur:', data);
          errorDiv.textContent = data.message || 'Erreur lors de la création du compte';
          errorDiv.classList.remove('hidden');
        }
      } catch (error) {
        console.error('Erreur de requête:', error);
        errorDiv.textContent = 'Erreur de connexion au serveur. Assurez-vous que PocketBase est en cours d\'exécution sur http://localhost:8090';
        errorDiv.classList.remove('hidden');
      }
    });
  }
});
