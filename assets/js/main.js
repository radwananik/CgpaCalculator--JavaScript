const Calculation =() =>{


   let subjectOne = document.getElementById("subjectOne").value;
   let subjectTwo = document.getElementById("subjectTwo").value;
   let subjectThree = document.getElementById("subjectThree").value;
   let subjectFour = document.getElementById("subjectFour").value;


   let subjectResult =parseFloat(subjectOne)+parseFloat(subjectTwo)+parseFloat(subjectThree)+parseFloat(subjectFour);

   let percentage = (subjectResult/400) * 100;

   // Grade Show

   let  yourGrade;
   if(percentage <= 100 && percentage >= 80){
      yourGrade = "A+"
   }else if(percentage <= 79 && percentage >= 75){
      yourGrade = "A"
   }else if(percentage <= 74 && percentage >= 70){
      yourGrade = "A-"
   }else if(percentage <= 69 && percentage >= 65){
      yourGrade = "B+"
   }else if(percentage <= 64 && percentage >= 60){
      yourGrade = "B"
   }else if(percentage <= 59 && percentage >= 55){
      yourGrade = "B-"
   }else if(percentage <= 54 && percentage >= 50){
      yourGrade = "C+"
   }else if(percentage <= 49 && percentage >= 45){
      yourGrade = "C"
   }else if(percentage <= 44 && percentage >= 40){
      yourGrade = "D"
   }else{
      yourGrade = "F"
   }

   //result show
   document.getElementById("resultShow").innerHTML = `Your Semester Grade is ${yourGrade} and Total Percentage ${percentage}`
   
}


