var hideAnimationContainer = function () {
    var container = document.getElementById('animation');
    container.style.cssText = 'display: none;';
};

var showAnimationContainer = function () {
    var container = document.getElementById('animation');
    container.style.cssText = 'display: block;';
};

window.onload = function () {

    CFInstall.check({
        mode: "overlay",
        destination: window.location.href,
        //preventPrompt: true,
        onmissing: function () {
            hideAnimationContainer();
        },
        oninstall: function () {
            showAnimationContainer();
        }
    });
    
};