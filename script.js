document.addEventListener("DOMContentLoaded", function () {
    var title = document.getElementById('title');
    var down = document.getElementById('down');

    if (title && down) {
        var elements = [title, down];

        elements.forEach(function (element) {
            element.addEventListener('mouseenter', function () {
                elements.forEach(function (el) {
                    el.style.transition = 'transform 1s';
                    el.style.transform = 'translateY(10px)';
                });
            });

            element.addEventListener('mouseleave', function () {
                elements.forEach(function (el) {
                    el.style.transition = 'transform 1s';
                    el.style.transform = 'translateY(0px)';
                });
            });
        });
        
        ;
    }
    document.getElementById("history-li").addEventListener('click', function () {
        document.getElementById("history").scrollIntoView({ behavior: 'smooth' });
    })
    document.getElementById("prod-li").addEventListener('click', function(){
document.getElementById("sec-prod").scrollIntoView({behavior:'smooth'});
    })
});






