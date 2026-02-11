const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error" + error;
    }

}
function clearonenumber() {
    display.value = display.value.slice(0,-1);
}

function sqrt(){
    display.value = Math.sqrt(display.value);
}

function sqr(){
    display.value = Math.pow(display.value,2);
}

function power(){
    display.value += "**";
}