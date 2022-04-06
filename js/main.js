// import Disk from './js/class/Disk.class.js'
// import { getRandomInteger, getRandomColor } from '../js/utilities'

// const canvas = document.getElementById('masterpiece');
// const ctx = canvas.getContext('2d');
// console.log('ctx -->', ctx);

let canvas;
let context;

// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMouseLocation(e) {
    e.preventDefault()

    const offset = canvas.getBoundingClientRect();
    const styles = window.getComputedStyle(canvas)
    
     const mousePosition = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
    };

    return mousePosition
}


// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
function onClickCanvas(e) {
    e.preventDefault();
    
    // obtenir la position de la souris
    const mousePosition = getMouseLocation(e);

    // générer des randoms sur la atille et les nombre
    const radius = getRandomInteger(15, 50);
    const color = getRandomColor();

    // créer un nouvel objet du Disk pour pouvoir l'utiliser ici
    const newdisk = new Disk();

    // le configurer avec les valeurs à prendre en compte
    newdisk.setColor(color);
    newdisk.setRadius(radius);
    newdisk.setPosition(mousePosition);

    // on dessine le disque
    newdisk.draw(context);
}


// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur 
document.addEventListener('DOMContentLoaded', () => {

    canvas = document.querySelector('#masterpiece');
    context = canvas.getContext('2d');
    
    canvas.addEventListener('click', onClickCanvas);
})