let tileNumber = 1

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

    }
}/* else if (tileNumber === 97) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'XI';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 119) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'SA';
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === 134) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'BA';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === 145) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'ME';
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === 153) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`

        newCity.textContent = 'GE';
        parent.appendChild(newCity);
        tileNumber++
    } else if (tileNumber === ) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}` // give this a very high number?

        newCity.textContent = 'VE'
        parent.appendChild(newCity);
        tileNumber++

    } else if (tileNumber === ) {
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}` //give this a very high number?

        newCity.textContent = 'IA';
        parent.appendChild(newCity);
        tileNumber++
    }
} */
// For rolling any amount of dice

function rollDice(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function createTileRow() {

    let tileRowParent = document.querySelector('.firstRow');
    let row = document.createElement('div');
    row.classList.add('tileRow');

    tileRowParent.appendChild(row);
}

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
        createTileColumn()

        for (; tileNumber < 87; tileNumber++) {
            const parent = document.querySelector('.rightColumnPart')
            //const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            parent.appendChild(tile);
        }
    } else if (tileNumber === 88) {
        createTileColumn()

        for (; tileNumber < 97; tileNumber++) {
            const parent = document.querySelector('.rightColumn')
             container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            container.appendChild(tile);
        }
    }
}


function createTileColumn() {
    let tileColumnParent = document.querySelector('.rightColumn');
    let column = document.createElement('div');
    column.classList.add('rightColumnPart');

    tileColumnParent.appendChild(column);
}
function createOutline() {
    // this will create various empty div containers to shape the board
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
}
function create() {
    createOutline()
    while (tileNumber < 97) {
        createCity()

        createTiles()
    }
};