const rangeSlide = document.querySelector('input[type=range]');
const topPrice = document.querySelector('.top-price');
const bottomPrice = document.querySelector('.bottom-price');
const pageviews = document.querySelector('.pageviews');

let rangeSlideValue = rangeSlide.value;
rangeSlide.addEventListener('change', function () {
    rangeSlideValue = Number(rangeSlide.value).toFixed(2);
    bottomPrice.textContent = '$' + rangeSlideValue;
    topPrice.textContent = '$' + rangeSlideValue;
    if (rangeSlideValue == 8) {
        pageviews.textContent = '10k pageviews'
    } else if (rangeSlideValue == 12) {
        pageviews.textContent = '50k pageviews'
    } else if (rangeSlideValue == 16) {
        pageviews.textContent = '100k pageviews'
    } else if (rangeSlideValue == 24) {
        pageviews.textContent = '500k pageviews'
    } else if (rangeSlideValue == 36) {
        pageviews.textContent = '1M pageviews'
    }
})
    



