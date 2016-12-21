function show() {
    var p = document.getElementById('exampleInputPassword1');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('exampleInputPassword1');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

var el = document.getElementById("eye").addEventListener("click", function () {

        if (pwShown == 0) {
            pwShown = 1;
            console.log("code being run");
            show();
        } else {
            pwShown = 0;
            hide();
        }
    
}, false);