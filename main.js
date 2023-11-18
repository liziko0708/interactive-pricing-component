// Change the billing opption
const billingOptionButton = document.querySelector(".side-changing-button");
const inMonthOrYear = document.querySelector(".price-in");

billingOptionButton.addEventListener("click", () => {
  billingOptionButton.classList.toggle("yearly");
  if (billingOptionButton.classList.contains("yearly")) {
    inMonthOrYear.innerHTML = "/ year";
  } else {
    inMonthOrYear.innerHTML = "/ month";
  }
});
// Get the slider element and its container
const slider = document.getElementById("slider");
const sliderContainer = document.getElementById("slider-container");

// Get the price elements
const priceElement = document.getElementById("price");
const priceRange = 32; // Maximum price

// Variables to track mouse movements
let isDragging = false;
let offsetX = 0;

// Function to update the price based on the slider position
function updatePrice() {
  // Calculate the percentage of the slider's position relative to its maximum range
  const percentage =
    (parseFloat(slider.style.left) /
      (sliderContainer.offsetWidth - slider.offsetWidth)) *
    100;

  // Calculate the price based on the percentage
  const newPrice = (percentage / 100) * priceRange;

  // Update the displayed price
  priceElement.innerHTML = `$${newPrice.toFixed(2)}`;
}

// Event listeners for mouse down, move, and up events
slider.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - slider.getBoundingClientRect().left;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    // Calculate the new position based on mouse movement
    let newPosition =
      event.clientX - offsetX - sliderContainer.getBoundingClientRect().left;

    // Ensure the slider stays within the container boundaries
    const minPosition = 0;
    const maxPosition = sliderContainer.offsetWidth - slider.offsetWidth;

    // Apply the new position within the boundaries
    newPosition = Math.min(maxPosition, Math.max(minPosition, newPosition));

    // Apply the new position
    slider.style.left = newPosition + "px";

    // Update the price when dragging
    updatePrice();
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
