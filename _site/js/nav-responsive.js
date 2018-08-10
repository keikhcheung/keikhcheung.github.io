/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openHamburger() {
    var x = document.getElementById("hamburger");
    console.log(x);
    var y = document.getElementsByClassName("nav-wrapper");
    console.log(y);
    var z = document.getElementsByClassName("icon");
    if (x.className === "navigation") {
        x.className += " responsive";
        y[0].className += " responsive";
        z[0].innerHTML = "&#10799;"; /* Instead of &#215; (multiplication sign) for better baseline resemblance */
    } else {
        x.className = "navigation";
        y[0].className = "nav-wrapper";
        z[0].innerHTML = "&#8801;";
    }
}