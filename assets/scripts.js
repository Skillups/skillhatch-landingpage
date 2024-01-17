$(document).ready(function () {
    const cookies = localStorage.getItem('cookies');
    const cookiesFooter = document.getElementById("cookies");
    if (cookies) {
        cookiesFooter.hidden = true;
    }
});

function confirmCookies() {
    localStorage.setItem('cookies', 'true');
    document.getElementById("cookies").hidden = true;
}