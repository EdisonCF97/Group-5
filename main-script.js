const majors = document.querySelector(".majors");

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
        case "bm-major":
            target.innerText = "The Department of Business Management, through its committed academic faculty, industry \
            experts, and dedicated staff, provides students with the knowledge and skills in business management necessary \
            to succeed in a wide range of professional careers in management, human resource management, operations \
            management, business analytics, marketing, and international business in small and large companies as well \
            as in non-for-profit organizations.";
            break;
        case "ac-major":
            target.innerText = "As an accounting major, you will learn key accounting principles and sharpen your \
            analytic and communication skills. This degree will provide you with a foundation in general business \
            practices, an understanding of accounting concepts and theory, and the accounting skills needed for jobs \
            in business or government.";
            break;
        case "is-major":
            target.innerText = "As an information systems major, you will choose a double major, such as business \
            and accounting, or select a minor in business law, corporate social responsibility, marketing, \
            organizational behavior, small business management, or urban entrepreneurship. This degree is \
            offered in conjunction with the Department of Computer and Information Science.";
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
        case "bm-major":
            target.innerText = "Business Management";
            break;
        case "ac-major":
            target.innerText = "Accounting";
            break;
        case "is-major":
            target.innerText = "Information Systems";
            break;
        default:
            break;
    }
}));