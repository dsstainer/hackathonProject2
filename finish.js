
const driver = () => {
    console.log("Finishing sequence activated")
    const button = document.getElementById("finish_button")
    const finish_game = () => {

        /*const windowArray = .getAll({
            windowTypes: ['popup']
        })
        windowArray.forEach(element => {
            element.close()
        });
        document.location.href = "score.html"*/
    }
    button.addEventListener("click", finish_game)
}

document.addEventListener("DOMContentLoaded", driver)