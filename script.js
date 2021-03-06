const d=document,
  $minus=d.querySelectorAll(".minus"),
  $plus=d.querySelectorAll(".plus"),
  $result=d.querySelectorAll(".amount"),
  $price=d.querySelectorAll(".price1"),
  $shippingPrice=d.querySelector('.shippingPrice').innerText,
  $inputs=d.querySelectorAll("input");
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
   //update the values
  [totalPrice1,totalPrice2]=[
    parseFloat($price[0].innerText.split("$")[1])*amount1,
    parseFloat($price[1].innerText.split("$")[1])*amount2
  ];
  $result[0].innerText=amount1;
  $result[1].innerText=amount2;
  $totalPrice.innerText=`${(totalPrice1+totalPrice2+shippping).toFixed(2)}$`;

  if(e.target.matches(".btn")){
    [...$inputs].every(ele=>ele.value!=="")
    ?createMessage("success")
    :createMessage("fail");
  }
})

function createMessage(message){
  const $head=d.createElement("div")
  para=d.createElement("p"),
  $body=d.body;
  $head.classList.add(message);
  
  para.textContent=message=="success"? "Information sent":"Some Fields need to be Fill";
  $head.appendChild(para);
  $body.appendChild($head);

  setTimeout(()=>{
  $body.removeChild($head)
  },1500)
}


