document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
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
        // Authentifier l'utilisateur via PocketBase
        const response = await fetch('http://localhost:8090/api/collections/Compte_etudiant/auth-with-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identity: email,
            password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // Stocker le token d'authentification
          localStorage.setItem('pb_auth', JSON.stringify(data));
          // Rediriger vers le dashboard ou la page d'accueil
          window.location.href = '/accueil';
        } else {
          const data = await response.json();
          console.error('Erreur:', data);
          errorDiv.textContent = data.message || 'Email ou mot de passe incorrect';
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
