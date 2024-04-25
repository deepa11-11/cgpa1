var cgpa=[];
//sem 1
function calculatesem1(){
    var sb1 = document.getElementById("sem1-1").value;
    var sb2 = document.getElementById("sem1-2").value;
    var sb3 = document.getElementById("sem1-3").value;
    var sb4 = document.getElementById("sem1-4").value;
    var sb5 = document.getElementById("sem1-5").value;
    var sb6 = document.getElementById("sem1-6").value;
    var sb7 = document.getElementById("sem1-7").value;
    let grade=[];
   
     switch(sb1){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sb2){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sb3){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sb4){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sb5){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sb6){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sb7){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B"||"b":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
    let res=[];
    res.push(grade[0]*4);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*3);
    res.push(grade[4]*3);
    res.push(grade[5]*2);
    res.push(grade[6]*2);
    var temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      cgpa[0]=temp/21;
   document.getElementById("gpasem1").innerHTML="Your Gpa for Sem 1 is " + cgpa[0].toFixed(3);
    
   document.getElementById("overallcgpa").innerHTML="Your over all cgpa " + cgpa[0].toFixed(3);
  }

//sem 2

  function calculatesem2(){
    var  sc1= document.getElementById("sem2-1").value;
    var sc2 = document.getElementById("sem2-2").value;
    var sc3 = document.getElementById("sem2-3").value;
    var sc4 = document.getElementById("sem2-4").value;
    var sc5 = document.getElementById("sem2-5").value;
    var sc6= document.getElementById("sem2-6").value;
    var sc7 = document.getElementById("sem2-7").value;
    var sc8 = document.getElementById("sem2-8").value;
    var sc9 = document.getElementById("sem2-9").value;
    let grade=[];
   
     switch(sc1){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc2){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc3){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc4){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc5){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc6){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc7){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc8){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sc9){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
    var res=[];
    res.push(grade[0]*2);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*4);
    res.push(grade[4]*3);
    res.push(grade[5]*3);
    res.push(grade[6]*2);
    res.push(grade[7]*2);
    res.push(grade[8]*1);
    let temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      cgpa[1]=temp/24;
      document.getElementById("gpasem2").innerHTML="Your GPA for Sem 2 is " + cgpa[1].toFixed(3);
      var result=((cgpa[0]+cgpa[1])/2)
      document.getElementById("overallcgpa").innerHTML="Your over all CGPA " +result.toFixed(2);
  }
   // sem 3

  function calculatesem3(){
    var  sd1= document.getElementById("sem3-1").value;
    var sd2 = document.getElementById("sem3-2").value;
    var sd3 = document.getElementById("sem3-3").value;
    var sd4 = document.getElementById("sem3-4").value;
    var sd5 = document.getElementById("sem3-5").value;
    var sd6= document.getElementById("sem3-6").value;
    var sd7 = document.getElementById("sem3-7").value;
    var sd8 = document.getElementById("sem3-8").value;
    var sd9 = document.getElementById("sem3-9").value;
    let grade=[];
   
     switch(sd1){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd2){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd3){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd4){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd5){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd6){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd7){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd8){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(sd9){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
    var res=[];
    res.push(grade[0]*4);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*3);
    res.push(grade[4]*3);
    res.push(grade[5]*1.5);
    res.push(grade[6]*1.5);
    res.push(grade[7]*1.5);
    res.push(grade[8]*1);
    var temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      cgpa[2]=temp/22.5;
      document.getElementById("gpasem3").innerHTML="Your GPA for Sem 3 is " + cgpa[2].toFixed(3);
      var result=((cgpa[0]+cgpa[1]+cgpa[2])/3)
      document.getElementById("overallcgpa").innerHTML="Your over all CGPA " +result.toFixed(2);
  }

/////sem 4
  function calculatesem4(){
    var  se1= document.getElementById("sem4-1").value;
    var se2 = document.getElementById("sem4-2").value;
    var se3 = document.getElementById("sem4-3").value;
    var se4 = document.getElementById("sem4-4").value;
    var se5 = document.getElementById("sem4-5").value;
    var se6= document.getElementById("sem4-6").value;
    var se7 = document.getElementById("sem4-7").value;
    var se8 = document.getElementById("sem4-8").value;
  
    let grade=[];
   
     switch(se1){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se2){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se3){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se4){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se5){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se6){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se7){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
     switch(se8){
        case "O":
            grade.push(10);
            break;
        case "A+":
            grade.push(9);
            break;
        case "A":
            grade.push(8);
            break;
        case "B+":
            grade.push(7);
            break;
        case "B":
            grade.push(6);
            break;
        case "C":
            grade.push(5);
            break;
        default:
            console.log("s")
     }
    
    var res=[];
    res.push(grade[0]*3);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*4);
    res.push(grade[4]*3);
    res.push(grade[5]*2);
    res.push(grade[6]*2);
    res.push(grade[7]*2);
   
    var temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      cgpa[3]=temp/23;
      document.getElementById("gpasem4").innerHTML="Your GPA for Sem 4 is " + cgpa[3].toFixed(3);
      var result=((cgpa[0]+cgpa[1]+cgpa[2]+cgpa[3])/4);
      document.getElementById("overallcgpa").innerHTML="Your over all CGPA " +result.toFixed(2);
  }

