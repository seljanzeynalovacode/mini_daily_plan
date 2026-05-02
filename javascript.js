function AddRow() {
  var table = document.getElementById("dataTableBody");
  var day = document.getElementById("day").value;
  var startTime = document.getElementById("startTime").value;
  var endTime = document.getElementById("endTime").value;
  var category = document.getElementById("category").value;
  var newRow = table.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  cell1.innerHTML = day;
  cell2.innerHTML = startTime;
  cell3.innerHTML = endTime;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = category;
}
//use sumbit on prevent default
document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    AddRow();
    clearForm();
    calculateTotalHoursWithinCategory();
  });
//clear the form after submit function
function clearForm() {
  document.getElementById("day").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";
  document.getElementById("category").value = "";
}

function calculateTotalHoursWithinCategory() {
  var table = document.getElementById("dataTableBody");
  var categoryHours = {};
  for (var i = 0, row; (row = table.rows[i]); i++) {
    var category = row.cells[3].innerHTML;
    var startTime = new Date("2026-05-02T" + row.cells[1].innerHTML);
    var endTime = new Date("2026-05-02T" + row.cells[2].innerHTML);
    var duration = (endTime - startTime) / (1000 * 60 * 60); // Convert milliseconds to hours
    if (!categoryHours[category]) {
      categoryHours[category] = 0;
    }
    categoryHours[category] += duration;
  }
  // Update the total hours for each category
  document.getElementById("totalMeetingTime").innerHTML = categoryHours[
    "Meeting"
  ]
    ? categoryHours["Meeting"].toFixed(2) + " hours"
    : "0 hours";
  document.getElementById("totalWriteCodeTime").innerHTML = categoryHours[
    "WriteCode"
  ]
    ? categoryHours["WriteCode"].toFixed(2) + " hours"
    : "0 hours";
  document.getElementById("totalReviewCodeTime").innerHTML = categoryHours[
    "Review Code"
  ]
    ? categoryHours["Review Code"].toFixed(2) + " hours"
    : "0 hours";
}

function ControlDayInput(e) {
  const izinliTuslar = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Delete",
  ];

  if (izinliTuslar.includes(e.key)) return;

  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
    return;
  }

  // mevcut değer + yeni basılan tuş
  const currentValue = e.target.value;
  const newValue = currentValue + e.key;

  if (parseInt(newValue) > 7) {
    document.getElementById("dayAlert").style.display = "block";
    e.preventDefault();
  } else {
    document.getElementById("dayAlert").style.display = "none";
  }
}
