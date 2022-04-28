//get a reference to the calculate button
//get a reference to the billTotal element
//get a reference to the billString
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

const calculateBtnElement = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billString");

  var total;
  function totalPhoneBill(callsAndSms) {
	var callsArr = callsAndSms.split(',');
  	var countCalls = 0;
  	var countSms = 0;
  
  for(var i = 0; i < callsArr.length; i++) {
  	var newArr = callsArr[i].trim().toLowerCase();
    if(newArr == 'call') {
    	countCalls += 2.75;
    }
    else if(newArr == 'sms') {
    	countSms += 0.65;
    }
  }
  total = countCalls + countSms;
  return total.toFixed(2); 
}
function calculateBtnClicked() {
    var billString = billStringField.value;
    var roundedBillTotal = totalPhoneBill(billString);
    
    if(roundedBillTotal < 30){
      billTotalElement.classList.remove("danger");
      billTotalElement.classList.remove("warning")
    }
    else if (roundedBillTotal >= 50){
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning")
    }
    else if (roundedBillTotal >= 30){
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger")

    }
    billTotalElement.innerHTML = roundedBillTotal;
}
//link the function to a click event on the calculate button
calculateBtnElement.addEventListener('click', calculateBtnClicked);