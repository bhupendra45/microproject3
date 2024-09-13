const display=document.getElementById("inputbox")
let i=0;
function appendNumber(input){
display.value+=input;
i++;
}
function calculate(){
    try{
display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}
