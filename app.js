// Fonction pour créer une div de livre
function creerCarteLivre(livre) {
    const div = document.createElement("div");
    div.className = "livre";

    div.innerHTML = `
      <h3>${livre.titre}</h3>
      <p><strong>Auteur:</strong> ${livre.auteur}</p>
      <p><strong>Date:</strong> ${livre.date}</p>
      <p><strong>Format:</strong> ${livre.format}</p>
      <p><strong>Langue:</strong> ${livre.langue}</p>
      <a href="lecteur.html?fichier=${encodeURIComponent(livre.lecture)}" target="_blank"><strong>Lire</strong></a>
    `;

    return div;
}

// Charger les livres depuis books.json
fetch("./books.json")
    .then(response => response.json())
    .then(data => {
        const bibliotheque = document.getElementById("bibliotheque");

        data.forEach(livre => {
            const carte = creerCarteLivre(livre);
            bibliotheque.appendChild(carte);
        });
    })
    .catch(error => console.error("Erreur de chargement des livres :", error));
    