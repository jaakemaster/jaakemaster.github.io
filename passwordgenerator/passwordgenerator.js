const passwordArray=[0,6,7,8,9,"b","C","d",
"f","G","h","I","j","K","M","n","O","p","Q","r","S","t",
"v","W","x","Y","z","@","*","#","&","$","!"];
let yourPassword="";
function getIndex(index){
    return passwordArray[index];
   
}

function random(){
    for(let i=0;i<12;i++){
        let randomPassword=Math.floor(
            Math.random()*passwordArray.length
        );
        yourPassword+=getIndex(randomPassword);
    }
    document.getElementById('generatedPassword').innerHTML=yourPassword;
}
function clearPassword(){
    document.getElementById('generatedPassword').innerHTML='';
    yourPassword='';
}

