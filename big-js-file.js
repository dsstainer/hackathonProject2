
const driver = () => {
    let windowArray = new Array()
    const start_button = document.getElementById("popup")
    const popup_window = () => {
        const minWidth = 100;
        const minHeight = 100;
        const maxWidth = 400;
        const maxHeight = 400;
        const width = Math.trunc(Math.random()*(maxWidth - minWidth)) + minWidth;
        const height = Math.trunc(Math.random()*(maxHeight - minHeight)) + minHeight;
        const leftmost_position = Math.trunc(Math.random()*(screen.width-width));
        const topmost_position = Math.trunc(Math.random()*(screen.height-height));
        const popupWindow = window.open("popupWindow.html", "", `width=${width},height=${height},left=${leftmost_position},top=${topmost_position},popup=true`);
        windowArray.push(popupWindow)
        window.location.href = "finish.html"
    };
    start_button.addEventListener("click", popup_window)
     
    const duplicate_window = (event) => {
        const minWidth = 100;
        const minHeight = 100;
        const maxWidth = 400;
        const maxHeight = 400;
        const width = Math.trunc(Math.random()*(maxWidth - minWidth)) + minWidth;
        const height = Math.trunc(Math.random()*(maxHeight - minHeight)) + minHeight;
        const leftmost_position = Math.trunc(Math.random()*(screen.width-width));
        const topmost_position = Math.trunc(Math.random()*(screen.height-height));
        const htmlFilePath = "popupWindow.html"
        const popupWindow = window.open(htmlFilePath, "", `width=${width},height=${height},left=${leftmost_position},top=${topmost_position},popup=true`);

        const width2 = Math.trunc(Math.random()*(maxWidth - minWidth)) + minWidth;
        const height2 = Math.trunc(Math.random()*(maxHeight - minHeight)) + minHeight;
        const leftmost_position2 = Math.trunc(Math.random()*(screen.width-width));
        const topmost_position2 = Math.trunc(Math.random()*(screen.height-height));
        const popupWindow2 = window.open(htmlFilePath, "", `width=${width2},height=${height2},left=${leftmost_position2},top=${topmost_position2},popup=true`);
        windowArray.push(popupWindow)
        windowArray.push(popupWindow2)
    }
    window.addEventListener("beforeunload", duplicate_window)
    

    const finish_button = document.getElementById("finish_button")
    const finish_game = () => {
            windowArray.forEach((element)=>{
                element.removeEventListener('beforeunload', duplicate_window)
                element.close()
                window.location.href = 'score.html'
            })
        }
    finish_button.addEventListener("click", finish_game)
}
document.addEventListener("DOMContentLoaded", driver)