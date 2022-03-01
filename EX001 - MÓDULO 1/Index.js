function carregar() {
    var mens = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mens.innerText = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        mens.innerHTML += `. Bom Dia!`
        img.src = 'DÏA.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        mens.innerHTML += `. Boa Tarde!`
        img.src = 'TARDE.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        mens.innerHTML += `. Boa Noite!`
        img.src = 'NOÏTE.png'
        document.body.style.background = '#515154'
    }
}

