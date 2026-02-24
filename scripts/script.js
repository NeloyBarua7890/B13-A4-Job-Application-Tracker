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

// Creating Variable to Store the Filter Section
const filterSection = document.getElementById("filtered-section");

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
  //   if (id == "thriving-filter-btn") {
  //     allCardSection.classList.add("hidden");
  //     filterSection.classList.remove("hidden");
  //     renderThriving();
  //   } else if (id == "all-filter-btn") {
  //     allCardSection.classList.remove("hidden");
  //     filterSection.classList.add("hidden");
  //   } else if (id == "struggling-filter-btn") {
  //     allCardSection.classList.add("hidden");
  //     filterSection.classList.remove("hidden");
  //     renderStruggling();
  //   }
}

// Event Delegation for Interview and Rejected Buttons

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const jobDescription =
      parentNode.querySelector(".jobDescription").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = "Interview";

    const cardInfo = {
      companyName,
      jobTitle,
      jobDescription,
      status: "Interview",
      notes,
    };

    const interviewExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!interviewExist) {
      interviewList.push(cardInfo);
    }

    // step 2 finish
    // removing the plant from struggling list
    strugglingList = strugglingList.filter(
      (item) => item.plantName != cardInfo.plantName,
    );

    // after remove rerender the html
    if (currentStatus == "struggling-filter-btn") {
      renderStruggling();
    }

    calculateCount();
  } else if (event.target.classList.contains("struggling-btn")) {
    const parenNode = event.target.parentNode.parentNode;

    const plantName = parenNode.querySelector(".plantName").innerText;
    const light = parenNode.querySelector(".light").innerText;
    const water = parenNode.querySelector(".water").innerText;
    const status = parenNode.querySelector(".status").innerText;
    const notes = parenNode.querySelector(".notes").innerText;

    parenNode.querySelector(".status").innerText = "Struggle";

    const cardInfo = {
      plantName,
      light,
      water,
      status: "Struggle",
      notes,
    };

    const plantExist = strugglingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      strugglingList.push(cardInfo);
    }

    // removing the plant from thriving list
    thrivingList = thrivingList.filter(
      (item) => item.plantName != cardInfo.plantName,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }
    updateCounts();
  }
});

// rendering the Interview list and the Rejected List

function renderInterview() {
  // make the filterSection empty every time
  filterSection.innerHTML = "";

  // creating innerHtml
  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className =
      "card flex justify-between p-6 bg-white shadow-lg rounded-lg";
    div.innerHTML = `
         <div class="space-y-5">
            <div class="space-y-1">
              <p class="companyName text-xl font-semibold text-[#002C5C]">
                Mobile First Corp
              </p>
              <p class="jobTitle text-[#64748B]">React Native Developer</p>
            </div>

            <div class="flex gap-2">
              <p class="jobDescription text-[#64748B]">
                Remote • Full-time • $130,000 - $175,000
              </p>
            </div>

            <div class="space-y-2">
              <button
                class="status text-[#002C5C] font-medium bg-[#EEF4FF] rounded-sm px-3 py-2"
              >
                Not Applied
              </button>
              <p class="notes text-[#323B49]">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
              </p>
            </div>

            <div class="flex gap-5">
              <button
                class="interview-btn text-[#10B981] border-2 border-[#10B981] font-semibold px-3 py-2 rounded-sm cursor-pointer"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn text-[#EF4444] border-2 border-[#EF4444] font-semibold px-3 py-2 rounded-sm cursor-pointer"
              >
                REJECTED
              </button>
            </div>
          </div>

          <div>
            <button
              class="btn-delete bg-white border-2 border-[#F1F2F4] text-[#64748B] rounded-full w-16 h-16"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;
    filterSection.appendChild(div);
  }
}

// function renderStruggling() {
//     // make the filterSection empty every time
//     filterSection.innerHTML = ''
//     // crating innerHtml
//     for (let struggle of strugglingList) {

//         let div = document.createElement('div');
//         div.className = 'card flex justify-between border p-8'
//         div.innerHTML = `
//          <div class="space-y-6">
//                     <!-- part 1 -->
//                     <div>
//                         <p class="plantName text-4xl">${struggle.plantName}</p>
//                         <p class="latinName">Latin Name</p>
//                     </div>

//                     <!-- part 2 -->
//                     <div class="flex gap-2">
//                         <p class="light bg-gray-200 px-5">Bright Indicate</p>
//                         <p class="water bg-gray-200 px-5">weekly</p>
//                     </div>
//                     <!-- part 3 -->
//                      <p class="status">${struggle.status}</p>
//                      <p class="notes">New leaf unfurling by the east window.</p>

//                      <div class="flex gap-5">
//                         <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
//                         <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
//                      </div>
//                 </div>

//                 <!-- main part 2 -->
//                 <div>
//                     <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
//                 </div>
//         `
//         filterSection.appendChild(div)
//     }
// }
