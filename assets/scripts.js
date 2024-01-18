$(document).ready(function () {
    const cookies = localStorage.getItem('cookies');
    const cookiesFooter = document.getElementById("cookies");
    if (cookies) {
        cookiesFooter.hidden = true;
    }

    document.body.addEventListener("click", function (evt) {
        const mobileheader = document.getElementsByClassName("dropdown-content")[0];
        const display = window.getComputedStyle(mobileheader).getPropertyValue('display');

        if (display == "none"){
            window.focus();
            if (document.activeElement) {
                document.activeElement.blur();
            }
        }
    });
});

function confirmCookies() {
    localStorage.setItem('cookies', 'true');
    document.getElementById("cookies").hidden = true;
}

function toggleMenu(){
    document.getElementsByClassName("dropdown-content")[0].toggle();
}