const jsConfetti = new JSConfetti()
window.onload = () => {
    var colors = [
        "#97a2ff",
        "#ffabab",
        "#bffcc6",
        "#ffc6ff",
        "#ccd5ae",
        "#fdcfb3",
        "#f6e785",
        "#faafa5",
        "#a885ee",
        "#f2d2ba",
        "#c2c3f0",
        "#e4e4e4",
        "#bcd4e6",
        "#ddedea"
    ];

    document.querySelectorAll("div.container button").forEach(
        e => e.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    );
}

document.querySelectorAll("div.container button").forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('green-shadow');
    });
});


const shareBtn = document.querySelector("#shareBtn");//Share button functionality
shareBtn.addEventListener("click", (event) => {
    if (navigator.share) {
        navigator.share({
            title: "BC Course Map",
            url: "https://edisoncf97.github.io/Group-5.github.io/",
        }).then(() => {
            console.log("Thanks for sharing!");
            jsConfetti.addConfetti();
        }).catch((err) => {
            console.log("Error using Web share API :")
            console.log(err);
        })
    }
    else {
        alert("Browser doesn't support this Web share API")
    }
})
