/*
    Générer un random integer number avec les fonctions
    Math.floor() pour avoir un entier et Math.random()
    avec une certaine valeur de départ et un une valeur maximale incluse

    @returns a random int between
    @param min inclusive
    @param max inclusive

*/

function getRandomInteger(min, max) {

    return min + Math.floor(Math.random() * (max - min + 1));
}


/*
    Générer des couleurs RGBA en random integer number entre zéro et 256,
    car nous souhaitons inclure la valeur max d'une RGBA qui est de 255

    Inclure une opacity au hasard pour qu'on ait un joli tableau

*/

function getRandomColor() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const opacity = Math.random();

    // return 'rgba(`${red}, ${green}, ${blue}, ${opacity}`)'
    // return 'rgba('red'+','+'green'+','+'blue'+','+'opacity')'
    return 'rgba('+ red +', '+ green +', '+ blue +', '+ opacity +')';
}


