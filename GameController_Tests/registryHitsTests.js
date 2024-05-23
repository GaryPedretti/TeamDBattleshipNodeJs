const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js")
const Ship = require("../GameController/ship.js");

describe('Given a ship with 5 positions', function () {

    var testShip= new Ship();
    testShip.name="Aircraft Carrier";
    testShip.size=5;
    for (let i = 1; i <= 5; i++) {
        testShip.addPosition(new position("A", i));
    }
    
  it('when hit all positions then ship is sunk', function () {
    for (let i = 1; i <= 5; i++) {
        testShip.registryHit(new position("A", i))
    }
    
    assert.ok(testShip.isSunk);
  });

  
});