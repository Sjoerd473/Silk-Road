let tileNumber = 1

window.addEventListener('DOMContentLoaded', create);



function createOutline() {

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
        newCityOne.dataset.tile = `300` // give this a very high number?

        newCityOne.textContent = 'VE'
        parent.insertBefore(newCityOne, parent.lastElementChild);




        let newCityTwo = document.createElement('div');
        newCityTwo.classList.add('leftCity')
        newCityTwo.dataset.tile = `200` //give this a very high number?

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

function createArrows() {
    // CO to GE
    new LeaderLine(
        document.querySelector(`[data-tile='1']`),
        document.querySelector(`[data-tile='153']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });

    // CO to TR
    new LeaderLine(
        document.querySelector(`[data-tile='1']`),
        document.querySelector(`[data-tile='10']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });

    // CO to VE
    new LeaderLine(
        document.querySelector(`[data-tile='1']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });

    // TR to VE
    new LeaderLine(
        document.querySelector(`[data-tile='10']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });



    // BU to BA
    new LeaderLine(
        document.querySelector(`[data-tile='32']`),
        document.querySelector(`[data-tile='134']`),
        {

            endPlug: 'arrow1'
        });
    // KA to SA
    new LeaderLine(
        document.querySelector(`[data-tile='58']`),
        document.querySelector(`[data-tile='119']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
    // CA to IA
    new LeaderLine(
        document.querySelector(`[data-tile='73']`),
        document.querySelector(`[data-tile='200']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
    // CA to SH
    new LeaderLine(
        document.querySelector(`[data-tile='73']`),
        document.querySelector(`[data-tile='87']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
    // SH to IA
    new LeaderLine(
        document.querySelector(`[data-tile='87']`),
        document.querySelector(`[data-tile='200']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
    // BA to TR
    new LeaderLine(
        document.querySelector(`[data-tile='134']`),
        document.querySelector(`[data-tile='10']`),
        {

            endPlug: 'arrow1'
        });
    // ME to GE
    new LeaderLine(
        document.querySelector(`[data-tile='145']`),
        document.querySelector(`[data-tile='153']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
    // GE to VE
    new LeaderLine(
        document.querySelector(`[data-tile='153']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
};

function create() {
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

function rollDice(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
}





function movePlayer() {
    const boardTop = Array.from(document.querySelectorAll('.firstRow > [data-tile], .firstRow > .tileRow > [data-tile]'))
    const boardSideRight = Array.from(document.querySelectorAll('.rightColumnPartTop > [data-tile], [data-tile ="87"], .rightColumnPartBottom > [data-tile]'));
    const boardBottom = Array.from(document.querySelectorAll('.thirdRow > [data-tile], .thirdRow > .tileRow > [data-tile]'));
    const boardSideLeft = Array.from(document.querySelectorAll('.leftColumn > [data-tile]'));

    const allTiles = boardTop.concat(boardSideRight, boardBottom, boardSideLeft);



    const moves = rollDice(1, 6);
    const position = allTiles[activePlayer.position];
    position.classList.add('activePlayer')

    if (activePlayer.position <= 5 || activePlayer.position >= 158) {
        console.log('boop')
        const movement = allTiles.slice(activePlayer.position - moves, activePlayer.position + moves + 1);
        removeItemOnce(movement, position);
        movement.forEach((tile) => {
            tile.classList.add('movement')
            tile.addEventListener('click', (e) => {
                activePlayer.position = allTiles.indexOf(e.target);
                e.target.classList.add('activePlayer');
                position.classList.remove('activePlayer');
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
                e.target.classList.add('activePlayer');
                position.classList.remove('activePlayer');
                movement.forEach((tile) => { tile.classList.remove('movement') })
            });
        })

    }
     //for when the position is too close to the start or end of the board
    /*if (activePlayer.position <= 5 || activePlayer.position >= 158) {
        allTiles.unshift(allTiles.slice(157));
        allTiles.push(allTiles.slice(0,6))
        console.log('boop')
*/


    /*  one = allTiles.indexOf(position);
        slice rollDice above and below one
        highlight these by adding a css class
        add an eventlistner for clicks that moves the player ie updates their position.
    */



    //const position = allTiles[`${playerOne.position}`- 1]

}
//A player object for testing.

const activePlayer = { name: 'Dave', moves: 0, position: 9 };


// allTiles[`${playerOne.position}`- 1] // gets the position of the player on the board
//include more parameters in the function declaration when needed, name to equal some input value
function Player(name) {
    this.name = name;
    this.moves = 0;
    this.position = 0;

};

// position in index of the array, not on the board