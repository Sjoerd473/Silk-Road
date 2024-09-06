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
    }

}

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
    }
}


function createTileColumn(start, finish) {

}

function create() {
while (tileNumber < 74){
    createCity()

    createTiles()
}
}