class Ship {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
        this.positions = [];
        this.hits = [];
        this.isSunk = false;
    }

    addPosition(position) {
        this.positions.push(position);
    }

    setHit(position) {
        this.hits.push(position);
        this.isSunk = this.hits.length === this.size;
    }
}

module.exports = Ship;