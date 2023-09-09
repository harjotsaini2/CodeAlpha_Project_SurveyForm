document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const prevButtons = document.querySelectorAll("[id^='prevButton']");
    const nextButtons = document.querySelectorAll("[id^='nextButton']");

    let currentPage = 1;

    function showPage(pageNumber) {
        pages.forEach((page) => {
            page.style.display = "none";
        });
        pages[pageNumber - 1].style.display = "block";
        currentPage = pageNumber;
    }

    function goToNextPage() {
        if (currentPage < pages.length) {
            showPage(currentPage + 1);
        }
    }

    function goToPrevPage() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }

    prevButtons.forEach((button) => {
        button.addEventListener("click", goToPrevPage);
    });

    nextButtons.forEach((button) => {
        button.addEventListener("click", goToNextPage);
    });

    showPage(currentPage);
});