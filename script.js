const d=document,
  $minus=d.querySelectorAll(".minus"),
  $plus=d.querySelectorAll(".plus"),
  $result=d.querySelectorAll(".amount"),
  $price=d.querySelectorAll(".price1"),
  $shippingPrice=d.querySelector('.shippingPrice').innerText;
  let $totalPrice=d.querySelector(".totalPrice");
  let [amount1,amount2]= [parseInt($result[0].innerText),parseInt($result[1].innerText)];
let [totalPrice1,totalPrice2,shippping]=[0,0,parseInt($shippingPrice)]


d.addEventListener("click",e=>{
  
  switch(e.target){
    case $minus[0]:
      amount1<=0? amount1=0 :amount1--;
    break;
    case $minus[1]:
      amount2<=0 ?amount2=0 :amount2--;
    break;
    case $plus[0]:
      amount1++;
    break;
    case $plus[1]:
      amount2++;
    break;
  }
  [totalPrice1,totalPrice2]=[
    parseFloat($price[0].innerText.split("$")[1])*amount1,
    parseFloat($price[1].innerText.split("$")[1])*amount2
  ];
  //update the values
  $result[0].innerText=amount1;
  $result[1].innerText=amount2;
  $totalPrice.innerText=`${(totalPrice1+totalPrice2+shippping).toFixed(2)}$`;

  // $totalPrice.innerText=(amount1*parseInt($price[0].innerText)+amount2*parseInt($price[1].innerText))+parseInt($shippingPrice.innerText)
})
