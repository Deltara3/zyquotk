/* 
 * Zyquotk by Deltara3
 * Comments will be removed on release.
 */

// Check for a cookie. Should have the value of tKL.
if (document.cookie.indexOf("xGb54HsfsaHd33gsW") === -1) {
    // Just don't do anything.
} else {
    document.addEventListener("keydown", function(event) {
        if (event.keyCode == 8) {
            if (bk.innerHTML == prev) {
                // Just don't do anything.
            } else {
                bk.innerHTML = bk.innerHTML.slice(0, -1);
                cmd          = cmd.slice(0, -1);
            }
        } else if (event.keyCode == 13) {
            bk.innerHTML += `<br>${cwd} `
            prev          = bk.innerHTML
            cmd           = "";
        } else if (event.keyCode == 32) {
            bk.innerHTML += " ";
            cmd          += " ";
        } else if (event.keyCode == 65) {
            bk.innerHTML += "a";
            cmd          += "a";
        } else if (event.keyCode == 66) {
            bk.innerHTML += "b";
            cmd          += "b";
        } else if (event.keyCode == 67) {
            bk.innerHTML += "c";
            cmd          += "c";
        } else if (event.keyCode == 68) {
            bk.innerHTML += "d";
            cmd          += "d";
        } else if (event.keyCode == 69) {
            bk.innerHTML += "e";
            cmd          += "e";
        } else if (event.keyCode == 70) {
            bk.innerHTML += "f";
            cmd          += "f";
        } else if (event.keyCode == 71) {
            bk.innerHTML += "g";
            cmd          += "g";
        } else if (event.keyCode == 72) {
            bk.innerHTML += "h";
            cmd          += "h";
        } else if (event.keyCode == 73) {
            bk.innerHTML += "i";
            cmd          += "i";
        } else if (event.keyCode == 74) {
            bk.innerHTML += "j";
            cmd          += "j";
        } else if (event.keyCode == 75) {
            bk.innerHTML += "k";
            cmd          += "k";
        }
    });

    document.body.style.backgroundColor = "black";
    var bk = document.createElement("p");
    bk.setAttribute("id", "bk");
    bk.style.color = "lime";
    document.body.appendChild(bk);

    var cmd      = "";
    var cwd      = "~";
    bk.innerHTML = `${cwd} `;
    var prev     = bk.innerHTML;
}
