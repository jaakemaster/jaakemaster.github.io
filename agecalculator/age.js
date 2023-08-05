let today=new Date();

function calculateAge(){
    let dateBorn=new Date(document.getElementById('date').value);
    let ageYears=today.getFullYear()-dateBorn.getFullYear();
    let ageMonths=today.getMonth()-dateBorn.getMonth();
    let ageDays=today.getDate()-dateBorn.getDate();
    /*if(ageMonths < 0 ){
        ageYears--;
        ageMonths+=12;
    }*/
    if(ageMonths<0 || ageMonths==0 && ageDays<0){
        let lastMonthDay=new Date(today.getFullYear(),today.getMonth(),0).getDate();
        ageDays=lastMonthDay-dateBorn.getDate()+today.getDate();
        ageYears--;
        ageMonths+=11;
        if(ageDays>lastMonthDay){
            let birthMonthLastDay=new Date(dateBorn.getFullYear(),dateBorn.getMonth(),0).getDate();
            ageMonths+=1;
            ageDays=ageDays-birthMonthLastDay;
        }
    }
    else if(ageMonths<0 && ageDays<0){
        let lastMonthDay=new Date(today.getFullYear(),today.getMonth(),0).getDate();
        ageDays=lastMonthDay-dateBorn.getDate()+today.getDate();
        ageYears--;
        ageMonths+=11;
        if(ageDays>lastMonthDay){
            let birthMonthLastDay=new Date(dateBorn.getFullYear(),dateBorn.getMonth(),0).getDate();
            ageMonths+=1;
            ageDays=ageDays-birthMonthLastDay;
        }
    }
    document.getElementById('years').innerHTML=ageYears;
    document.getElementById('months').innerHTML=ageMonths;
    document.getElementById('days').innerHTML=ageDays;
}