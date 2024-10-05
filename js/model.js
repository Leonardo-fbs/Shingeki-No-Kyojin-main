//Modal do cadastro 
function abrirModal() {
    var curtain = document.getElementById('curtain');

    curtain.style.marginLeft = '0';
    curtain.style.marginTop = '0';
    curtain.style.backgroundColor = 'rgba(0,0,0,0.5)';

    //Altera a imgem do perfil
    document.querySelector("#file_img img").setAttribute('src', 'img/user_green.png');

    //remove todos os icones no label
    function removerPalavra() {
        var labelFormatting = document.getElementsByTagName('label').innerText;

        console.log(labelFormatting);

    }
    removerPalavra();
}

function fecharModal() {
    var curtain = document.getElementById('curtain');

    curtain.style.marginLeft = '-100%';
    curtain.style.marginTop = '-100%';
    
}