document.addEventListener("keydown", handler);

function handler(){
    if (event.code === "KeyA") {
        let audioA = new Audio("./white_keys/A.mp3");
        audioA.play();
    } else if (event.code === "KeyS") {
        let audioS = new Audio("./white_keys/S.mp3");
        audioS.play();
    } else if (event.code === "KeyD") {
        let audioD = new Audio("./white_keys/D.mp3");
        audioD.play();
    } else if (event.code === "KeyF") {
        let audioF = new Audio("./white_keys/F.mp3");
        audioF.play();
    } else if (event.code === "KeyG") {
        let audioG = new Audio("./white_keys/G.mp3");
        audioG.play();
    }else if (event.code === "KeyH") {
        let audioG = new Audio("./white_keys/G.mp3");
        audioG.play();
    } else if (event.code === "KeyJ") {
        let audioJ = new Audio("./white_keys/J.mp3");
        audioJ.play();
    } else if (event.code === "KeyW") {
        let audioW = new Audio("./black_keys/W.mp3");
        audioW.play();
    } else if (event.code === "KeyE") {
        let audioE = new Audio("./black_keys/E.mp3");
        audioE.play();
    } else if (event.code === "KeyT") {
        let audioT = new Audio("./black_keys/T.mp3");
        audioT.play();
    } else if (event.code === "KeyY") {
        let audioY = new Audio("./black_keys/Y.mp3");
        audioY.play();
    } else if (event.code === "KeyU") {
        let audioU = new Audio("./black_keys/U.mp3");
        audioU.play();
    }
    else {
        console.log("Warning")
    }
}