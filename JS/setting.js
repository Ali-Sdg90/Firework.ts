"use strict";
const multiRangeInput = (lowerSlider, upperSlider) => {
    let lowerVal = parseInt(lowerSlider.value);
    let upperVal = parseInt(upperSlider.value);
    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (upperVal < lowerVal + 6) {
            lowerSlider.value = (upperVal - 6).toString();
            if (lowerVal === +lowerSlider.min) {
                upperSlider.value = "6";
            }
        }
        console.log(upperSlider.value);
    };
    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 6) {
            upperSlider.value = (lowerVal + 6).toString();
            if (upperVal === +upperSlider.max) {
                lowerSlider.value = (parseInt(upperSlider.max) - 6).toString();
            }
        }
    };
};
multiRangeInput(document.querySelector("#height-lower"), document.querySelector("#height-upper"));
multiRangeInput(document.querySelector("#initial-lower"), document.querySelector("#initial-upper"));
//# sourceMappingURL=setting.js.map