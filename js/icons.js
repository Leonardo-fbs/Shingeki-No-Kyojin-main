function ajustarIcon() {
    var icons = document.querySelectorAll(".social_network i ");

    console.log(icons);
    console.log(sizeScreen);

    if (sizeScreen < 768) {
        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-5x");
        }
    } else if (sizeScreen >= 768) {
        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-3x");
            icons[i].classList.add("fa-5x");
        }
    } else {
        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-3x");
            icons[i].classList.remove("fa-5x");
            icons[i].classList.add("fa-4x");
        }
    }

} ajustarIcon();


