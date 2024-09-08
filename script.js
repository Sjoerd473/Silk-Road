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

     }else if (tileNumber === 97) {
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
    }  else if (tileNumber === 165 ) {
        let parent = document.querySelector('.secondRow');
        let sibling = document.querySelector('.rightColumn')
        let newCityOne = document.createElement('div');
        newCityOne.classList.add('rightCity')
        newCityOne.dataset.tile = `300` // give this a very high number?

        newCityOne.textContent = 'VE'
        parent.insertBefore(newCityOne,parent.lastElementChild);
        

    
        
        let newCityTwo = document.createElement('div');
        newCityTwo.classList.add('leftCity')
        newCityTwo.dataset.tile = `200` //give this a very high number?

        newCityTwo.textContent = 'IA';
        parent.insertBefore(newCityTwo,newCityOne);;
        
    
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
function createTileRowBottom() {

    let tileRowParent = document.querySelector('.thirdRow');
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
        createTileColumnRight()

        for (; tileNumber < 87; tileNumber++) {
            const parent = document.querySelector('.rightColumnPart')
            //const container = parent.lastElementChild
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            parent.appendChild(tile);
        }
    } else if (tileNumber === 88) {
        createTileColumnRight()

        for (; tileNumber < 97; tileNumber++) {
            const parent = document.querySelector('.rightColumn')
             container = parent.lastElementChild
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

        for (; tileNumber < 165 ; tileNumber++) {
            const parent = document.querySelector('.leftColumn')
             
            let tile = document.createElement('div');
            tile.classList.add('point');
            tile.dataset.tile = `${tileNumber}`;

            parent.appendChild(tile);
        }
    }
}

//combine these into a single function that takes a parameter to decide what column to make
function createTileColumnRight() {
    let tileColumnParent = document.querySelector('.rightColumn');
    let column = document.createElement('div');
    column.classList.add('rightColumnPart');

    tileColumnParent.appendChild(column);
}
function createTileColumnLeft(){
    let tileColumnParent = document.querySelector('.secondRow');
    let column = document.createElement('div');
    column.classList.add('leftColumn');

    tileColumnParent.appendChild(column);
}
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
}
function create() {
    createOutline()
    while (tileNumber < 165) {
        createCity();

        createTiles();
    }
    if (tileNumber === 165){
        createCity();
        createArrows();
    }
};

function createArrows(){
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
 new LeaderLine (
    document.querySelector(`[data-tile='58']`),
    document.querySelector(`[data-tile='119']`),
    {
        startPlug: 'arrow1',
        endPlug: 'arrow1'
    });
    // CA to IA
    new LeaderLine (
        document.querySelector(`[data-tile='73']`),
        document.querySelector(`[data-tile='200']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
         // CA to SH
    new LeaderLine (
        document.querySelector(`[data-tile='73']`),
        document.querySelector(`[data-tile='87']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
         // SH to IA
    new LeaderLine (
        document.querySelector(`[data-tile='87']`),
        document.querySelector(`[data-tile='200']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
         // BA to TR
    new LeaderLine (
        document.querySelector(`[data-tile='134']`),
        document.querySelector(`[data-tile='10']`),
        {
            
            endPlug: 'arrow1'
        });
         // ME to GE
    new LeaderLine (
        document.querySelector(`[data-tile='145']`),
        document.querySelector(`[data-tile='153']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        });
         // GE to VE
    new LeaderLine (
        document.querySelector(`[data-tile='153']`),
        document.querySelector(`[data-tile='300']`),
        {
            startPlug: 'arrow1',
            endPlug: 'arrow1'
        }); 
}

