var button=document.getElementById("btn");
var row=document.getElementById("row");
var downloadBtn=document.getElementById("btn1");
var DateIdValue=1;
var daysIdValue=20;
var downloaddVar=0;
var checkVar=0;
var checkVar1=0;
var checkVa1r=0;

var input=document.getElementById("uni_Number");

const dayNames=[];
dayNames[6]="سبت";
dayNames[0]="احد";
dayNames[1]="اثنين";
dayNames[2]="ثلاثاء";
dayNames[3]="اربعاء";
dayNames[4]="خميس";
dayNames[5]="جمعة";
const getDaysOfWeekBetweenDates = (sDate ,eDate) => {
var inputValue=document.getElementById("uni_Number").value;
var daysValue=document.getElementById("days").value;

var toText = inputValue.toString(); 
var lastChar = toText.slice(-1); 
 lastDigit = +(lastChar);
const startDate = new Date(sDate)
const endDate = new Date(eDate);
const daysOfWeek = [];
const allYear = [];
endDate.setDate(endDate.getDate() + 1);
let i = 0;
while (i < 7 && startDate < endDate) {
daysOfWeek.push(dayNames[startDate.getDay()]);
allYear.push([startDate.getDate()] +'/'+    [ startDate.getMonth()+1] + '/'+ [startDate.getFullYear()]);
startDate.setDate(startDate.getDate() + 1);
i++;
  }
  //sbt-a7d-thlatha frdi
if(daysValue==1 && isOdd(lastDigit)){
// 0 =sbt 1=a7d 2=athnen 3=thltha2 4=arb3a2
document.getElementById(daysIdValue).innerHTML=daysOfWeek[0] + ' - ' + daysOfWeek[1];
document.getElementById(DateIdValue).innerHTML=allYear[1] + '-' + allYear[0];
if(DateIdValue % 2 == 0){
document.getElementById(daysIdValue).innerHTML=daysOfWeek[3];
document.getElementById(DateIdValue).innerHTML=allYear[3];
}
daysIdValue++;
DateIdValue++;
if(daysIdValue>=35 && DateIdValue>=16){
  daysIdValue=20;
  DateIdValue=1;

}
downloaddVar=11;
}
  //sbt-a7d-thlatha zoji

else if(daysValue==1 && isEven(lastDigit)){
document.getElementById(daysIdValue).innerHTML=daysOfWeek[3];
document.getElementById(DateIdValue).innerHTML=allYear[3];
if(DateIdValue % 2 == 0){
document.getElementById(daysIdValue).innerHTML=daysOfWeek[0] + ' - ' + daysOfWeek[1];
document.getElementById(DateIdValue).innerHTML=allYear[1] + '-' + allYear[0];
  }
  daysIdValue++;
  DateIdValue++;
  if(daysIdValue>=35 && DateIdValue>=16){
  daysIdValue=20;
  DateIdValue=1;

  }
  downloaddVar=12;

  }
  //sbt athnen arb3a frdi
  else if(daysValue==2 && isOdd(lastDigit)){
    // 0 =sbt 1=a7d 4=athnen 3=thltha2 2=arb3a2
    document.getElementById(daysIdValue).innerHTML=daysOfWeek[0] + ' - ' + daysOfWeek[2];
    document.getElementById(DateIdValue).innerHTML=allYear[2] + '-' + allYear[0];
       if(DateIdValue % 2 == 0){
        document.getElementById(daysIdValue).innerHTML=daysOfWeek[4];
        document.getElementById(DateIdValue).innerHTML=allYear[4];
    }
    daysIdValue++;
    DateIdValue++;
    if(daysIdValue>=35 && DateIdValue>=16){
      daysIdValue=20;
      DateIdValue=1;

    }
    downloaddVar=21;

    }
  //sbt athnen arb3a zoji

    else if(daysValue==2 && isEven(lastDigit)){
      // 0 =sbt 1=a7d 4=athnen 3=thltha2 2=arb3a2
      document.getElementById(daysIdValue).innerHTML=daysOfWeek[4];
          document.getElementById(DateIdValue).innerHTML=allYear[4];
         if(DateIdValue % 2 == 0){
         
          document.getElementById(daysIdValue).innerHTML=daysOfWeek[0] + ' - ' + daysOfWeek[2];
          document.getElementById(DateIdValue).innerHTML=allYear[2] + '-' + allYear[0];
      }
      
      daysIdValue++;
      DateIdValue++;
      if(daysValue>=35 && DateIdValue>=16){
        daysIdValue=20;
        DateIdValue=1;

      }
      downloaddVar=22;

      }

    //a7d thaltha frdi
  else if(daysValue==3 && isOdd(lastDigit)){
    document.getElementById(daysIdValue).innerHTML=daysOfWeek[1];
    document.getElementById(DateIdValue).innerHTML=allYear[1];
    if(DateIdValue % 2 == 0){
      document.getElementById(daysIdValue).innerHTML=daysOfWeek[3] ;
      document.getElementById(DateIdValue).innerHTML=allYear[3];
    }
    daysIdValue++;
    DateIdValue++;
    if(daysIdValue>=35 && DateIdValue>=16){
      daysIdValue=20;
      DateIdValue=1;

    }
    downloaddVar=31;

  }
      //a7d thaltha zoji

  else if(daysValue==3 && isEven(lastDigit)){
    document.getElementById(daysIdValue).innerHTML=daysOfWeek[3] ;
    document.getElementById(DateIdValue).innerHTML=allYear[3];
    if(DateIdValue % 2 == 0){
      document.getElementById(daysIdValue).innerHTML=daysOfWeek[1];
      document.getElementById(DateIdValue).innerHTML=allYear[1];
    }
    daysIdValue++;
    DateIdValue++;
    if(daysIdValue>=35 && DateIdValue>=16){
      daysIdValue=20;
      DateIdValue=1;

    }
    downloaddVar=32;

  }
  
  else if(daysValue==4 && isOdd(lastDigit)){
    document.getElementById(daysIdValue).innerHTML=daysOfWeek[2];
    document.getElementById(DateIdValue).innerHTML=allYear[2];
    if(DateIdValue % 2 == 0){
      document.getElementById(daysIdValue).innerHTML=daysOfWeek[4] ;
      document.getElementById(DateIdValue).innerHTML=allYear[4];
    }
    daysIdValue++;
    DateIdValue++;
    if(daysIdValue>=35 && DateIdValue>=16){
      daysIdValue=20;
      DateIdValue=1;

    }
    downloaddVar=41;

  }
    //thnen arb3a frdi

  else if(daysValue==4 && isEven(lastDigit)){
    document.getElementById(daysIdValue).innerHTML=daysOfWeek[4] ;
    document.getElementById(DateIdValue).innerHTML=allYear[4];
    if(DateIdValue % 2 == 0){
      document.getElementById(daysIdValue).innerHTML=daysOfWeek[2];
      document.getElementById(DateIdValue).innerHTML=allYear[2];
    }
    daysIdValue++;
    DateIdValue++;

if(daysIdValue>=35 && DateIdValue>=16){
  daysIdValue=20;
  DateIdValue=1;
}
downloaddVar=42;

  }
  if(daysIdValue>=35 && DateIdValue>=16){
    daysIdValue=20;
    DateIdValue=1;

  }


if(inputValue.length!=0 && daysValue>=1){
  checkVar1=1;
}
else if (inputValue.length==0 ||daysValue<=1){
  checkVar1=0;

}



};
function getInputValue(){
data.forEach(function(entry) {
  getDaysOfWeekBetweenDates(entry.a,entry.b);
});
}
button.onclick=function(){
    getInputValue();
    show(); 
};

//display: none;
function isEven(n) {
  return n % 2 == 0;
}
function isOdd(n) {
  return n % 2 == 1;
}
function show(){
     // input.setCustomValidity('يجب ادخال رقم');
      //input.reportValidity();  
      if(checkVar1==0){
        input.setCustomValidity('يجب ادخال رقم');
       input.reportValidity(); 
      }
     else if(checkVar1>0){

      document.getElementById('cont2').style.display="block"
      downloadBtn.style.display="block"
    }
    console.log(checkVar1);
 }
  

downloadBtn.onclick=function(){
  //sbt a7d thltha frdi
if(downloaddVar==11){
  window.open("https://i.postimg.cc/Qstfnyrp/image.png?dl=1","_self")
}
 //sbt a7d thltha zoji
 else if(downloaddVar==12){
  window.open("https://i.postimg.cc/PHK6yk0X/image.png?dl=1","_self")
 }
 //sbt athnen arb3a frdi
 else if(downloaddVar==21){
  window.open("https://i.postimg.cc/6wmMsf9F/image.png?dl=1","_self")
 }
 //sbt athnen arb3a zoji
 else if(downloaddVar==22){
  window.open("https://i.postimg.cc/5bQnfQyy/image.png?dl=1","_self")
 }
 //a7d thlatha frdi 
 else if(downloaddVar==31){
  window.open("https://i.postimg.cc/hDCpt9Vz/image.png?dl=1","_self")

 }
  //a7d thlatha zoji 
 else if(downloaddVar==32){
 window.open("https://i.postimg.cc/wqxwzWRY/image.png?dl=1","_self")
   }
//athnen arb3a frdi
else if(downloaddVar==41){
  window.open("https://i.postimg.cc/yVyLwqdT/image.png?dl=1","_self")
 }
//athnen arb3a zoji
else if(downloaddVar==42){
  window.open("https://i.postimg.cc/yVHfQ6Vd/image.png?dl=1","_self")
 }
 else {
   alert("ERORR");
 }
}





/*button.onclick=function(){
  show();
};*/

