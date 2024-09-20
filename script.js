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
            field.setAttribute('value', `Player${i + 1} name`);
            field.id = ('player' + j);
            j++
            parent.appendChild(field);
        }
    })

})



function createOutline() {

    let frame = document.querySelector('body')
    frame.replaceChildren()
    frame.classList.add('flexBody')

    let board = document.createElement('div');
    board.classList.add('board');
    let boardParent = document.querySelector('body');
    boardParent.insertBefore(board, boardParent.firstElementChild);

    let infoPanel = document.createElement('div');
    infoPanel.classList.add('infoPanel');
    boardParent.insertBefore(infoPanel, board.nextSibling);

    let infoPanelTop = document.createElement('div');
    infoPanelTop.classList.add('infoPanelTop');
    infoPanel.appendChild(infoPanelTop);
    infoPanelTop.textContent = 'This is where event messages will be displayed'


    let infoPanelBottom = document.createElement('div');
    infoPanelBottom.classList.add('infoPanelBottom');
    infoPanel.appendChild(infoPanelBottom)
    infoPanelBottom.textContent = `It is currently ${activePlayer.name}'s turn.`
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

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    board.appendChild(buttonContainer);

    let buttonContainerLeft = document.createElement('div');
    buttonContainerLeft.classList.add('buttonContainerLeft');
    buttonContainer.appendChild(buttonContainerLeft);

    let buttonContainerRight = document.createElement('div');
    buttonContainerRight.classList.add('buttonContainerRight');
    buttonContainer.appendChild(buttonContainerRight);

    let rollDie = document.createElement('button');
    let i = 0
    rollDie.classList.add('rollDie');
    rollDie.textContent = `Roll the dice to select your starting position`
    rollDie.addEventListener('click', chooseStart);

    rollDie.addEventListener('click', function change(e) {
        i++
        console.log(i)
        if (i === playerArray.length) {
            i = 0
            rollDie.removeEventListener('click', change);
            rollDie.removeEventListener('click', chooseStart);
            rollDie.addEventListener('click', placeBandit);
            rollDie.textContent = 'Roll the dice to place your bandit';
            rollDie.addEventListener('click', function changeTwo() {
                i++
                console.log(i + 'two')
                if (i === playerArray.length) {
                    i = 0
                    rollDie.removeEventListener('click', changeTwo);
                    rollDie.removeEventListener('click', placeBandit);
                    rollDie.textContent = 'Roll the dice to place your customs house';
                    rollDie.addEventListener('click', placeCustoms);
                    rollDie.addEventListener('click', function changeThree() {
                        i++;
                        console.log(i + 'three');
                        if (i === playerArray.length) {
                            i = 0
                            rollDie.removeEventListener('click', changeThree);
                            rollDie.removeEventListener('click', placeCustoms);
                            rollDie.textContent = 'Roll the dice to place your occasion';
                            rollDie.addEventListener('click', placeOccasion);
                            rollDie.addEventListener('click', function changeFour() {
                                i++;
                                console.log(i + ' four')
                                if (i === playerArray.length) {
                                    i = 0
                                    rollDie.removeEventListener('click', changeFour);
                                    rollDie.removeEventListener('click', placeOccasion);
                                    rollDie.textContent = 'Start the Game!';
                                    rollDie.addEventListener('click', function changeFive() {
                                            rollDie.remove();
                                            rollDie.removeEventListener('click', changeFive);
                                            let newButton = document.createElement('button');
                                            newButton.textContent = 'Roll the dice to move';
                                            newButton.addEventListener('click', movePlayer);
                                            checkTravel()
                                            newButton.classList.add('rollDie')
                                            buttonContainerLeft.appendChild(newButton);
                                    })
                                    
                                }
                            })
                        }
                    })

                }
            })
        }
    })

    rollDie.addEventListener('click', () => {
        let infoPanelBottom = document.querySelector('.infoPanelBottom')
        infoPanelBottom.textContent = `It is currently ${activePlayer.name}'s turn.`
    })

    buttonContainerLeft.appendChild(rollDie);

    /* let endButton = document.createElement('button');
   endButton.classList.add('endTurnButton');
   endButton.textContent = 'End my turn';
   endButton.addEventListener('click', endTurn)

   board.appendChild(endButton); */
};

function changeButton() {

}

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
    //new LeaderLine(LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='1']`)), document.querySelector(`[data-tile='153']`));
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='1']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='153']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            middleLabel: LeaderLine.pathLabel('2 Dice'),
            size: 3,
            dash: true,
            path: 'arc',
            color: 'blue'
        }); 

    // CO to TR
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='1']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='10']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'bottom',
            endSocket: 'bottom',
            size: 3,
            dash: true,
            middleLabel: LeaderLine.pathLabel('2 Dice'),
            color: 'blue'
        });

    // CO to VE
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='1']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='300']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            middleLabel: LeaderLine.pathLabel('3 Dice'),
            size: 3,
            dash: true,

            color: 'blue'
        });

    // TR to VE
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='10']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='300']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            middleLabel: LeaderLine.pathLabel('4 Dice'),
            size: 3,
            dash: true,
            path: 'arc',
            color: 'blue'
        });



    // BU to BA
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='32']`)),
        document.querySelector(`[data-tile='134']`),
        {
            middleLabel: LeaderLine.pathLabel('? Dice'),
            endPlug: 'arrow3',
            size: 3,
            dash: true,
            color: 'green',
        });
    // KA to SA
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='58']`)),
        document.querySelector(`[data-tile='119']`),
        {
            middleLabel: LeaderLine.pathLabel('? Dice'),
            endPlug: 'arrow3',
            size: 3,
            dash: true,
            color: 'green',
        });
    // CA to IA
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='73']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='200']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            middleLabel: LeaderLine.pathLabel('2x6 Dice'),
            size: 3,
            dash: true,

            color: 'blue'
        });
    // CA to SH
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='73']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='87']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'left',
            endSocket: 'left',
            size: 3,
            dash: true,
            middleLabel: LeaderLine.pathLabel('4 Dice'),
            color: 'blue'
        });
    // SH to IA
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='87']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='200']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            middleLabel: LeaderLine.pathLabel('2x5 Dice'),
            size: 3,
            dash: true,

            color: 'blue'
        });
    // BA to TR
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='134']`)),
        document.querySelector(`[data-tile='10']`),
        {

            
            endPlug: 'arrow3',

            size: 3,
            dash: true,
            middleLabel: LeaderLine.pathLabel('? Dice'),
            color: 'green'
        });
    // ME to GE
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='145']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='153']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'top',
            endSocket: 'top',
            size: 3,
            dash: true,
            middleLabel: LeaderLine.pathLabel('1 Die'),
            color: 'blue'
        });
    //ME to SH
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='145']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='87']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            startSocket: 'top',
            endSocket: 'left',
            size: 3,
            dash: true,
            middleLabel: LeaderLine.pathLabel('2x7 Dice'),
            color: 'blue'
        });
    // GE to VE
    new LeaderLine(LeaderLine.mouseHoverAnchor(
        document.querySelector(`[data-tile='153']`)),
        LeaderLine.mouseHoverAnchor(document.querySelector(`[data-tile='300']`)),
        {
            startPlug: 'arrow3',
            endPlug: 'arrow3',
            middleLabel: LeaderLine.pathLabel('3 Dice'),
            size: 3,    
            dash: true,

            color: 'blue'
        });
};

function createPlayers() {
    let count = Number(document.querySelector('input[name="players"]:checked').value)
    if (count === 2) {
        let name1 = document.getElementById('player1').value
        let name2 = document.getElementById('player2').value
        switch (count) {
            case 2:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                break;
            case 3:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                new Player(name3, 'playerThree', 'playerThreeTile');
                break;
            case 4:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                new Player(name3, 'playerThree', 'playerThreeTile');
                new Player(name4, 'playerFour', 'playerFourTile');
                break;
        }
    } else if (count === 3) {
        let name1 = document.getElementById('player1').value
        let name2 = document.getElementById('player2').value
        let name3 = document.getElementById('player3').value
        switch (count) {
            case 2:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                break;
            case 3:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                new Player(name3, 'playerThree', 'playerThreeTile');
                break;
            case 4:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                new Player(name3, 'playerThree', 'playerThreeTile');
                new Player(name4, 'playerFour', 'playerFourTile');
                break;
        }

    } else if (count === 4) {
        let name1 = document.getElementById('player1').value
        let name2 = document.getElementById('player2').value
        let name3 = document.getElementById('player3').value
        let name4 = document.getElementById('player4').value

        switch (count) {
            case 2:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                break;
            case 3:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                new Player(name3, 'playerThree', 'playerThreeTile');
                break;
            case 4:
                new Player(name1, 'playerOne', 'playerOneTile');
                new Player(name2, 'playerTwo', 'playerTwoTile');
                new Player(name3, 'playerThree', 'playerThreeTile');
                new Player(name4, 'playerFour', 'playerFourTile');
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
    console.log(activePlayer)
    console.log(activePlayer.position)
    let button = document.querySelector('.rollDie')
    button.removeEventListener('click', movePlayer);
    button.addEventListener('click', endTurn);
    button.textContent = 'Click to end your turn'





    const moves = rollDice(1);
    let textWindow = document.querySelector('.infoPanelTop');
    textWindow.textContent = `${activePlayer.name} rolled a ${moves}`
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
                e.target.classList.add(activePlayer.mClass);
                position.classList.remove(activePlayer.mClass);
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

                e.target.classList.add(activePlayer.mClass);
                position.classList.remove(activePlayer.mClass);
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
                e.target.classList.add(activePlayer.mClass);
                position.classList.remove(activePlayer.mClass);
                movement.forEach((tile) => { tile.classList.remove('movement') })
            });
        })

    }


}

function checkTravel(position){
    let parent = document.querySelector('.buttonContainerRight')
        parent.replaceChildren()
   //position = 0 //for testing
    if (position === 0){
        
        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to TR';
        buttonOne.addEventListener('click', ()=>{if(seaTravel(2) === true){
            console.log('shipwreck')                                    // display shipwreck on the page
        }else{ console.log('you survived')}});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to VE';
        buttonTwo.addEventListener('click', ()=>{seaTravel(3)});
        parent.appendChild(buttonTwo);

        let buttonThree = document.createElement('button');
        buttonThree.classList.add('travelButton');
        buttonThree.textContent = 'Sail to GE';
        buttonThree.addEventListener('click', ()=>{seaTravel(2)});
        parent.appendChild(buttonThree);


    } else if (position === 9){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to CO';
        buttonOne.addEventListener('click', ()=>{seaTravel(2)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to VE';
        buttonTwo.addEventListener('click', ()=>{seaTravel(4)});
        parent.appendChild(buttonTwo);

    } else if (position === 31){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Caravan to BA';
        buttonOne.addEventListener('click', landTravel(2));
        parent.appendChild(buttonOne);
        
    } else if (position === 57){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Caravan to SA';
        buttonOne.addEventListener('click', landTravel(2));
        parent.appendChild(buttonOne);

    } else if (position === 72) { 

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to SH';
        buttonOne.addEventListener('click', ()=>{seaTravel(4)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to IA';
        buttonTwo.addEventListener('click', ()=>{seaTravel(6)});
        parent.appendChild(buttonTwo);

    } else if (position === 86){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to CA';
        buttonOne.addEventListener('click', ()=>{seaTravel(4)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to IA';
        buttonTwo.addEventListener('click', ()=>{seaTravel(5)});
        parent.appendChild(buttonTwo);
    } else if (position === 133){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Caravan to TR';
        buttonOne.addEventListener('click', landTravel(2));
        parent.appendChild(buttonOne);
    } else if (position === 145){
        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to SH';
        buttonOne.addEventListener('click', ()=>{seaTravel(7)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to GE';
        buttonTwo.addEventListener('click', ()=>{seaTravel(1)});
        parent.appendChild(buttonTwo);
    } else if (position === 153){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to ME';
        buttonOne.addEventListener('click', ()=>{seaTravel(1)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to VE';
        buttonTwo.addEventListener('click', ()=>{seaTravel(3)});
        parent.appendChild(buttonTwo);

        let buttonThree = document.createElement('button');
        buttonThree.classList.add('travelButton');
        buttonThree.textContent = 'Sail to GE';
        buttonThree.addEventListener('click', ()=>{seaTravel(2)});
        parent.appendChild(buttonThree);

    } else if (position === 'VE'){

        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to CO';
        buttonOne.addEventListener('click', ()=>{seaTravel(3)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to TR';
        buttonTwo.addEventListener('click', ()=>{seaTravel(4)});
        parent.appendChild(buttonTwo);

        let buttonThree = document.createElement('button');
        buttonThree.classList.add('travelButton');
        buttonThree.textContent = 'Sail to GE';
        buttonThree.addEventListener('click', ()=>{seaTravel(3)});
        parent.appendChild(buttonThree);
    } else if (position === 'IA'){
        let buttonOne = document.createElement('button');
        buttonOne.classList.add('travelButton');
        buttonOne.textContent = 'Sail to CA';
        buttonOne.addEventListener('click', ()=>{seaTravel(6)});
        parent.appendChild(buttonOne);
        
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('travelButton');
        buttonTwo.textContent = 'Sail to SH';
        buttonTwo.addEventListener('click', ()=>{seaTravel(5)});
        parent.appendChild(buttonTwo);    }
    }
function endTurn() {
    if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
        activePlayer = playerArray[0];
    } else {
        activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
        ;
    } 
   checkTravel(activePlayer.position)
    let button = document.querySelector('.rollDie');
    button.addEventListener('click', movePlayer);
    button.removeEventListener('click', endTurn);
    button.textContent = 'Roll the die to move!';
    
}

function chooseStart() {

    const boardTop = Array.from(document.querySelectorAll('.firstRow > [data-tile], .firstRow > .tileRow > [data-tile]'))
    const boardSideRight = Array.from(document.querySelectorAll('.rightColumnPartTop > [data-tile], [data-tile ="87"], .rightColumnPartBottom > [data-tile]'));
    const boardBottom = Array.from(document.querySelectorAll('.thirdRow > [data-tile], .thirdRow > .tileRow > [data-tile]'));
    const boardSideLeft = Array.from(document.querySelectorAll('.leftColumn > [data-tile]'));

    allTiles = boardTop.concat(boardSideRight, boardBottom, boardSideLeft);

    let clockwise = Array.from(document.querySelectorAll('.city'));
    let counterClockwise = Array.from(document.querySelectorAll('.city')).reverse();
    let infoPanel = document.querySelector('.infoPanelTop');
    let movement = rollDice(1);
    infoPanel.textContent = `You rolled a ${movement}`

    if (movement === 6) {

        let optionOne = clockwise[movement - 1];
        optionOne.classList.add('movement');
        optionOne.addEventListener('click', function (e) {
            optionOne.removeEventListener('click', (e))

            activePlayer.position = allTiles.indexOf(e.target);
            e.target.classList.add(activePlayer.mClass);
            optionOne.classList.remove('movement');

            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                
            }
        })
    } else {
        let optionOne = clockwise[movement - 1];
        optionOne.classList.add('movement');
        optionOne.addEventListener('click', function (e) {
            optionOne.removeEventListener('click', (e))
            optionTwo.removeEventListener('click', (e));
            activePlayer.position = allTiles.indexOf(e.target);
            e.target.classList.add(activePlayer.mClass);
            optionOne.classList.remove('movement');
            optionTwo.classList.remove('movement');
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                
            }
        })
        let optionTwo = counterClockwise[movement - 1];
        optionTwo.classList.add('movement');
        optionTwo.addEventListener('click', function (e) {
            optionOne.removeEventListener('click', (e))
            optionTwo.removeEventListener('click', (e));
            activePlayer.position = allTiles.indexOf(e.target);
            e.target.classList.add(activePlayer.mClass);
            optionOne.classList.remove('movement');
            optionTwo.classList.remove('movement');
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                
            }

        })
    }


}





function Player(name, movement, static) {
    this.name = name;
    this.number = playerArray.length + 1
    this.money = 10
    this.position = 0;
    this.mClass = movement;
    this.sClass = static;
    playerArray.push(this);
};

// position in index of the array, not on the board


function seaTravel(dice){
 let total = [];
        let otherTotal = [];
        for (let i = 0; i < dice; i++) {
            total.push(Math.ceil(Math.random() * 6));
            
        }
        for (let numbers of total){
            if(otherTotal.includes(numbers)){
                return true
            } else{ 
                otherTotal.push(numbers);
            }
            }  return false;
    }

function landTravel(dice){


}

function placeBandit() {
    let movement = rollDice(4);
    let position = activePlayer.position;
    let infoPanel = document.querySelector('.infoPanelTop');
    infoPanel.textContent = `You rolled a ${movement}`
    if (position < 25) {
        const extraTiles = allTiles.slice(allTiles.length - 25).reverse();

        let modifiedTiles = allTiles.toReversed();
        modifiedTiles = modifiedTiles.concat(extraTiles).reverse();
        


        if (movement % 2 === 0) {
            let brigand = allTiles[position + movement];
            brigand.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            
            let reversePosition = modifiedTiles.indexOf(allTiles[position]);
            
            
            let brigand = modifiedTiles[reversePosition - movement];
            
            brigand.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }
    } else if (position > 140) {

        const modifiedTiles = allTiles.concat(allTiles.slice(0, 25))


        if (movement % 2 === 0) {
            let brigand = modifiedTiles[position + movement];;
            brigand.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let brigand = modifiedTiles[position - movement];
            brigand.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }



    } else {
        if (movement % 2 === 0) {
            let brigand = allTiles[position + movement];
            brigand.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let brigand = allTiles[position - movement];
            brigand.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }

    }


}

function placeCustoms() {
    let movement = rollDice(4);
    let position = activePlayer.position;
    let infoPanel = document.querySelector('.infoPanelTop');
    infoPanel.textContent = `You rolled a ${movement}`
    if (position < 25) {
        const extraTiles = allTiles.slice(allTiles.length - 25).reverse();

        let modifiedTiles = allTiles.toReversed();
        modifiedTiles = modifiedTiles.concat(extraTiles).reverse();


        if (movement % 2 === 0) {
            let customs = allTiles[position + movement];
            customs.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let reversePosition = modifiedTiles.indexOf(allTiles[position]);
            let customs = modifiedTiles[reversePosition - movement];
            customs.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }
    } else if (position > 140) {

        const modifiedTiles = allTiles.concat(allTiles.slice(0, 25))


        if (movement % 2 === 0) {
            let customs = modifiedTiles[position + movement];
            customs.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let customs = modifiedTiles[position - movement];
            customs.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }



    } else {
        if (movement % 2 === 0) {
            let customs = allTiles[position + movement];
            customs.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let customs = allTiles[position - movement];
            customs.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }

    }


}

function placeOccasion() {
    let movement = rollDice(4);
    let position = activePlayer.position;
    let infoPanel = document.querySelector('.infoPanelTop');
    infoPanel.textContent = `You rolled a ${movement}`
    if (position < 25) {
        const extraTiles = allTiles.slice(allTiles.length - 25).reverse();

        let modifiedTiles = allTiles.toReversed();
        modifiedTiles = modifiedTiles.concat(extraTiles).reverse();


        if (movement % 2 === 0) {
            let occasion = allTiles[position + movement];
            occasion.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let reversePosition = modifiedTiles.indexOf(allTiles[position]);
            let occasion = modifiedTiles[reversePosition - movement];
            occasion.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }
    } else if (position > 140) {

        const modifiedTiles = allTiles.concat(allTiles.slice(0, 25))


        if (movement % 2 === 0) {
            let occasion = modifiedTiles[position + movement];
            occasion.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let occasion = modifiedTiles[position - movement];
            occasion.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }



    } else {
        if (movement % 2 === 0) {
            let occasion = allTiles[position + movement];
            occasion.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        } else {
            let occasion = allTiles[position - movement];
            occasion.classList.add(activePlayer.sClass);
            if (playerArray[playerArray.indexOf(activePlayer) + 1] === undefined) {
                activePlayer = playerArray[0];
            } else {
                activePlayer = playerArray[playerArray.indexOf(activePlayer) + 1];
                ;
            }
        }

    }


}

function startGame(){
    activePlayer = playerArray[0]
    let button = document.querySelector('.rollDie');
    button.textContent ='Click to roll the dice to move'
    button.removeEventListener('click', startGame);
    button.addEventListener('click', movePlayer);

}

function updateDisplay(){
    let textWindow = document.querySelector('.infoPanelBottom');
    textWindow.textContent = `This is the first line \r\n`
    textWindow.textContent += `This is the second line \r\n`
    textWindow.textContent += `and a third one. `
}