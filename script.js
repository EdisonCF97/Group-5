$(document).ready(function() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

    const courses = [
        "Pre-Calc Math 1011",
        "Calc 1 Math 1201",
        "Calc 2 Math 1206",
        "STATS Math 2501",
        "Discrete Structures CISC 2210",
        "Architecture CISC 3310",
        "Intro Java CISC 3115",
        "Modern Techniques CISC 3115",
        "Data Structures CISC 3130",
        "English 2 ENGL 1012",
        "Ethics CISC 2820W",
        "Algorithms CISC 3230",
        "Operating Systems CISC 3320",
        "Programming Paradigms in C++ CISC 3142",
        "Web App CISC 3140",
        "Project CISC 4900",
        "Advanced CISC Elective (1)",
        "Advanced CISC Elective (2)",
        "Advanced CISC Elective (3)"
        // Add more courses here if needed
    ];

    const courseList = $("#sortable");
    const scheduleCalendar = $("#schedule-calendar");

    // Function to create course list items
    function createCourseItem(course) {
        const li = $("<li>").text(course).addClass("ui-state-default");
        return li;
    }

    // Initialize course list
    courses.forEach(course => {
        const courseItem = createCourseItem(course);
        courseList.append(courseItem);
    });

    // Make course list sortable
    courseList.sortable();

    // Function to initialize schedule table
    function initializeScheduleTable() {
        // Clear existing schedule table
        scheduleCalendar.find("tbody").empty();

        // Generate time rows
        times.forEach(time => {
            const row = $("<tr>");
            row.append($("<td>").text(time));
            days.forEach(day => {
                const cell = $("<td>").addClass("schedule-cell course").text("");
                row.append(cell);
            });
            scheduleCalendar.find("tbody").append(row);
        });
    }

    // Initialize schedule table
    initializeScheduleTable();

    // Make schedule builder cells droppable
    $(".schedule-cell.course").droppable({
        drop: function(event, ui) {
            const course = ui.draggable.text();
            $(this).text(course);
        }
    });
});