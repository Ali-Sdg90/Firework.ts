const multiRangeInput = (
    lowerSlider: HTMLInputElement,
    upperSlider: HTMLInputElement
) => {
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

multiRangeInput(
    document.querySelector("#height-lower") as HTMLInputElement,
    document.querySelector("#height-upper") as HTMLInputElement
);
multiRangeInput(
    document.querySelector("#initial-lower") as HTMLInputElement,
    document.querySelector("#initial-upper") as HTMLInputElement
);
