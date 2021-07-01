
var myform=document.getElementById('myform')

myform.addEventListener('submit',function(e){

    e.preventDefault()
    console.log(20)

    const platform = document.getElementById('platform').value   

    const handle=document.getElementById('handle').value


       var url='https://competitive-coding-api.herokuapp.com/api/'+platform+'/'+handle
    //    console.log(url)
       fetch(url)
.then((res) => res.json())
.then((data) => {
 document.getElementById('status').innerHTML = "Status:\t"+data.status
 document.getElementById('rating').innerHTML = "Rating :\t"+data.rating
 document.getElementById('maxrating').innerHTML = "Max-Rating :\t"+data["max rating"]
 document.getElementById('rank').innerHTML = "Rank :\t"+data.rank
    
})

     })
