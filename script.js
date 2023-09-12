document.addEventListener("DOMContentLoaded", function() {
    const timeHeader = document.querySelector('.time-header');
    const daysContainer = document.querySelector('.days');

    // Ajoutez les heures dans l'en-tête du temps
    for (let i = 6; i < 23; i++) {
        const hourDiv = document.createElement('div');
        hourDiv.classList.add('cell-hours');
        hourDiv.textContent = `${i}h`;
        timeHeader.appendChild(hourDiv);
    }

    // Ajoutez les cellules pour chaque jour
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    jours.forEach(jour => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerHTML = `<div class="day-header">${jour}</div>`;
        
        // Ajoutez les cellules pour chaque heure
        for (let i = 6; i < 23; i++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');

        
            
            dayDiv.appendChild(cellDiv);
        }

        daysContainer.appendChild(dayDiv);
    });
});



function genererDiv() {
    // Récupérer les valeurs sélectionnées
    var couleur = document.getElementById("couleur").value;
    var contenu = document.getElementById("contenu").value;

    // Créer une nouvelle div
    var nouvelleDiv = document.createElement("div");
    nouvelleDiv.setAttribute('id', 'maDiv')


    // Appliquer la couleur choisie
    nouvelleDiv.style.backgroundColor = couleur;

    // Ajouter le contenu à la div
    nouvelleDiv.innerHTML = contenu;

    // Ajouter un bouton de suppression
    var boutonSuppression = document.createElement("button");
    boutonSuppression.innerText = "Supprimer";
    boutonSuppression.onclick = function() {
        document.body.removeChild(nouvelleDiv);
    };
    nouvelleDiv.appendChild(boutonSuppression);

    // Ajouter la div générée au document
    document.body.appendChild(nouvelleDiv);
     nouvelleDiv.addEventListener('mousedown', initResize, false);
}


let isResizing = false;
let originalHeight;
let originalY;

document.getElementById('maDiv').addEventListener('mousedown', initResize, false);

function initResize(e) {
  e.preventDefault();
  isResizing = true;
  originalHeight = document.getElementById('maDiv').offsetHeight;
  originalY = e.clientY;
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mouseup', stopResize, false);
}

function handleMouseMove(e) {
  if (isResizing) {
    const newHeight = originalHeight + (e.clientY - originalY);
    document.getElementById('maDiv').style.height = newHeight + 'px';
  }
}

function stopResize(e) {
  isResizing = false;
  document.removeEventListener('mousemove', handleMouseMove, false);
  document.removeEventListener('mouseup', stopResize, false);
}
