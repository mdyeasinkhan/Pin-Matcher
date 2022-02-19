function newPin(){
    const genpin = Math.round(Math.random()*10000);
    //  const genpin = Math.round(Math.random()*9000) + 1000;
    //  console.log(genpin);
    const pinString = genpin + "";
    if(pinString.length === 4){
        return genpin;
    } else{
        console.log("3 digit pin generated!!!");
        return newPin();
    }
}

document.getElementById("gnPin").addEventListener("click", function(){
   let pin = newPin();
   let generatePinInput =  document.querySelector(".generatedPin")
   generatePinInput.value = pin;
   generatePinInput.style.textAlign = "center";

}) 

document.querySelector(".calc-body").addEventListener("click", function(e){
    let number = e.target.innerText;
    let showValue = document.querySelector(".showValue");

    if(isNaN(number)){
        if(number == "C" || number == "<"){
            showValue.value = "";
        }
    }else {
        showValue.value += number;
    }
})


 // Remove Notification

 document.querySelector('.wrong-pin').style.display = "none";
 document.querySelector('.correct-pin').style.display = "none";

 function verification(){
    let genPin = document.querySelector(".generatedPin");
    let showValue = document.querySelector(".showValue");

    if(genPin.value == showValue.value){
        document.querySelector('.correct-pin').style.display = "block";
        document.querySelector('.wrong-pin').style.display = "none";
        document.querySelector(".submit-btn").disabled = true;
        document.querySelector(".submit-btn").style.backgroundColor = "green";
    }else{
        document.querySelector('.wrong-pin').style.display = "block";
        document.querySelector('.correct-pin').style.display = "none";

        const tryLeft = document.getElementById("tryLeft").innerText;
        console.log(typeof(tryLeft));
        let newTry = parseInt(tryLeft);

        if(newTry > 0){
            newTry -= 1;
        }
        document.getElementById("tryLeft").innerText = newTry;

        if (newTry === 0){
            document.querySelector(".submit-btn").disabled = true;
            document.querySelector(".submit-btn").style.backgroundColor = "orange";
        }

    }
    genPin.value = "";
    showValue.value = "";
 }
 document.querySelector(".submit-btn").addEventListener("click", verification)