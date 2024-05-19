const multiRangeInput = (
    lowerSlider: HTMLInputElement,
    upperSlider: HTMLInputElement
) => {
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

multiRangeInput(
    document.querySelector("#height-lower") as HTMLInputElement,
    document.querySelector("#height-upper") as HTMLInputElement
);
multiRangeInput(
    document.querySelector("#initial-lower") as HTMLInputElement,
    document.querySelector("#initial-upper") as HTMLInputElement
);

const fireworksNumbers = document.querySelector(
    ".fireworks-numbers"
) as HTMLInputElement;
const fireworksNumbersValue = document.querySelector(
    ".fireworks-numbers-value"
) as HTMLInputElement;

const sparklesNumbers = document.querySelector(
    ".sparkles-numbers"
) as HTMLInputElement;
const sparklesNumbersValue = document.querySelector(
    ".sparkles-numbers-value"
) as HTMLInputElement;

const initialLower = document.querySelector(
    ".initial-lower"
) as HTMLInputElement;
const initialUpper = document.querySelector(
    ".initial-upper"
) as HTMLInputElement;
const xPositionValue = document.querySelector(
    ".x-position-value"
) as HTMLInputElement;

let initialLowerValue = "";
let initialUpperValue = "";

const heightLower = document.querySelector(".height-lower") as HTMLInputElement;
const heightUpper = document.querySelector(".height-upper") as HTMLInputElement;
const fireworkHeightValue = document.querySelector(
    ".firework-height-value"
) as HTMLInputElement;

let heightLowerValue = "";
let heightUpperValue = "";

const applyBtn = document.querySelector(".apply-btn") as HTMLInputElement;

fireworksNumbers.addEventListener("input", () => {
    fireworksNumbersValue.value = fireworksNumbers.value;
});

sparklesNumbers.addEventListener("input", () => {
    sparklesNumbersValue.value = sparklesNumbers.value;
});

initialLower.addEventListener("input", () => {
    initialLowerValue = initialLower.value;
    xPositionValue.value = `${initialLowerValue.padStart(
        2,
        "  "
    )} - ${initialUpperValue.padStart(2, "  ")}`;
});

initialUpper.addEventListener("input", () => {
    initialUpperValue = initialUpper.value;
    xPositionValue.value = `${initialLowerValue.padStart(
        2,
        "  "
    )} - ${initialUpperValue.padStart(2, "  ")}`;
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
