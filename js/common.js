function getTextElementById(elementId){
    const previosTotal = document.getElementById(elementId);
    const newTotal = parseInt(previosTotal.innerText)
    return newTotal;
  
 }

 function setTextElementById(elementId,value){
    const subTotal = document.getElementById(elementId);
     subTotal.innerText = value;
 }


 function calculateSubTotalAmount(){
 
    const phoneTotal = getTextElementById('phone-total');
    const caseTotal = getTextElementById('case-total');
    const currentSubTotal = phoneTotal+caseTotal;
  setTextElementById('sub-total',currentSubTotal)

    const taxElementAmount = (currentSubTotal*0.15).toFixed(2);
    const taxAmount = parseFloat(taxElementAmount)
  setTextElementById('tax-amount',taxAmount)

  const finalTotal = currentSubTotal+taxAmount;
  setTextElementById('final-total', finalTotal);

 }


  
 