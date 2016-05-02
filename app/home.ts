window.addEventListener("DOMContentLoaded", function () {

    function toggleTriangleMotion(state) {
        var glContainerNode = document.querySelector("#introduction");
        glContainerNode.classList.toggle("transition-display", state);
    }

    // trigger fade
    window.requestAnimationFrame(function () {
        toggleTriangleMotion(true);
    });

    // alternate showing or not of triangles
    window.setInterval(function () {
        var s = !(Date.now() % 2) ? true : false;
        toggleTriangleMotion(s);
    }, 20000);

    // alternate showing or not of triangles
        let descriptionMarqueesList = [
            "UX Architect",
            "Mobile",
            "Performance",
            "Web Security",
            "Design // Video",
            "Database"
        ];


        function updateDescription( index ) {

            var textLine2Node = <SVGElement> document.querySelector("#description");

            const i = (Math.random() * descriptionMarqueesList.length ) >> 0;
            const msg = descriptionMarqueesList[index!== undefined? index :  i];
            textLine2Node.textContent= msg;
        }

        updateDescription(0);

    setTimeout( () => {
        window.setInterval(updateDescription, (Math.random() * 10 * 1000) + 5000);
    }, 5000 );


    });


