This is a professional and comprehensive README.md file for your project. It explains the project structure, features, technical implementation, and usage instructions in clear English.

📅 Weekly Task & Time Tracker
A lightweight, responsive web application built to track daily activities and automatically calculate time spent across different categories like Meetings, Coding, and Code Reviews.

🚀 Features
Smart Input Validation: Restricts the "Day" input to a specific range (1–7) using real-time keyboard event interception.

Dynamic Data Entry: Adds tasks to a structured table without refreshing the page.

Automated Time Calculation: Converts start and end times into decimal hours and aggregates them by category.

Live Statistics: Dashboard cards update instantly to show total hours spent on specific professional activities.

Responsive Design: Built with Bootstrap 5 to ensure a seamless experience across mobile, tablet, and desktop devices.

🛠️ Tech Stack
HTML5: Semantic structure.

CSS3 (Bootstrap 5): Professional styling and grid layout.

JavaScript (ES6+): Core logic for DOM manipulation, event handling, and time arithmetic.

📂 Project Structure
index.html: Contains the form, data table, and statistical summary cards.

javascript.js:

ControlDayInput(): Manages advanced input validation using currentValue + key logic.

AddRow(): Handles DOM insertion for new data entries.

calculateTotalHoursWithinCategory(): Logic for string-to-date conversion and mathematical aggregation of hours.

clearForm(): Resets the UI state after a successful submission.

git clone: https://github.com/seljanzeynalovacode/mini_daily_plan.git

⚙️ Technical Highlights
Advanced Input Protection
The application uses a predictive validation technique. Instead of checking the value after it is typed, the ControlDayInput function calculates the future value of the input by combining the current state with the pressed key. If the result exceeds "7", the event is cancelled (e.preventDefault()).

Time Difference Logic
Time calculations are performed by parsing input strings into JavaScript Date objects:

JavaScript
var duration = (endTime - startTime) / (1000 * 60 * 60); // Result in decimal hours
📖 How to Use
Enter Day: Input a day number (1 to 7).

Select Time: Choose the start and end time for the activity.

Choose Category: Select the type of work (Meeting, Write Code, etc.).

Submit: Click "Add". The table will populate, the form will clear, and the summary cards at the bottom will update automatically.
