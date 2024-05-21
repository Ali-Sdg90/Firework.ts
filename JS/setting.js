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
let xPositionLower = 20;
let xPositionUpper = 80;
let fireworkHeightLower = 50;
let fireworkHeightUpper = 86;
let NumberOfSparkles = 8;
let fireworksFireRate = 8;
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
const applyBtn = document.querySelector(".apply-btn");
fireworksNumbers.addEventListener("input", () => {
    fireworksNumbersValue.value = fireworksNumbers.value;
    fireworksFireRate = +fireworksNumbers.value;
});
sparklesNumbers.addEventListener("input", () => {
    sparklesNumbersValue.value = sparklesNumbers.value;
    NumberOfSparkles = +sparklesNumbers.value / 4;
});
initialLower.addEventListener("input", () => {
    xPositionLower = +initialLower.value;
    xPositionUpper = +initialUpper.value;
    xPositionValue.value = `${initialLower.value.padStart(2, "  ")} - ${initialUpper.value.padStart(2, "  ")}`;
});
initialUpper.addEventListener("input", () => {
    xPositionLower = +initialLower.value;
    xPositionUpper = +initialUpper.value;
    xPositionValue.value = `${initialLower.value.padStart(2, "  ")} - ${initialUpper.value.padStart(2, "  ")}`;
});
heightLower.addEventListener("input", () => {
    fireworkHeightLower = +heightLower.value;
    fireworkHeightUpper = +heightUpper.value;
    fireworkHeightValue.value = `${heightLower.value} - ${heightUpper.value}`;
});
heightUpper.addEventListener("input", () => {
    fireworkHeightLower = +heightLower.value;
    fireworkHeightUpper = +heightUpper.value;
    fireworkHeightValue.value = `${heightLower.value} - ${heightUpper.value}`;
});
applyBtn.addEventListener("click", () => {
    console.log("Submit");
    startTheShow("3");
});
//# sourceMappingURL=setting.js.map