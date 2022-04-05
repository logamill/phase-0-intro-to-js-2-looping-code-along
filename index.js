const arr = []

function writeCards(guestName, eventName) {
    for(let i = 0; i < guestName.length; i++) {
        arr.push(`Thank you, ${guestName[i]}, for the wonderful ${eventName} gift!`)
        debugger;
    }
    return arr;
}

function countDown(numberProvided) {
    while(numberProvided >= 0) {
        console.log(numberProvided--)
    }
}