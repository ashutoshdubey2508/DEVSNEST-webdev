window.onload=()=>{

 var boxes=document.querySelectorAll('td');
 var noofbox=36;
 var clickbox=0;
//  console.log(boxes);
  boxes.forEach((link)=>{
    link.addEventListener("click",function(){ 
        link.classList.toggle("white");
        // console.log(link.classList);
    if(link.classList.contains('gridclicked')){     
        link.classList.remove('gridclicked');
        noofbox++;
    }
     else{
        
         link.classList.add('gridclicked');
         noofbox--;
         
     }
     console.log(noofbox);
      document.getElementById("currid").innerHTML=36-noofbox;
      document.getElementById("totalid").innerHTML = noofbox;
        
    })


  });




};