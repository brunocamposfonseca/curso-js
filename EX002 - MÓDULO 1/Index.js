function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente [ERRO]`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'criançahomem.png')
            } else if (idade < 19) {
                // Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else if (idade < 140){
                // Idoso
                img.setAttribute('src', 'idosohomem.png')
            } else {
                window.alert(`[ERRO] Verifique os dados, estão me informando qua a pessoa tem ${idade}, com certeza ela já deve estar morta [ERRO]`)
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'criançamulher.png')
            } else if (idade < 19) {
                // Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultomulher.png')
            } else if (idade < 140){
                // Idoso
                img.setAttribute('src', 'idosomulher.png')
            } else {
                window.alert(`[ERRO] Verifique os dados, estão me informando qua a pessoa tem ${idade}, com certeza ela já deve estar morta [ERRO]`)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}