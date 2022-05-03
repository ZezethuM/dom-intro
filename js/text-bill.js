// get a reference to the textbox where the bill type is to be entered
//get a reference to the add button
//create a variable that will keep track of the total bill
//update the totals that is displayed on the screen.
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const textboxElem = document.querySelector('.billTypeText')
const textTotalAddBtn = document.querySelector('.addToBillBtn')
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");
  
  var callsTtl = 0;
  var smsTtl = 0;
  var totalsCost = 0;

  callsTotalElem.innerHTML = callsTtl.toFixed(2);
  smsTotalElem.innerHTML = smsTtl.toFixed(2);
  totalCostElem.innerHTML = totalsCost.toFixed(2);

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = textboxElem.value.trim().toLowerCase();
    // update the correct total
    if (billTypeEntered === "call"){
            callsTtl += 2.75
    }
    else if (billTypeEntered === "sms"){
            smsTtl += 0.75;
    }
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTtl.toFixed(2);
    smsTotalElem.innerHTML = smsTtl.toFixed(2);
    totalsCost = callsTtl + smsTtl;
    totalCostElem.innerHTML = totalsCost.toFixed(2);

    if (totalsCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalsCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
textTotalAddBtn.addEventListener('click', textBillTotal);
