
const driver = () => {
    console.log("Child Driver Function Activated")
    let count = 0;
    
    const duplicate_window = (event) => {
        console.log("Child Duplicate Window Function Activated")
        count = count + 1;
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
        const htmlFilePath = "popupWindow.html"
        const popupWindow = window.open(htmlFilePath, "", `width=${width},height=${height},left=${leftmost_position},top=${topmost_position},popup=true`);
        const width2 = Math.trunc(Math.random()*(maxWidth - minWidth)) + minWidth;
        const height2 = Math.trunc(Math.random()*(maxHeight - minHeight)) + minHeight;
        const leftmost_position2 = Math.trunc(Math.random()*(screen.width-width));
        const topmost_position2 = Math.trunc(Math.random()*(screen.height-height));
        const popupWindow2 = window.open(htmlFilePath, "", `width=${width2},height=${height2},left=${leftmost_position2},top=${topmost_position2},popup=true`);
        console.log("popupWindow : ", popupWindow );
        console.log("popupWindow2: ", popupWindow2);
        console.log("Count: ",count);
        //event.currentTarget.close();
    }
    console.log("Window: ", window)
    window.addEventListener("beforeunload", duplicate_window)
}

document.addEventListener("DOMContentLoaded", driver)