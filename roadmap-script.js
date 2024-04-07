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

    document.querySelectorAll("div.bottom-section button").forEach(
        e => e.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    );
}