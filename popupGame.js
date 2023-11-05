const video = document.getElementById('video')
const canvas = document.getElementById('canvas')
const popup = document.getElementById('popup')

const constraints = {
    audio: true,
    video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 }
    }
}

async function startWebCam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        window.stream = stream;
    } catch (e) {
        console.log(e.toString());
    }
}

var context = canvas.getContext('2d');

popup.addEventListener('click', () => {
    context.drawImage(video, 0, 0, 640, 480);
})

startWebCam()

const driver = () => {
    console.log("Driver Function Activated")
    const button = document.getElementById("popup")
    
    
    const popup_window = () => {
        console.log("Popup Window Function Activated")
        const minWidth = 100;
        const minHeight = 100;
        const width = Math.trunc(Math.random()*(window.innerWidth - minWidth)) + minWidth;
        const height = Math.trunc(Math.random()*(window.innerHeight - minHeight)) + minHeight;
        const leftmost_position = Math.trunc(Math.random()*(window.innerWidth-width));
        const topmost_position = Math.trunc(Math.random()*(window.innerHeight-height));
        /*
        console.log("window.width: " + window.innerWidth)
        console.log("window.height: " + window.innerHeight)
        console.log("Leftmost position: " + leftmost_position)
        console.log("Topmost position: " + topmost_position)
        */
        const popupWindow = window.open("", "", `width=${width},height=${height},left=${leftmost_position},top=${topmost_position},popup=true`);
        //console.log("String passed into Window.open: " + `width=${width},height=${height},left=${leftmost_position},top=${topmost_position}`)
        /*
        if window.location.href = <old url>:
            window.location.href = "<new url name>"
        otherwise,
            do nothing
        */
        popupWindow.addEventListener("beforeunload", duplicate_window)
    };
    
    const duplicate_window = (event) => {
        popup_window();
        popup_window(); 
        event.currentTarget.close();
    }
    button.addEventListener("click", popup_window)
}

document.addEventListener("DOMContentLoaded", driver)