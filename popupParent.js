const driver = () => {
    console.log("Driver Function Activated")
    let count = 0;
    const button = document.getElementById("popup")
    const popup_window = () => {
        console.log("Popup Window Function Activated")
        const minWidth = 100;
        const minHeight = 100;
        const maxWidth = 400;
        const maxHeight = 400;
        const width = Math.trunc(Math.random()*(maxWidth - minWidth)) + minWidth;
        const height = Math.trunc(Math.random()*(maxHeight - minHeight)) + minHeight;
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
        console.log("Executing event listener with popupWindow: ", popupWindow)
        popupWindow.addEventListener("beforeunload", duplicate_window)
    };
    
    const duplicate_window = (event) => {
        console.log("Duplicate Function Activated")
        
        popup_window();
        popup_window();
        count = count + 1;
        console.log(count);
        event.currentTarget.close();
    }
    button.addEventListener("click", popup_window)
}

document.addEventListener("DOMContentLoaded", driver)