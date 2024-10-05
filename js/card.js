var sizeScreen = window.screen.width;

console.log(sizeScreen);
//Card dos personagens
function expandirCard(id) {
    var title = "#" + id + " h2"
    var card = "#" + id + " p";
    var image = "#" + id + " img";
    var customTitle = document.querySelectorAll(title);
    var customSon = document.querySelectorAll(card);
    var customImage = document.querySelector(image);

    customImage.setAttribute('src', 'img/persona/'+id+'Attack.jpg');

    if (sizeScreen < 768) {

        document.getElementById(id).style.padding = "0px 0px 20px 0px";
        document.getElementById(id).style.backgroundColor = "rgba(210, 210, 210)";
        document.getElementById(id).style.Color = "blue";

        for (i = 0; i < customTitle.length; i++) {
            customTitle[i].style.color = "rgb(0,50,0)";
        }

        for (i = 0; i < customSon.length; i++) {
            customSon[i].style.display = "block";
            customSon[i].style.width = "100%";
            customSon[i].style.color = "rgb(0,50,0)";
        }

    } else {}
    console.log("card expnd")
}

function retrairCard(id) {
    var title = "#" + id + " h2"
    var card = "#" + id + " p";
    var image = "#" + id + " img";
    var customTitle = document.querySelectorAll(title);
    var customSon = document.querySelectorAll(card);
    var customImage = document.querySelector(image);

    customImage.setAttribute('src', 'img/persona/'+id+'.jpg');

    if (sizeScreen < 768) {

        document.getElementById(id).style.padding = "0px";
        document.getElementById(id).style.backgroundColor = "rgba(0, 0, 0)";
        document.getElementById(id).style.Color = "#ffffff";

        for (i = 0; i < customTitle.length; i++) {
            customTitle[i].style.color = "rgb(0,50,0)";
        }

        for (i = 0; i < customSon.length; i++) {
            customSon[i].style.display = "none";
        }
    } else {}
}
