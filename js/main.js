/* 
 * Zyquotk by Deltara3
 * Comments will be removed on release.
 */

// Init button function.
function i() {
    document.getElementById("ib").remove();
}

// Check for a cookie. Should have the value of tKL.
if (document.cookie.indexOf("xGb54HsfsaHd33gsW") === -1) {
    // Just don't do anything.
} else {
    var ib = document.createElement("button");
    ib.onclick = i;
    ib.setAttribute("id", "ib");
    document.body.appendChild(ib);
}
