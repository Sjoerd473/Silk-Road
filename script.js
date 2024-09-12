let tileNumber = 1
let allTiles = [];
let playerArray = [];
let activePlayer

document.querySelector('#startGame').addEventListener('click', create);

document.querySelectorAll('.playerButtons').forEach((button) => {
    button.addEventListener('click', () => {
        let value = Number(document.querySelector('input[name="players"]:checked').value)
        let parent = document.querySelector('.fieldBox');
        parent.replaceChildren()
        let j = 1
        for (i = 0; i < value; i++) {
            let field = document.createElement('input');
            field.classList.add('nameInput');
            field.setAttribute('type', 'text');
            field.setAttribute('value', `Player${i+1} name`);
            field.id = ('player' + j);
            j++
            parent.appendChild(field);
        }
    })

})
// window.addEventListener('DOMContentLoaded', create);

//remove all the existing html elements when loading the board


function createOutline() {

    document.querySelector('body').replaceChildren()

    let board = document.createElement('div');
    board.classList.add('board');
    let boardParent = document.querySelector('body');
    boardParent.insertBefore(board, boardParent.firstElementChild);

    let firstRow = document.createElement('div');
    firstRow.classList.add('firstRow');
    board.appendChild(firstRow);

    let secondRow = document.createElement('div');
    secondRow.classList.add('secondRow');
    board.appendChild(secondRow);

    let thirdRow = document.createElement('div');
    thirdRow.classList.add('thirdRow');
    board.appendChild(thirdRow);

    let rightColumn = document.createElement('div');
    rightColumn.classList.add('rightColumn');
    secondRow.appendChild(rightColumn);

    let rollDie = document.createElement('button');
    rollDie.classList.add('rollDie');
    rollDie.textContent = 'Roll the dice!'
    rollDie.addEventListener('click', movePlayer);

    board.appendChild(rollDie);

    let endButton = document.createElement('button');
    endButton.classList.add('endTurnButton');
    endButton.textContent = 'End my turn';
    endButton.addEventListener('click', endTurn)

    board.appendChild(endButton);
};



function createCity() {

    if (tileNumber === 1) {
        //create first city

        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'CO';
        parent.appendChild(newCity);

        tileNumber++
    } else if (tileNumber === 10) {
        //create second city
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'TR';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 32) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'BU';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 58) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'KA';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 73) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'CA';
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === 87) {
        let parent = document.querySelector('.rightColumn');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'SH';
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === 97) {
        let parent = document.querySelector('.thirdRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'XI';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 119) {
        let parent = document.querySelector('.thirdRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'SA';
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === 134) {
        let parent = document.querySelector('.thirdRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'BA';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 145) {
        let parent = document.querySelector('.thirdRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'ME';
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === 153) {
        let parent = document.querySelector('.thirdRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'GE';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 165) {
        let parent = document.querySelector('.secondRow');
        let sibling = document.querySelector('.rightColumn')
        let newCityOne = document.createElement('div');
        newCityOne.classList.add('rightCity')
        newCityOne.dataset.tile = `300`

        newCityOne.textContent = 'VE'
        parent.insertBefore(newCityOne, parent.lastElementChild);




        let newCityTwo = document.createElement('div');
        newCityTwo.classList.add('leftCity')
        newCityTwo.dataset.tile = `200`

        newCityTwo.textContent = 'IA';
        parent.insertBefore(newCityTwo, newCityOne);;


    }
};

function createTileRow() {

    let tileRowParent = document.querySelector('.firstRow');
    let row = document.createElement('div');
    row.classList.add('tileRow');

    tileRowParent.appendChild(row);
};

function createTileRowBottom() {

    let tileRowParent = document.querySelector('.thirdRow');
    let row = document.createElement('div');
    row.classList.add('tileRow');

    tileRowParent.appendChild(row);
};
//combine these into a single function that takes a parameter to decide what column to make
function createTileColumnRight() {
    let tileColumnParent = document.querySelector('.rightColumn');
    let column = document.createElement('div');
    column.classList.add('rightColumnPart');

    tileColumnParent.appendChild(column);
};
function createTileColumnLeft() {
    let tileColumnParent = document.querySelector('.secondRow');
    let column = document.createElement('div');
    column.classList.add('leftColumn');

    tileColumnParent.appendChild(column);
};

function createTiles() {

    if (tileNumber === 2) {
        createTileRow()

        for (; tileNumber < 10; tileNumber++) {
            const parent = document.querySelector('.tileRow')

            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            parent.appendChild(tile);
        }
    } else if (tileNumber === 11) {
        createTileRow()

        for (; tileNumber < 32; tileNumber++) {
            const parent = document.querySelector('.firstRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 33) {
        createTileRow()

        for (; tileNumber < 58; tileNumber++) {
            const parent = document.querySelector('.firstRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 59) {
        createTileRow()

        for (; tileNumber < 73; tileNumber++) {
            const parent = document.querySelector('.firstRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 74) {
        createTileColumnRight()

        for (; tileNumber < 87; tileNumber++) {
            const parent = document.querySelector('.rightColumnPart')
            parent.classList.add('rightColumnPartTop')
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            parent.appendChild(tile);
        }
    } else if (tileNumber === 88) {
        createTileColumnRight()

        for (; tileNumber < 97; tileNumber++) {
            const parent = document.querySelector('.rightColumn')
            const container = parent.lastElementChild
            container.classList.add('rightColumnPartBottom')
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 98) {
        createTileRowBottom()

        for (; tileNumber < 119; tileNumber++) {
            const parent = document.querySelector('.thirdRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 120) {
        createTileRowBottom()

        for (; tileNumber < 134; tileNumber++) {
            const parent = document.querySelector('.thirdRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 135) {
        createTileRowBottom()

        for (; tileNumber < 145; tileNumber++) {
            const parent = document.querySelector('.thirdRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 146) {
        createTileRowBottom()

        for (; tileNumber < 153; tileNumber++) {
            const parent = document.querySelector('.thirdRow')
            const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    } else if (tileNumber === 154) {
        createTileColumnLeft()

        for (; tileNumber < 165; tileNumber++) {
            const parent = document.querySelector('.leftColumn')

            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            parent.appendChild(tile);
        }
    }
};
//lifeOffset can be used to offset the middle label text
//pathLabel to show a label along the path
//make the arrows show up when hovering over a city
function createArrows() {
    // CO to GE
    new LeaderLine(
        document.querySelector(`[data-tile='1']`),
        document.querySelector(`[data-tile='153']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,
            path: 'arc',
            color: 'blue'
        });

    // CO to TR
    new LeaderLine(
        document.querySelector(`[data-tile='1']`),
        document.querySelector(`[data-tile='10']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'bottom',
            endSocket: 'bottom',
            size: 3,
            dash: true,

            color: 'blue'
        });

    // CO to VE
    new LeaderLine(
        document.querySelector(`[data-tile='1']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,

            color: 'blue'
        });

    // TR to VE
    new LeaderLine(
        document.querySelector(`[data-tile='10']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,
            path: 'arc',
            color: 'blue'
        });



    // BU to BA
    new LeaderLine(
        document.querySelector(`[data-tile='32']`),
        document.querySelector(`[data-tile='134']`),
        {

            endPlug: 'arrow3',
            size: 3,
            dash: true,
            color: 'green',
        });
    // KA to SA
    new LeaderLine(
        document.querySelector(`[data-tile='58']`),
        document.querySelector(`[data-tile='119']`),
        {
            endPlug: 'arrow3',
            size: 3,
            dash: true,
            color: 'green',
        });
    // CA to IA
    new LeaderLine(
        document.querySelector(`[data-tile='73']`),
        document.querySelector(`[data-tile='200']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,

            color: 'blue'
        });
    // CA to SH
    new LeaderLine(
        document.querySelector(`[data-tile='73']`),
        document.querySelector(`[data-tile='87']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'left',
            endSocket: 'left',
            size: 3,
            dash: true,

            color: 'blue'
        });
    // SH to IA
    new LeaderLine(
        document.querySelector(`[data-tile='87']`),
        document.querySelector(`[data-tile='200']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,

            color: 'blue'
        });
    // BA to TR
    new LeaderLine(
        document.querySelector(`[data-tile='134']`),
        document.querySelector(`[data-tile='10']`),
        {

            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,

            color: 'blue'
        });
    // ME to GE
    new LeaderLine(
        document.querySelector(`[data-tile='145']`),
        document.querySelector(`[data-tile='153']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'top',
            endSocket: 'top',
            size: 3,
            dash: true,

            color: 'blue'
        });
    //ME to SH
    new LeaderLine(
        document.querySelector(`[data-tile='145']`),
        document.querySelector(`[data-tile='87']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'top',
            endSocket: 'left',
            size: 3,
            dash: true,

            color: 'blue'
        });
    // GE to VE
    new LeaderLine(
        document.querySelector(`[data-tile='153']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',

            size: 3,
            dash: true,

            color: 'blue'
        });
};
//the name needs to be an input from a field, not hardcoded
function createPlayers() {
    let count = Number(document.querySelector('input[name="players"]:checked').value)
    if (count === 2) {
        let name1 = document.getElementById('player1').value
        let name2 = document.getElementById('player2').value
        switch (count) {
            case 2:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                break;
            case 3:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                new Player(name3, 'playerThree');
                break;
            case 4:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                new Player(name3, 'playerThree');
                new Player(name4, 'playerFour');
                break;
        }
    } else if (count === 3) {
        let name1 = document.getElementById('player1').value
        let name2 = document.getElementById('player2').value
        let name3 = document.getElementById('player3').value
        switch (count) {
            case 2:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                break;
            case 3:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                new Player(name3, 'playerThree');
                break;
            case 4:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                new Player(name3, 'playerThree');
                new Player(name4, 'playerFour');
                break;
        }

    } else if (count === 4) {
        let name1 = document.getElementById('player1').value
        let name2 = document.getElementById('player2').value
        let name3 = document.getElementById('player3').value
        let name4 = document.getElementById('player4').value

        switch (count) {
            case 2:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                break;
            case 3:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                new Player(name3, 'playerThree');
                break;
            case 4:
                new Player(name1, 'playerOne');
                new Player(name2, 'playerTwo');
                new Player(name3, 'playerThree');
                new Player(name4, 'playerFour');
                break;
    }

    }
}

function create() {
    createPlayers()
    activePlayer = playerArray[0]
    createOutline()
    while (tileNumber < 165) {
        createCity();

        createTiles();
    }
    if (tileNumber === 165) {
        createCity();
        createArrows();
    }
};



function rollDice(number) {
    let total = [];
    for (let i = 0; i < number; i++) {
        total.push(Math.ceil(Math.random() * 6));


    }
    return total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,

    );
}


function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
}





function movePlayer() {
    document.querySelector('.rollDie').removeEventListener('click', movePlayer);

    




    const moves = rollDice(1);
    const position = allTiles[activePlayer.position];
    

    if (activePlayer.position <= 5) {

        const extraTiles = allTiles.slice(allTiles.length - 6).reverse();

        let modifiedTiles = allTiles.toReversed();
        modifiedTiles = modifiedTiles.concat(extraTiles).reverse();

        const movement = modifiedTiles.slice((activePlayer.position + 6) - moves, (activePlayer.position + 6) + moves + 1);


        removeItemOnce(movement, position);
        movement.forEach((tile) => {
            tile.classList.add('movement')
            tile.addEventListener('click', (e) => {
                activePlayer.position = allTiles.indexOf(e.target);
                e.target.classList.add(activePlayer.class);
                position.classList.remove(activePlayer.class);
                movement.forEach((tile) => { tile.classList.remove('movement') })
            });
        })
    } else if (activePlayer.position >= 158) {

        const modifiedTiles = allTiles.concat(allTiles.slice(0, 6))

        const movement = modifiedTiles.slice(activePlayer.position - moves, activePlayer.position + moves + 1);

        removeItemOnce(movement, position);
        movement.forEach((tile) => {
            tile.classList.add('movement')
            tile.addEventListener('click', (e) => {
                activePlayer.position = allTiles.indexOf(e.target);

                e.target.classList.add(activePlayer.class);
                position.classList.remove(activePlayer.class);
                movement.forEach((tile) => { tile.classList.remove('movement') })
            });
        })
    } else {
        const movement = allTiles.slice(activePlayer.position - moves, activePlayer.position + moves + 1);
        removeItemOnce(movement, position);
        movement.forEach((tile) => {
            tile.classList.add('movement')
            tile.addEventListener('click', (e) => {
                activePlayer.position = allTiles.indexOf(e.target);
                e.target.classList.add(activePlayer.class);
                position.classList.remove(activePlayer.class);
                movement.forEach((tile) => { tile.classList.remove('movement') })
            });
        })

    }


}

function endTurn() {
    if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
        activePlayer = playerArray[0];
    } else {
        activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
        ;
    } document.querySelector('.rollDie').addEventListener('click', movePlayer);
}

function chooseStart() {

    const boardTop = Array.from(document.querySelectorAll('.firstRow > [data-tile], .firstRow > .tileRow > [data-tile]'))
    const boardSideRight = Array.from(document.querySelectorAll('.rightColumnPartTop > [data-tile], [data-tile ="87"], .rightColumnPartBottom > [data-tile]'));
    const boardBottom = Array.from(document.querySelectorAll('.thirdRow > [data-tile], .thirdRow > .tileRow > [data-tile]'));
    const boardSideLeft = Array.from(document.querySelectorAll('.leftColumn > [data-tile]'));

    allTiles = boardTop.concat(boardSideRight, boardBottom, boardSideLeft);

    let clockwise = Array.from(document.querySelectorAll('.city'));
    let counterClockwise = Array.from(document.querySelectorAll('.city')).reverse();
    let movement = rollDice(1);

    if (movement === 6) {
    
    let optionOne = clockwise[movement - 1];
    optionOne.classList.add('movement');
    optionOne.addEventListener('click', function (e) {
        optionOne.removeEventListener('click', (e))
        
        activePlayer.position = allTiles.indexOf(e.target);
        e.target.classList.add(activePlayer.class);
        optionOne.classList.remove('movement');
        
        if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
            activePlayer = playerArray[0];
        } else {
            activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
            ;
        }})
    } else{ let optionOne = clockwise[movement - 1];
        optionOne.classList.add('movement');
        optionOne.addEventListener('click', function (e) {
            optionOne.removeEventListener('click', (e))
            optionTwo.removeEventListener('click', (e));
            activePlayer.position = allTiles.indexOf(e.target);
            e.target.classList.add(activePlayer.class);
            optionOne.classList.remove('movement');
            optionTwo.classList.remove('movement');
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }})
        let optionTwo = counterClockwise[movement - 1];
        optionTwo.classList.add('movement');
        optionTwo.addEventListener('click', function (e) {
            optionOne.removeEventListener('click', (e))
            optionTwo.removeEventListener('click', (e));
            activePlayer.position = allTiles.indexOf(e.target);
            e.target.classList.add(activePlayer.class);
            optionOne.classList.remove('movement');
            optionTwo.classList.remove('movement');
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
        }
        
    })}

    
}

/*function something() {
    let optionOne = clockwise[movement - 1];
    optionOne.classList.add('movement');
    optionOne.addEventListener('click', function (e) {
        optionOne.removeEventListener('click', (e))
        optionTwo.removeEventListener('click', (e));
        activePlayer.position = allTiles.indexOf(e.target);
        e.target.classList.add(activePlayer.class);
        optionOne.classList.remove('movement');
        optionTwo.classList.remove('movement');
        if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
            activePlayer = playerArray[0];
        } else {
            activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
            ;
        }})
} */


// allTiles[`${playerOne.position}`- 1] // gets the position of the player on the board
//include more parameters in the function declaration when needed, name to equal some input value
function Player(name, identifier) {
    this.name = name;
    this.number = playerArray.length + 1
    this.money = 10
    this.position = 0;
    this.class = identifier;
    playerArray.push(this);
};

// position in index of the array, not on the board

// end turn button: activePlayer = playerArray.indexOf(activePlayer + 1)