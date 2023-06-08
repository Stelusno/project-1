// Actions
//Card is hidden 
//Card flips/becomes visible 
//Card flips/back
//Winner declared
//Matching set

// Actors
//Cards

/*----- constants -----*/
const colors = [red, blue, green, orange, purple, green];
const colorsList = [...colors, ...colors];

console.log(colors);

/*----- state variables -----*/
let cards; // 4 columns of cards
let winner; // null = no winner; 1 will be winner;

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

//Initialize all state, then call render(); 
function init() {
cards = [
    [0, 0, 0], //column 0
    [0, 0, 0], //column 1
    [0, 0, 0], //column 2
    [0, 0, 0]  //column 3
];

winner = null;
render();

}


function render() {
renderCards();
}

function renderCards(){
    cards.forEach(function(colArr, colIdx) {
    colArr.forEach(function(cellVal, rowIdx){
      const cellId = `c${colIdx}r${rowIdx}`;
      const cellEl = document.getElementById(cellId);
      console.log(colArr)
    
        });

    });
}