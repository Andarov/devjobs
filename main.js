const elDay = document.querySelector(".input-day");
const elNight = document.querySelector(".input-night");

elDay.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
});

elNight.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
});

const elBtnFilter = document.querySelector(".js-filter");
const elBtnExit = document.querySelector(".js-exit");
const elModal = document.querySelector(".modal");

if (elBtnFilter) {
    elBtnFilter.addEventListener("click", function () {
        elModal.classList.add("modal-open");
    });
}

if (elBtnExit) {
    elBtnExit.addEventListener("click", function () {
        elModal.classList.remove("modal-open");
    });
}