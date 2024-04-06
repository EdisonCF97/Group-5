const majors = document.querySelector(".majors");
const jsConfetti = new JSConfetti() //needed for the confetti animation.

majors.addEventListener("mouseover", (e => {
    const target = e.target;

    if (target.classList[0] !== "majors"){
        target.classList.add("fadein");
        target.addEventListener("animationend", () => {
            target.classList.remove("fadein");
        });
    }

    switch (target.classList[0]){
        case "cs-major":
            target.innerText = "As a computer science student, you will learn the foundations of computer programming \
            and develop a deep understanding of the design of computer systems and their processes and applications. \
            Through a balanced program of commercial, scientific, and theoretical courses, you will become \
            a competent programmer and analyst who can keep pace with rapid changes in the field.";
            break;
        case "ac-major":
            target.innerText = "As an accounting major, you will learn key accounting principles and sharpen your \
            analytic and communication skills. This degree will provide you with a foundation in general business \
            practices, an understanding of accounting concepts and theory, and the accounting skills needed for jobs \
            in business or government.";
            break;
        case "en-major":
            target.innerText = "Whether you would like to be a published writer, an acclaimed poet, or a hard-hitting \
            journalist, an English degree will help you achieve your goals. Or, maybe you are interested in comparative \
            literature, linguistics, or teaching; majoring in English supports these dreams, too. By majoring in English, \
            you will study the work of critically acclaimed authors, and develop the reading, writing, and critical thinking \
            skills prized in fields from public relations to law.";
            break;
        case "md-major":
            target.innerText = "Media literacy is essential to living and working in our rapidly evolving, digitally \
            connected world. Through our small, seminar-style classes, led by accomplished faculty, students will \
            develop a deep understanding of media theory, media law, media management, digital environments, and more. \
            Students gain in-depth knowledge of television, radio, and digital media industries as well perspectives on \
            media more broadly.";
            break;
        default:
            break;
    }
}));

majors.addEventListener("mouseout", (e => {
    const target = e.target;

    if (target.classList[0] !== "majors"){
        target.classList.add("fadein");
        target.addEventListener("animationend", () => {
            target.classList.remove("fadein");
        });
    }
    
    switch (target.classList[0]){
        case "cs-major":
            target.innerText = "Computer Science";
            break;
        case "ac-major":
            target.innerText = "Accounting";
            break;
        case "en-major":
            target.innerText = "English";
            break;
        case "md-major":
            target.innerText = "Media";
            break;
        default:
            break;
    }
}));

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
