const smsCallRadio = document.querySelector('.billItemTypeWithSettings');
const callCost = document.querySelector('.callCostSetting');
const smsCost = document.querySelector('.smsCostSetting');
const warningLevel = document.querySelector('.warningLevelSetting')
const criticalLevel = document.querySelector('.criticalLevelSetting');
const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSettings = document.querySelector('.smsTotalSettings');
const totalSettings = document.querySelector('.totalSettings');

const addToBillBtn = document.querySelector('.addBtn')
const updateBtn = document.querySelector('.updateSettings');
const billSetting = settingsBill();

updateBtn.addEventListener('click', function(){

    billSetting.setCallCost(Number(callCost.value));
    billSetting.setSmsCost(Number(smsCost.value));
    billSetting.setWarningLevel(Number(warningLevel.value));
    billSetting.setCriticalLevel(Number(criticalLevel.value));
    colors();
});
callTotalSettings.innerHTML = billSetting.getTotalCallCost().toFixed(2);
smsTotalSettings.innerHTML = billSetting.getTotalSmsCost().toFixed(2);
totalSettings.innerHTML = billSetting.getTotalCallCost().toFixed(2);

function totalBill(){
    var checkedRadioButton = document.querySelector('input[name="billItemTypeWithSettings"]:checked')
    if(checkedRadioButton){
        var smsCallRadio = checkedRadioButton.value;
    } 
    if(smsCallRadio === "call"){
        billSetting.makeCall();
    }
    else if(smsCallRadio === "sms"){
        billSetting.sendSms();
    }
    callTotalSettings.innerHTML = billSetting.getTotalCallCost().toFixed(2);
    smsTotalSettings.innerHTML = billSetting.getTotalSmsCost().toFixed(2);
    totalSettings.innerHTML = billSetting.getTotalCost().toFixed(2);
   colors();
}
addToBillBtn.addEventListener('click', totalBill);

function colors(){

    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("critical");
    totalSettings.classList.add(billSetting.totalLevel())
}