class Ship {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
        this.positions = [];
        this.hits=[];
        this.isSunk=false;
    }

    addPosition(position) {
        this.positions.push(position);
    }

   
    registryHit(position) {
        const positionString = position.toString();
        if (this.positions.some(pos => pos.toString() === positionString) &&
            !this.hits.some(hit => hit.toString() === positionString)) {
            this.hits.push(position);
            this.checkIfSunk();
            return true;
        }
        return false;
    }

    checkIfSunk() {
        if (this.positions.every(pos => this.hits.some(hit => hit.toString() === pos.toString()))) {
            this.isSunk = true;
        }
    }
}

module.exports = Ship;