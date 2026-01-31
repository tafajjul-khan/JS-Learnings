let currentPage = 0;
const totalPages = 6;

// Initialize page indicators
function initPageIndicators() {
  const indicator = document.getElementById("pageIndicator");
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("div");
    dot.className = "page-dot";
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => goToPage(i);
    indicator.appendChild(dot);
  }
}

// Update page indicators
function updateIndicators() {
  const dots = document.querySelectorAll(".page-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentPage);
  });
}

// Update button states
function updateButtons() {
  document.getElementById("prevBtn").disabled = currentPage === 0;
  document.getElementById("nextBtn").disabled = currentPage === totalPages - 1;
}

// Navigate to next page
function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    flipToPage(currentPage);
  }
}

// Navigate to previous page
function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    flipToPage(currentPage);
  }
}

// Go to specific page
function goToPage(pageNum) {
  if (pageNum >= 0 && pageNum < totalPages) {
    currentPage = pageNum;
    flipToPage(currentPage);
  }
}

// Flip pages
function flipToPage(targetPage) {
  const leaves = document.querySelectorAll(".leaf");

  leaves.forEach((leaf, index) => {
    const leafPage = parseInt(leaf.getAttribute("data-page"));

    if (leafPage < targetPage) {
      // PAGE IS FLIPPED TO THE LEFT
      leaf.classList.add("flipped");

      // Keep z-index high during the flip, then drop it
      leaf.style.zIndex = 10 + leafPage;
      setTimeout(() => {
        if (leaf.classList.contains("flipped")) {
          leaf.style.zIndex = leafPage;
        }
      }, 500); // Halfway through the 1s transition
    } else {
      // PAGE IS STACKED ON THE RIGHT
      leaf.classList.remove("flipped");
      leaf.style.zIndex = totalPages - leafPage;
    }
  });

  updateIndicators();
  updateButtons();
}
// Click on leaf to flip
document.querySelectorAll(".leaf").forEach((leaf) => {
  leaf.addEventListener("click", function (e) {
    // Don't flip if clicking on interactive elements
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
      return;
    }

    const pageNum = parseInt(this.getAttribute("data-page"));

    if (this.classList.contains("flipped")) {
      // If flipped, go to previous page
      if (currentPage > 0) {
        previousPage();
      }
    } else {
      // If not flipped, go to next page
      if (pageNum === currentPage && currentPage < totalPages - 1) {
        nextPage();
      }
    }
  });
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    previousPage();
  } else if (e.key === "ArrowRight") {
    nextPage();
  }
});

// Initialize
initPageIndicators();
updateButtons();
