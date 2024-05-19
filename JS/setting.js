"use strict";
const multiRangeInput = (lowerSlider, upperSlider) => {
    let lowerVal = parseInt(lowerSlider.value);
    let upperVal = parseInt(upperSlider.value);
    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (upperVal < lowerVal + 11) {
            lowerSlider.value = (upperVal - 11).toString();
            if (lowerVal === +lowerSlider.min) {
                upperSlider.value = "11";
            }
        }
    };
    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 11) {
            upperSlider.value = (lowerVal + 11).toString();
            if (upperVal === +upperSlider.max) {
                lowerSlider.value = (parseInt(upperSlider.max) - 11).toString();
            }
        }
    };
};
multiRangeInput(document.querySelector("#height-lower"), document.querySelector("#height-upper"));
multiRangeInput(document.querySelector("#initial-lower"), document.querySelector("#initial-upper"));
const fireworksNumbers = document.querySelector(".fireworks-numbers");
const fireworksNumbersValue = document.querySelector(".fireworks-numbers-value");
const sparklesNumbers = document.querySelector(".sparkles-numbers");
const sparklesNumbersValue = document.querySelector(".sparkles-numbers-value");
const initialLower = document.querySelector(".initial-lower");
const initialUpper = document.querySelector(".initial-upper");
const xPositionValue = document.querySelector(".x-position-value");
let initialLowerValue = "";
let initialUpperValue = "";
const heightLower = document.querySelector(".height-lower");
const heightUpper = document.querySelector(".height-upper");
const fireworkHeightValue = document.querySelector(".firework-height-value");
let heightLowerValue = "";
let heightUpperValue = "";
const applyBtn = document.querySelector(".apply-btn");
fireworksNumbers.addEventListener("input", () => {
    fireworksNumbersValue.value = fireworksNumbers.value;
});
sparklesNumbers.addEventListener("input", () => {
    sparklesNumbersValue.value = sparklesNumbers.value;
});
initialLower.addEventListener("input", () => {
    initialLowerValue = initialLower.value;
    xPositionValue.value = `${initialLowerValue.padStart(2, "  ")} - ${initialUpperValue.padStart(2, "  ")}`;
});
initialUpper.addEventListener("input", () => {
    initialUpperValue = initialUpper.value;
    xPositionValue.value = `${initialLowerValue.padStart(2, "  ")} - ${initialUpperValue.padStart(2, "  ")}`;
});
heightLower.addEventListener("input", () => {
    heightLowerValue = heightLower.value;
    fireworkHeightValue.value = `${heightLower.value} - ${heightUpper.value}`;
});
heightUpper.addEventListener("input", () => {
    heightUpperValue = heightUpper.value;
    fireworkHeightValue.value = `${heightLower.value} - ${heightUpper.value}`;
});
applyBtn.addEventListener("click", () => {
    console.log("Submit");
    startTheShow("3");
});
//# sourceMappingURL=setting.js.map