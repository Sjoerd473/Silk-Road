let tileNumber = 1

function createCity() {
    
    if (tileNumber === 1){
        //create first city
        
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`
        
        newCity.textContent = 'CO';
        parent.appendChild(newCity);

        tileNumber++
    } else if (tileNumber === 10){
        //create second city
        let parent = document.querySelector('.firstRow');
        let newCity = document.createElement('div');
        newCity.classList.add('city')
        newCity.dataset.tile = `${tileNumber}`
        
        newCity.textContent = 'TR';
        parent.appendChild(newCity);
        tileNumber++
    }

}

// For rolling any amount of dice

function rollDice(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function createTileRow() {
    let tileRow = document.querySelector(`[data-tile='1']`);
    let tileRowParent = document.querySelector(`[data-tile='1']`).parentNode;
    
    
    let row = document.createElement('div');
    row.classList.add('tileRow');
    
    tileRowParent.insertBefore(row,null);
}

 function createTiles(finish){   
    const parent = document.querySelector('.tileRow')
    

    for (; tileNumber < finish; tileNumber++){
    let tile = document.createElement('div');
    tile.classList.add('point');
    tile.dataset.tile = `${tileNumber}`;
    
   console.log(tileNumber)
    parent.appendChild(tile);
    }
}

function createTileColumn(start, finish) {

}

function create(){
    while (tileNumber < 11){
    createCity()
    createTileRow()
    createTiles(10)
}
}