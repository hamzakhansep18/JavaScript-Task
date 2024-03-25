function calculateBudget() {
  let  bdgt= parseFloat(document.getElementById("bdgt").value);
   document.getElementById("bill").innerHTML="$"+bdgt;
   document.getElementById("balance").innerHTML=bdgt;
}
let totalexpense=0;
let balance=bdgt;
function addExpense() {
    let AmountDev=document.getElementById("balance");
    let bal = parseFloat(AmountDev.innerText);
    let expense=document.getElementById("exp");

    balance=AmountDev.innerText
    let productName= document.getElementById("expense").value;
    let productAmount=parseFloat(document.getElementById("amount").value);
    if(balance>=productAmount){
        AmountDev.innerHTML=balance-productAmount;
        var titleElement = document.createElement('div');
        var valueElement = document.createElement('div');
        titleElement.innerHTML =productName;
        valueElement.innerHTML ="$"+productAmount;
        document.getElementById('title').appendChild(titleElement);
        document.getElementById('value').appendChild(valueElement);
        document.getElementById('expense').value = '';
        document.getElementById('amount').value = '';
        totalexpense += productAmount
        expense.innerHTML="$" + totalexpense

        if (bal === 0) {
            alert("Your balance is insufficient. Please add more funds.");
        }

    } else {
        alert("Your balance is insufficient. Please add more funds.");
    }
    }
    
   

