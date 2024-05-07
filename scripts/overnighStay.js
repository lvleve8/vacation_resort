"use strict"

window.onload = function(){

    let estimateForm = document.querySelector("#estimateStayForm");

    estimateForm.addEventListener("submit", estimateStay);

}

function estimateStay(event){
    event.preventDefault();

    let estimateForm = event.target;

    let roomTotal = Number(estimateForm.numberOfNights.value) * getRoomRate(estimateForm.checkInDate.value, estimateForm.roomType.value);

    console.log(roomTotal);


    console.log("you submitted the the form");

    //lets see the date they submitted
    console.log(estimateForm.checkInDate.value)


}



//this is the function you put the logic to determine the actual rate
function getRoomRate(checkInDate, roomType){

    //logic goes here to determine the room rate based on the check-in date and room type
    //for now just return 150

    let rate =150;

    if(roomType === "suite"){
        rate =250
    } 
    let currentMonth= newDate(checkInDate).getMonth()+1

    return rate 150;
}  if (roomType ===("suite">6){
    rate=350;
}


    let priceOff = 0;
    if (stayForm.discount.value === "senior") {

        //attaching the discoun to the value
        priceOff = (10 / 100);

    }
    if (stayForm.discount.value === "military") {

        //attaching the discoun to the value
        priceOff = (20 / 100);

    }

}
function getRoomRate(checkIn, roomType) {

    //get the room based on date and room type
    let rate = 150;
    let date = checkIn.split("-")[1]
    //console.log(date)

    if (roomType === "suite") {
        rate = 210;
    }

    if (date >= 6 && date <= 8) {
        rate = 250;
        // console.log("holis");
        if (roomType === "suite") {

            rate = 350;
        }
    }
    //console.log(rate)
    return rate




}