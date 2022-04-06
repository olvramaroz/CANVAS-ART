// export default 

class Disk {
    
    constructor() {
        this.color = 'green'
        this.radius = 10
        this.position = {
            x: 12,
            y: 20
        }
    }

    /*
        Declarer les getter et setter en rapport avec les propriétés du constructor
        
        Getters => accès aux propriétés
        Setters => change ces dites propriétés (qui nécessite donc une value en argument)

    */

    setColor(color) {
        this.color = color
    }

    setRadius(radius) {
        this.radius = radius
    }

    setPosition(position) {
        this.position = position
    }

    // une derniere méthode draw(argument à trouver)
    draw(context) {
        context.save();

        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = this.color

        context.save();
    }
}