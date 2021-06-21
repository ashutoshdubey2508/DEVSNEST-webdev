window.onload=()=>{
      var boxes= document.querySelectorAll('td');
        //  console.log(boxes);
       boxes.forEach((link)=>{
       link.addEventListener("click",function(){
        //    console.log(link.classList);
        link.classList.toggle("white");
       })
       });
    //  var arr=[];
    //  for(var i=0;i<400;i++)
    //  {
    //      arr[i]=0;
    //  }
    //  addEventListener('click',()=>{

    //  })
    //  console.log(boxes[0]);
        // console.log(arr);



        //  addEventListener('click',()=>{
        // console.log(box.classList);
        // if(box.classList.contains('gridchanged')){
            // box.classList.remove('gridchanged');
        // }
        // else{
            // box.classList.add('gridchanged');
        // }
    // })
     
    };