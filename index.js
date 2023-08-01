let kbd = document.querySelectorAll("kbd");


document.addEventListener("keydown",function (event){
    outputMessageOfKey(event);
});


function outputMessageOfKey(event){
    let key = event.code;
    if(isAWhiteKey(key)){
        key = event.key;
        let keyInUpperCase = key.toUpperCase();
        let audioObject = new Audio("whiteKeys/"+keyInUpperCase+".mp3");
        audioObject.load()
        audioObject.play()
    }else if (isABlackKey(key)){
        key = event.key;
        let keyInUpperCase = key.toUpperCase();
        let audioObject = new Audio("blackKeys/"+keyInUpperCase+".mp3");
        audioObject.load()
        audioObject.play()
    }else{
        console.log("The key pressed is not accepted");
    }
}

function isAWhiteKey(key){
    return key === "KeyA" || key === "KeyS" || key === "KeyD"
        || key === "KeyF" || key === "KeyG" || key === "KeyH" || key === "KeyJ";
}
function isABlackKey(key){
    return key === "KeyW" || key === "KeyE" || key === "KeyT" || key === "KeyY" || key === "KeyU";
}