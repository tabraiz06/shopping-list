function addItem(){
   

let itemName=document.getElementById("input-item-name").value;
let itemPrice=parseFloat(document.getElementById("input-item-price").value);

if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Enter valid values (non-empty item name and a valid positive price).");
    return;
}

let tbody=document.getElementById("table-body")
// create new row
let tr=document.createElement("tr")
let nameData=document.createElement("td")
let priceData=document.createElement("td")

nameData.innerText=itemName
priceData.innerText=itemPrice
 
tr.append(nameData)
tr.append(priceData)
tbody.prepend(tr)
// clear input
document.getElementById("input-item-name").value='';
document.getElementById("input-item-price").value='';

//update total
let totalTD=document.getElementById("total")
let grandTotal=parseFloat(document.getElementById("grand-total").innerText)

totalTD.innerText=(grandTotal+itemPrice)
document.getElementById("grand-total").innerText=(grandTotal+itemPrice)



}
document.getElementById("btn").addEventListener("click", addItem);