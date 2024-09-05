let tileNumber = 1

function createCity() {
    if (tileNumber = 1){
        //create first city
        let parent = document.querySelector('.firstRow');
        console.log(parent)
        let cityone = document.createElement('div');
        cityone.classList.add('city', `tile${tileNumber}`)
        cityone.id = 'test'
        cityone.textContent = 'CO';
        parent.appendChild(cityone);

        tileNumber++
    } else if (tileNumber = 10){
        //create second city
        tileNumber++
    }

}

// For rolling any amount of dice

function rollDice(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function createTileRow() {
    let y = document.querySelector('#test');
    let x = document.querySelector('#test').parentNode;
    
    
    let row = document.createElement('div');
    row.classList.add('tileRow');
    
    x.insertBefore(row,null);
}

 function createTiles(finish){   
    const parent = document.querySelector('.tileRow')
    

    for (; tileNumber < finish; tileNumber++){
    let tile = document.createElement('div');
    tile.classList.add('point',`tile${tileNumber}`);
    console.log(tile)
   
    parent.appendChild(tile);
    }
}

function createTileColumn(start, finish) {

}

function create(){
    createCity()
    createTileRow()
    createTiles(10)
}