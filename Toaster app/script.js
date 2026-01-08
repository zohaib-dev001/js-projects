function createtoaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;

        if (config.theme === "dark") {
            div.style.backgroundColor = "black";
            div.style.color = "white";
        } else if (config.theme === "light") {
            div.style.backgroundColor = "green";
            div.style.color = "black";
        }

        let posX = config.positionX === "left" ? "left" : "right";
        let posY = config.positionY === "top" ? "top" : "bottom";
        div.style[posX] = "20px"
        div.style[posY] = "20px"

        document.querySelector(".parent").appendChild(div);
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = createtoaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: "3",
});
toaster("Form submitted successfully!");
setTimeout(() => {
    toaster("Your request has been sent.")
}, 2000);

setTimeout(() => {
    toaster("Error: Please fill all fields.")
}, 1500);
