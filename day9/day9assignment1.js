const student={
    Name : "Ashutosh",
    course : "Btech",
     Marks : function(a,b){
      os  : "1008";
      datastructure : "2009";  
       console.log(this);
       console.log(a+b);
    }
  }
  
  const teacher={
    Name : "Devsnest",
    course : "Web Dev",
    Languages : function(){
      html : "basic layout";
      css : "styling";
      javascript : "responsive";
    }
  }
  
  
  // console.log(student);
  
  student.Marks.call(teacher,3 ,4)
  student.Marks.apply(teacher,[2,4])
  var s=student.Marks.bind(teacher,2,4)
   console.log(s);