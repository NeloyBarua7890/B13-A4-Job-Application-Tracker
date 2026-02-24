// Creating empty Array and Storing variable for Interview List Count and Rejected List Count
let interviewList = [];
let rejectedList = [];

// Creating Variables to Store the Count of Each Category Named Total, Interview, and Rejected
let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

// Creating Variables to store the Filter Buttons named All, Interview and Rejected.
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// Creating Variables to Store How Many Job cards I have in the Dashboard. One is for Available Cards and Another is for total Job Count in the Dashboard.
const allCardSection = document.getElementById("allCards");
const dashboardJobCount = document.getElementById("dashboardJobCount");

// Getting the information of main section
const mainContainer = document.querySelector("main");

// Creating Function to Update the Count of Each Category Named Total, Interview, and Rejected. Another is for total job count in the Dashboard.
function updateCounts() {
  totalCount.innerText = allCardSection.children.length;

  dashboardJobCount.innerText = allCardSection.children.length;

  interviewCount.innerText = interviewList.length;

  rejectedCount.innerText = rejectedList.length;
}

updateCounts();

// Creating Function to Toggle the style of the Filter Buttons.

function toggleStyle(id) {
  // adding bg-white, text-gray, and font-medium for all
  allFilterBtn.classList.add("bg-white", "text-[#64748B]", "font-medium");
  interviewFilterBtn.classList.add("bg-white", "text-[#64748B]", "font-medium");
  rejectedFilterBtn.classList.add("bg-white", "text-[#64748B]", "font-medium");

  // if any button has bg-blue, text-white, and font-semibold while selected then remove
  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white", "font-semibold");
  interviewFilterBtn.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "font-semibold",
  );
  rejectedFilterBtn.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "font-semibold",
  );

  const selected = document.getElementById(id); //this is the button that clicked for filter

  currentStatus = id;

  // Adding bg-blue, text-white, font-semibold for selected button and removing all other styles for that button
  selected.classList.remove("bg-white", "text-[#64748B]", "font-medium");
  selected.classList.add("bg-[#3B82F6]", "text-white", "font-semibold");

  // show and hidden particular section
  // step 4 start
  // filtering while clicking the filter button (All, Thriving, Struggling)
  if (id == "thriving-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderThriving();
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "struggling-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderStruggling();
  }
}
