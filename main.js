const range = document.getElementById("range");
const monthlyPrice = document.getElementById("monthlyPrice");
const pageViews = document.getElementById("pageviews-count");
const switcher = document.getElementById("switcher");
const month = document.getElementById("month");
let clickButton = false;
let rangeValue = 50;
switcher.addEventListener("click", (event) => {
  clickButton = !clickButton;
  if (!clickButton) {
    if (rangeValue >= 0 && rangeValue < 25) {
      monthlyPrice.textContent = "$" + 10 + ".00";
      month.textContent = "/month";
    } else if (rangeValue >= 25 && rangeValue < 50) {
      monthlyPrice.textContent = "$" + 12 + ".00";
      month.textContent = "/month";
    } else if (rangeValue >= 50 && rangeValue <= 70) {
      monthlyPrice.textContent = "$" + 16 + ".00";
      month.textContent = "/month";
    } else if (rangeValue > 70 && rangeValue < 90) {
      monthlyPrice.textContent = "$" + 20 + ".00";
      month.textContent = "/month";
    } else {
      monthlyPrice.textContent = "$" + 25 + ".00";
      month.textContent = "/month";
    }
  } else {
    if (rangeValue >= 0 && rangeValue < 25) {
      monthlyPrice.textContent = "$" + 90;
      month.textContent = "/year";
    } else if (rangeValue >= 25 && rangeValue < 50) {
      monthlyPrice.textContent = "$" + 108;
      month.textContent = "/year";
    } else if (rangeValue >= 50 && rangeValue <= 70) {
      monthlyPrice.textContent = "$" + 144;
      month.textContent = "/year";
    } else if (rangeValue > 70 && rangeValue < 90) {
      monthlyPrice.textContent = "$" + 180;
      month.textContent = "/year";
    } else {
      monthlyPrice.textContent = "$" + 225;
      month.textContent = "/year";
    }
  }
});

range.addEventListener("input", (event) => {
  range.style.backgroundSize = `${Number(event.target.value)}% 100%`;
  if (!clickButton) {
    if (event.target.value >= 0 && event.target.value < 25) {
      monthlyPrice.textContent = "$" + 10 + ".00";
      pageViews.textContent = 50 + "K Pageviews";
    } else if (event.target.value >= 25 && event.target.value < 50) {
      monthlyPrice.textContent = "$" + 12 + ".00";
      pageViews.textContent = 75 + "K Pageviews";
    } else if (event.target.value >= 50 && event.target.value <= 70) {
      monthlyPrice.textContent = "$" + 16 + ".00";
      pageViews.textContent = 100 + "K Pageviews";
    } else if (event.target.value > 70 && event.target.value < 90) {
      monthlyPrice.textContent = "$" + 20 + ".00";
      pageViews.textContent = 150 + "K Pageviews";
    } else {
      monthlyPrice.textContent = "$" + 25 + ".00";
      pageViews.textContent = 200 + "K Pageviews";
    }
  } else {
    if (event.target.value >= 0 && event.target.value < 25) {
      monthlyPrice.textContent = "$" + 90;
      month.textContent = "/year";
      pageViews.textContent = 50 + "K Pageviews";
    } else if (event.target.value >= 25 && event.target.value < 50) {
      monthlyPrice.textContent = "$" + 108;
      month.textContent = "/year";
      pageViews.textContent = 75 + "K Pageviews";
    } else if (event.target.value >= 50 && event.target.value <= 70) {
      monthlyPrice.textContent = "$" + 144;
      month.textContent = "/year";
      pageViews.textContent = 100 + "K Pageviews";
    } else if (event.target.value > 70 && event.target.value < 90) {
      monthlyPrice.textContent = "$" + 180;
      month.textContent = "/year";
      pageViews.textContent = 150 + "K Pageviews";
    } else {
      monthlyPrice.textContent = "$" + 225;
      month.textContent = "/year";
      pageViews.textContent = 200 + "K Pageviews";
    }
  }
  rangeValue = event.target.value;
});
