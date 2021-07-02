document.querySelector('#push').onclick = function(){
    if(document.querySelector('.input-task input').value.length == 0 )
    {
        alert("Please Enter a Task");
    }
    else{
        document.querySelector('.add-task').innerHTML
         += `  <div class="task"> 
                     <span id="taskname"> 
                    ${document.querySelector
                    ('.input-task input').value} 
                    </span> 
                    <button class="delete">
                    <img src="del1img.JPG" width="30" height="30">
                     
                    </button>
                    
                    </div>
        `;

var current_task = document.querySelectorAll(".delete");
for(var i=0;i<current_task.length;i++)
{
    current_task[i].onclick = function(){
        this.parentNode.remove();
    }
}

var tasks=document.querySelectorAll('.task');
for(var i=0;i<tasks.length;i++)
{
    tasks[i].onclick = function(){
        this.classList.toggle('completed');
    }
}

document.querySelector(".input-task input").value = "";

}
}
