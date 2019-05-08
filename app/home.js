window.addEventListener("DOMContentLoaded", function () {
    function toggleTriangleMotion(state) {
        var glContainerNode = document.querySelector("#introduction");
        glContainerNode.classList.toggle("transition-display", state);
    }
    window.requestAnimationFrame(function () {
        toggleTriangleMotion(true);
    });
    window.setInterval(function () {
        var s = !(Date.now() % 2) ? true : false;
        toggleTriangleMotion(s);
    }, 20000);
    var descriptionMarqueesList = [
        "Architect",
        "Mobile",
        "Usability",
        "Remodeling",
        "Performance",
        "Web Security",
        "Design",
        "Database"
    ];
    function updateDescription(index) {
        var textLine2Node = document.querySelector("#description");
        var i = (Math.random() * descriptionMarqueesList.length) >> 0;
        var msg = descriptionMarqueesList[index !== undefined ? index : i];
        textLine2Node.textContent = msg;
    }
    updateDescription(0);
    setTimeout(function () {
        window.setInterval(updateDescription, (Math.random() * 10 * 1000) + 5000);
    }, 5000);
});
