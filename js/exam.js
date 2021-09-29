const load = document.querySelector(".reload");
const disp = document.querySelector(".disp");
const finish = document.querySelector(".finish");
let info = document.querySelector("#info");


load.addEventListener("click",function(){
    location.reload();
})

finish.addEventListener("click",function(){
    // alert("Bolan");
    const qn1 = document.exam.q1.value;
    const qn2 = document.exam.q2.value;
    const qn3 = document.exam.q3.value;
// alert(qn1);
    let result = 0;
    //message
    let message = ["Excellent","Try header","Poor Attempt"];
    let answer = ["Ikeja","Abuja","Port Harcourt"];
    

     if(qn1===answer[0]){
       result++;
     }
     if(qn2===answer[1]){
         result++;
     }

     if(qn3===answer[2]){
         result++;
     }

     //check how many question users got correctlly
     //alert(result)
     let check;
     if(result < 1){
          check = 2;
     }
     else if(result > 0 && result < 3){
         check = 1;
     }
     else if(result > 2){
         check = 0;
     }

   info.innerHTML = message[check]; 
   document.getElementById("ans").innerHTML = `You scored ${result}`;
   if(result==1){
    document.getElementById("ans").innerHTML="You Scored "+result+" correct";
    }else if(result > 1){
        document.getElementById("ans").innerHTML="You Scored "+result+" corrects";
     disp.classList.add("good");
    }else{
        document.getElementById("ans").innerHTML="You Scored "+result;
    disp.classList.add("poor");
    }
})
