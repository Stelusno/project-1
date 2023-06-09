
// //Stating variable testEl. Grabbing the element Id from the html.
// const testEl = document.getElementById("c0r3")
// console.log(testEl);
// //Using our named variable and adding event listener click fuction
// testEl.addEventListener("click", function(){  
//     //Setting the background color of the element to red on click.
//     testEl.style.backgroundColor = "red";
// }) 
// // testEl.style.backgroundColor = "red";
let firstEl, secondEl; // Declare variables outside of checkMatch function or it won't work
let matchedPairs = 0;  //Set variable to 0 matches 
const totalPairs = 6; //Set variable to 6 matches so it knows when game is complete

function checkMatch() {  //Create function to understand matches
    if (clickedEl.length === 2) {  //Setting conditional that ClickedEl needs to equal 2 indexs in the array to work
        firstEl = clickedEl[0]; // Assign first index in ClickedEl array as value to firstEl
        secondEl = clickedEl[1]; //Assign second index in ClickedEl array as value to firstEl
        const firstColor = firstEl.style.backgroundColor; //Assign variable first color as firstEl's background color
        const secondColor = secondEl.style.backgroundColor; ///Assign variable second color as firstEl's background color

        if (firstColor === secondColor) {   //Conditional that if firstColor is exactly equal to second color then
                                            // Colors match
            if (firstColor === "pink") {  //Conditional that of color matches to add a class to the color. Did the same for all colors and matches
                firstEl.classList.add("pink-match");
                secondEl.classList.add("pink-match");
            }
            
            if (firstColor === "orange") {
                    firstEl.classList.add("orange-match");
                    secondEl.classList.add("orange-match");
            }

            if (firstColor === "blue") {
                firstEl.classList.add("blue-match");
                secondEl.classList.add("blue-match");
        }
        
            if (firstColor === "red") {
                firstEl.classList.add("red-match");
                secondEl.classList.add("red-match");
        }
            if (firstColor === "green") {
                firstEl.classList.add("green-match");
                secondEl.classList.add("green-match");
        }

            if (firstColor === "purple") {
                firstEl.classList.add("purple-match");
                secondEl.classList.add("purple-match");
        }
            matchedPairs++;  //Adding 1 to matchedPairs each time a pair matches

            if (matchedPairs === totalPairs) { //Conditional that if matchedPairs equals number of total pairs
                                             // Game over, all pairs matched
                                             //<-- I was trying to add an winner message here
            }
        } else {  ///else conditional 
            // Colors do not match
            setTimeout(function() {  //Had to add time out function so cards wouldn't change immediately 
                firstEl.style.backgroundColor = "";
                secondEl.style.backgroundColor = "";
            }, 1000); 
        }

        clickedEl = [];  // Gave clickedEl empty array value to run previous conditionals through to get firstEl and secondEl in it 
    }
}

const cards = document.querySelectorAll(".card");  //Assigned cards variable all cards with a class of "card"
let clickedEl = [];

cards.forEach(function(card) {    //Iterated through all cards and added a click event listener
    card.addEventListener("click", function() {
        if (matchedPairs < totalPairs) {   //Conditional that if matchedPairs were less than totalPairs 
            if (clickedEl.length < 2) {     //And if clickedEl was less than 2 indexs
                clickedEl.push(card); //Add it to the clickedEl
            }

            setTimeout(function() {   //Invoking timeout function and checkMatch
                checkMatch();
            }, 0);
        }                       //Setting guidelines for cards. If the card is selected what color it will appear as. 
        if(card.id === 'c0r3'|| card.id === 'c3r2') {  //Set it for two cards using || because cards are pairs
            card.style.backgroundColor = "pink";
        }

        if(card.id === 'c0r2' || card.id === 'c2r1') {
            card.style.backgroundColor = "orange"
        }

        if(card.id === 'c0r1' || card.id === 'c2r3') {
            card.style.backgroundColor = "blue"
        }
        
        if(card.id === 'c1r1'|| card.id === 'c3r1') {
            card.style.backgroundColor = "green"
        }
        
        if(card.id ==='c1r3' || card.id === 'c3r3') {
            card.style.backgroundColor = "red"
        }
        
        if(card.id === 'c1r2'|| card.id === 'c2r2') {
            card.style.backgroundColor = "purple"
        }   
   

    })
})


resetBtn = document.querySelector("button")  //Called reset button 
resetBtn.addEventListener("click", function() { //Added event listener for when it is clicked on
    clickedEl = [];  //When it is clicked clickedEl array goes back to being empty 
    matchedPairs = 0; //Matched pair goes back to being 0 so that when game starts over it does not just change everything back to gold and lose previous logic
    cards.forEach(function(card){  //  //Used a forEach function again to iterate over all cards and change color to gold 
        card.style.backgroundColor = "gold"
        card.classList.remove("pink-match", "orange-match", "blue-match", "red-match", "green-match", "purple-match") //removed classes that were previously added to cards
    })
})