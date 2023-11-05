const driver = () => {
    console.log("Parent Driver Function Activated")
    const button = document.getElementById("popup")
    const popup_window = () => {
        console.log("Parent Popup Window Function Activated")
        const minWidth = 100;
        const minHeight = 100;
        const maxWidth = 400;
        const maxHeight = 400;
        const width = Math.trunc(Math.random()*(maxWidth - minWidth)) + minWidth;
        const height = Math.trunc(Math.random()*(maxHeight - minHeight)) + minHeight;
        const leftmost_position = Math.trunc(Math.random()*(screen.width-width));
        const topmost_position = Math.trunc(Math.random()*(screen.height-height));
        /*
        console.log("window.width: " + window.innerWidth)
        console.log("window.height: " + window.innerHeight)
        console.log("Leftmost position: " + leftmost_position)
        console.log("Topmost position: " + topmost_position)
        */
        const popupWindow = window.open("popupWindow.html", "", `width=${width},height=${height},left=${leftmost_position},top=${topmost_position},popup=true`);
        
        //console.log("String passed into Window.open: " + `width=${width},height=${height},left=${leftmost_position},top=${topmost_position}`)

        window.location.href = "finish.html"

        
    };
    
    button.addEventListener("click", popup_window)
}

document.addEventListener("DOMContentLoaded", driver)