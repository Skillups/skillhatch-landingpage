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
            mobileheader.display = "none"
            alert("dsa")
            /*console.dir(this);
            //note evt.target can be a nested element, not the body element, resulting in misfires
            console.log(evt.target);
            alert("body clicked");*/
        }
    });
});

function confirmCookies() {
    localStorage.setItem('cookies', 'true');
    document.getElementById("cookies").hidden = true;
}