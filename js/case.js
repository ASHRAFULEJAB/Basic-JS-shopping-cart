// function getInputValue(inputId){
//     const previousInput = document.getElementById(inputId);
//     const newInput = parseInt(previousInput.value);
//     const inputTotal = newInput+1;
//     return inputTotal;
// }

function updateValue(isIncrease){
    const inputNumberField = document.getElementById('case-number-field');
    const inputNumber = parseInt(inputNumberField.value);
  
    let newInput;
     if(isIncrease === true){
        newInput = inputNumber+1;
     }
     else{
        newInput = inputNumber-1
     }
    inputNumberField.value = newInput;
    return newInput;
}

function updatePrice(newInput){
    const newPrice = newInput*59;
    const totalPrice = document.getElementById('case-total')
    totalPrice.innerText = newPrice
}
document.getElementById('btn-case-plus').addEventListener('click',function(){

  const newInput = updateValue(true)
  updatePrice(newInput);
  calculateSubTotalAmount()
  
})

document.getElementById('btn-case-minus').addEventListener('click',function(){

   const newInput = updateValue(false);
   updatePrice(newInput);
   calculateSubTotalAmount()

})