const driver = () => {
    console.log("Driver Function Activated")
    const button = document.getElementById("popup")
    const popup_window = () => {
        console.log("Popup Window Function Activated")
        const width = 300;
        const height = 200;
        const leftmost_position = Math.trunc(Math.random()*(window.innerWidth-width));
        const topmost_position = Math.trunc(Math.random()*(window.innerHeight-height));

        console.log("window.width: " + window.innerWidth)
        console.log("window.height: " + window.innerHeight)
        console.log("Leftmost position: " + leftmost_position)
        console.log("Topmost position: " + topmost_position)
        
        const myWindow = window.open("", "", `width=${width},height=${height},left=${leftmost_position},top=${topmost_position}`);
        console.log("String passed into Window.open: " + `width=${width},height=${height},left=${leftmost_position},top=${topmost_position}`)
    };
    button.addEventListener("click", popup_window)
}

document.addEventListener("DOMContentLoaded", driver)