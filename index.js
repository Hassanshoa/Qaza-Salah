function java(){
         let YourAge = document.getElementById('abu').value;
         if(YourAge>12){
           let qazaage = YourAge-12;
           let qazasalah = qazaage*5*365;
          document.getElementById('abu2').innerHTML=qazasalah;
        }
    else{
        document.getElementById('abu2').innerHTML="0";
    }
}