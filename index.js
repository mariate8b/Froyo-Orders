const userInputString = prompt(
    "Please enter a list of froyo flavors separated by a comma.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const promptArray = userInputStriing.split(",");
console.log(promptArray);

function displayOrder(orderArray){
    const userOrder ={};
    for(let i = 0; i < orderArray.length; i++){
        if (userOrder[orderArray[i]]) {
            userOrder[orderArray[i]] = userOrder[orderArray[i]] + 1;
          } else {
            userOrder[orderArray[i]] = 1;
          }
        }
        return userOrder;
    
}

const flavor={
    vanilla: "3",
    strawberry: "1",
    coffee: "2",

}