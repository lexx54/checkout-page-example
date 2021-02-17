const d=document,
  $minus=d.querySelectorAll(".minus"),
  $plus=d.querySelectorAll(".plus"),
  $result=d.querySelectorAll(".amount");

  $($minus).click((e)=>{
    if (e.target===$minus[0]){
      $result[0].contents-=1;
    }
    if (e.target===$minus[1]){
      $result[1].contents-=1;
    }
    if (e.target===$plus[0]){
      $result[0].contents+=1;
    }
    if (e.target===$plus[1]){
      $result[1].contents+=1;
    }
  })

  console.log({$minus,$plus,$result})