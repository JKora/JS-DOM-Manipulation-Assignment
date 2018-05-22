// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredSightings to dataSet initially
var filteredSightings = dataSet;

// renderTable renders the filteredSightings to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSightings.length; i++) {
    // Get get the current sightings object and its fields
    var sighting = filteredSightings[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the sighting object, create a new cell and set its inner text
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // retrieve the user's date search input as string
  var filterDate = $dateInput.value.toString();

  // Set filteredSightings to an array of all sightings whose "datetime" matches the filter
  filteredSightings = dataSet.filter(function(sighting) {
    var sightingDate = sighting.datetime;

    // If true, add the sighting to the filteredSightings, otherwise don't add it
    return sightingDate === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
