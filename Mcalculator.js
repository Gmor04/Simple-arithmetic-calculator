let yourname = document.getElementById( "myfirstinput" )
let diplayname = document.getElementById( "myfirst-h2" )
function sumbitname() {
    let collet = yourname.value
    diplayname.innerHTML = collet
    yourname.value = "";
}


let upperdis = document.getElementById("mydisplayinpu")
let lowerdis = document.getElementById("myh1")
let fNum = 0;
let operator;
let sNum = 0;



function clicky(b){
    
    lowerdis.innerHTML += b

}

function myoperator(c) {

    if (!c) {
        return
        
    } else {
        operator = c
        fNum = lowerdis.innerHTML
        upperdis.innerHTML = fNum + c
        lowerdis.innerHTML =  '';
        
    }

}


function displayvalue(){
   sNum = lowerdis.innerHTML
   upperdis.innerHTML = fNum + operator + sNum
   lowerdis.innerHTML =  '';


    if(operator == "+"){
       
        let sum = Number(fNum) + Number(sNum)

        lowerdis.innerHTML = sum

    }else if (operator == "-") {
        let subs = Number(fNum) - Number(sNum)
        lowerdis.innerHTML = subs

    }else if (operator == "/") {
        let div = Number(fNum) / Number(sNum)
        lowerdis.innerHTML = div

    }else if (operator == "*") {
        let mult = Number(fNum) * Number(sNum)
        lowerdis.innerHTML = mult

    }else if (operator == "**") {
        let rasipow = Number(fNum) ** Number(sNum)
        lowerdis.innerHTML = rasipow

    }else if (operator == "%") {
        let moldul = Number(fNum) % Number(sNum)
        lowerdis.innerHTML = moldul

    }
    
    else {
        upperdis.innerHTML = ''

        let invalid =  'No stress me🙄'
        lowerdis.innerHTML = invalid

    }




}
let statuss = 'off'
function off(event){
    if (statuss == 'off') {
        upperdis.style.visibility = 'visible' 
        lowerdis.style.visibility = 'visible' 
        lowerdis.innerHTML = ''
        lowerdis.innerHTML = '0'
        event.target.innerHTML = 'OFF'
        statuss = 'on'
    }
    else{
        upperdis.style.visibility = 'hidden' 
        lowerdis.style.visibility = 'hidden' 
        lowerdis.innerHTML = ''
        event.target.innerHTML = 'ON'
        statuss = 'off'
    }
}

function myclear() {
    upperdis.innerHTML = ''
    // lowerdis.innerHTML = ""
    let clear = 0
    lowerdis.innerHTML = clear
}

function mywelco() {
    upperdis.innerHTML = ''

    let wellc = 'How can i help u 🙄?'
    lowerdis.innerHTML = wellc
}

