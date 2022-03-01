

function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel} Km/h`
    if(vel > 60){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    } else {
        res.innerHTML += `<p>Você está dentro do limite.</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}