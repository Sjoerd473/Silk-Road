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

 function createTiles(start,finish){   
    const parent = document.querySelector('.tileRow')
    

    for (let i = start; i <= finish; i++){
    let tile = document.createElement('div');
    tile.classList.add('point',`tile${i}`);
    console.log(tile)
   
    parent.appendChild(tile);
    }
}

function createTileColumn(start, finish) {

}