let currentTab = "all";

const buttonActive = ["bg-[#3B82F6]", "text-white"];
const buttonInactive = ["bg-white", "text-[#64748B]"];

const allJobsContainer = document.getElementById("all-jobs-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");

function switchTab(tab) {
  const togglingButtons = ["all", "interview", "rejected"];
  currentTab = tab;

  for (const t of togglingButtons) {
    const buttonName = document.getElementById("btn-" + t);
    if (t === tab) {
      buttonName.classList.remove(...buttonInactive);
      buttonName.classList.add(...buttonActive);
    } else {
      buttonName.classList.remove(...buttonActive);
      buttonName.classList.add(...buttonInactive);
    }
  }

  const btnContainers = [
    allJobsContainer,
    interviewContainer,
    rejectedContainer,
  ];

  for (const section of btnContainers) {
    section.classList.add("hidden");
  }

  emptyState.classList.add("hidden");

  if (tab === "all") {
    allJobsContainer.classList.remove("hidden");

    if (allJobsContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");

    if (interviewContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");

    if (rejectedContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  updateCounts();
}

// Status Update
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const availableJobs = document.getElementById("available-jobs");

totalCount.innerText = allJobsContainer.children.length;

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedButton = event.target;
    const card = clickedButton.closest(".card");
    const parentCard = card.parentNode;
    const statusLabel = card.querySelector(".status-label");

    if (clickedButton.classList.contains("interview-btn")) {
      statusLabel.innerText = "Interviewed";
      interviewContainer.appendChild(card);
      // updateCounts();
    }

    if (clickedButton.classList.contains("rejected-btn")) {
      statusLabel.innerText = "Rejected";
      rejectedContainer.appendChild(card);
      // updateCounts();
    }

    if (clickedButton.classList.contains("delete-btn")) {
      parentCard.removeChild(card);
    }
    updateCounts();
  });

function updateCounts() {
  const counts = {
    all: allJobsContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };

  totalCount.innerText = counts.all;
  interviewCount.innerText = counts.interview;
  rejectedCount.innerText = counts.rejected;
  availableJobs.innerText = counts[currentTab];

  if (counts[currentTab] < 1) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

updateCounts();
