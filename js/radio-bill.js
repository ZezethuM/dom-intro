// get a reference to the sms or call radio buttons
const billItemType = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
const addButtonElem = document.querySelector('.radioBillAddBtn')
//create a variable that will keep track of the total bill
const callTotalElement = document.querySelector('.callTotalTwo')
const smsTotalElement = document.querySelector('.smsTotalTwo')
const TotalElement = document.querySelector('.totalTwo')

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
callTotalElement.innerHTML = callsTotal.toFixed(2);
smsTotalElement.innerHTML = smsTotal.toFixed(2);
TotalElement.innerHTML = totalCost.toFixed(2);
var callsTotal = 0;
var smsTotal = 0;
function radioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
    // update the correct total
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    //update the totals that is displayed on the screen.
    callTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    TotalElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        TotalElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        TotalElement.classList.add("warning");
    }
}
addButtonElem.addEventListener('click', radioBillTotal);


