function updatePhoneValue(isIncrease){
    const inputPhoneNumberField = document.getElementById('phone-number-field');
    const inputPhoneNumber = parseInt(inputPhoneNumberField.value);
  
    let newPhoneInput;
     if(isIncrease === true){
        newPhoneInput = inputPhoneNumber+1;
     }
     else{
        newPhoneInput = inputPhoneNumber-1;
     }
    inputPhoneNumberField.value = newPhoneInput;
    return newPhoneInput;
}

function updatePhonePrice(newPhoneInput){
    const newPhonePrice = newPhoneInput*1219;
    const totalPhonePrice = document.getElementById('phone-total');
    totalPhonePrice.innerText = newPhonePrice;
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
  
  const newPhoneInput = updatePhoneValue(true);
  updatePhonePrice(newPhoneInput);

 calculateSubTotalAmount()
  
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){

   const newPhoneInput = updatePhoneValue(false);
   updatePhonePrice(newPhoneInput);
   
   calculateSubTotalAmount()

})