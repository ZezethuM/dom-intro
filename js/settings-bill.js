// get a reference to the sms or call radio buttons
const smsCallRadio = document.querySelector('.billItemTypeWithSettings');
// get references to all the settings fields
const callCost = document.querySelector('.callCostSetting');
const smsCost = document.querySelector('.smsCostSetting');
const warningLevel = document.querySelector('.warningLevelSetting')
const criticalLevel = document.querySelector('.criticalLevelSetting');
const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSettings = document.querySelector('.smsTotalSettings');
const totalSettings = document.querySelector('.totalSettings');

//get a reference to the add button
const addToBillBtn = document.querySelector('.button-primary')
//get a reference to the 'Update settings' button
const updateBtn = document.querySelector('.updateSettings')
// create a variables that will keep track of all the settings
const call = callCost.value; 
const sms = smsCost.value;
const criticalLevelValue = criticalLevel.value

// create a variables that will keep track of all three totals.
let callTotal = 0;
let smsTotalValue = 0;
let totalValue = 0;


callTotalSettings.innerHTML = callTotal.toFixed(2);
smsTotalSettings.innerHTML = smsTotalValue.toFixed(2);
totalSettings.innerHTML = totalValue.toFixed(2)

//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener('click', function(){
})
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
