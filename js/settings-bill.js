//get a reference to the sms or call radio buttons
//get references to all the settings fields
//get a reference to the add button
//get a reference to the 'Update settings' button
//create a variables that will keep track of all the settings
//create a variables that will keep track of all three totals.
//add an event listener for when the 'Update settings' button is pressed
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const smsCallRadio = document.querySelector('.billItemTypeWithSettings');
const callCost = document.querySelector('.callCostSetting');
const smsCost = document.querySelector('.smsCostSetting');
const warningLevel = document.querySelector('.warningLevelSetting')
const criticalLevel = document.querySelector('.criticalLevelSetting');
const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSettings = document.querySelector('.smsTotalSettings');
const totalSettings = document.querySelector('.totalSettings');

const addToBillBtn = document.querySelector('.addBtn')

const updateBtn = document.querySelector('.updateSettings')

let callValue = 0; 
let smsValue = 0;
let warningLevelValue = 0;
let criticalLevelValue = 0;


updateBtn.addEventListener('click', function(){
    
    callValue = Number(callCost.value);
    smsValue = Number(smsCost.value);
    warningLevelValue = Number(warningLevel.value);
    criticalLevelValue = Number(criticalLevel.value);
    // totalValue = Number(totalSettings.value);
    colors();
});

let callTotal = 0;
let smsTotalValue = 0;
let totalValue = 0;

callTotalSettings.innerHTML = callTotal.toFixed(2);
smsTotalSettings.innerHTML = smsTotalValue.toFixed(2);
totalSettings.innerHTML = (totalValue).toFixed(2);

function totalBill(){
    var checkedRadioButton = document.querySelector('input[name="billItemTypeWithSettings"]:checked')
    if(checkedRadioButton){
        var smsCallRadio = checkedRadioButton.value;
    }
    if(smsCallRadio === "call"){
        if(criticalLevelValue > totalValue){
            callTotal += callValue;
        }
    }
    else if(smsCallRadio === "sms"){
        if(criticalLevelValue > totalValue){
            smsTotalValue += smsValue;
        }
    }
    callTotalSettings.innerHTML = callTotal.toFixed(2)
    smsTotalSettings.innerHTML = smsTotalValue.toFixed(2);
    totalValue = callTotal + smsTotalValue;
    totalSettings.innerHTML = totalValue.toFixed(2);

   colors();
}
addToBillBtn.addEventListener('click', totalBill);

function colors(){

    if(totalValue >= criticalLevelValue){
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");
    }
    else if(totalValue >= warningLevelValue){
            totalSettings.classList.add("warning");
            totalSettings.classList.remove("danger");
    }
    else if(totalValue < criticalLevelValue){
        totalSettings.classList.remove("danger");
    }
    else if(totalValue < warningLevelValue){
        totalSettings.classList.remove("warning");
    }


}