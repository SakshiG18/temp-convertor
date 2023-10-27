document.getElementById('button').onclick=tempConvert;
document.getElementById('reset').onclick=clearform;
function tempConvert(){
    let fahrenheit=document.getElementById('fah').value;
    let celcius=document.getElementById('cel').value;

    if(fahrenheit!=''){
        celsius=(parseFloat(fahrenheit)-32)/1.8;
    }
    else{
        fahrenheit=(parseFloat(celcius)*1.8)+32;
    }
    document.getElementById('fah').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('cel').value = parseFloat(celsius).toFixed(1);
}

function clearform(){
    document.getElementById('fah').value ='';
    document.getElementById('cel').value ='';
}