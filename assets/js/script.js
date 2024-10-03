// Sélectionne tous les éléments avec la classe <panel>
const panels = document.querySelectorAll(".panel");

// Parcourt chaque classe <panel> et ajoute un écouteur d'événement au clic
panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    // Trouve l'élément actif actuel et lui retire la classe
    document.querySelector(".active")?.classList.remove("active");

    // Pour l'ajouter a celui qui est cliqué
    panel.classList.add("active");
  })
);

/* Script.js */
