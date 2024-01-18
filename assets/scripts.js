$(document).ready(function () {
    const cookies = localStorage.getItem('cookies');
    const cookiesFooter = document.getElementById("cookies");
    if (cookies) {
        cookiesFooter.hidden = true;
    }

    document.body.addEventListener("click", function () {
        const mobileheader = document.getElementsByClassName("dropdown-content")[0];
        if (window.getComputedStyle(mobileheader).getPropertyValue('display') === "none"){
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
