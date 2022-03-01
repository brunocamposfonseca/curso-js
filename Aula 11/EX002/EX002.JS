
function processar() {
    var pais = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')
    var nac= String(txtpais.value)

    if(nac == 'Brasil'){
        res.innerHTML = `<p>Você é <strong>Brasileiro</strong>!</p>`
    } else {
        res.innerHTML = `Você é <strong>Estrangeiro</strong>.`
    }
}