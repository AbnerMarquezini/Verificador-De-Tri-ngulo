function verificar(){
    var a = document.getElementById('ladoa')
    var b = document.getElementById('ladob')
    var c = document.getElementById('ladoc')
    var res = document.getElementById('res')
    var val = document.getElementById('val')
    var def = document.getElementById('def')
    var a = Number(a.value)
    var b = Number(b.value)
    var c = Number(c.value)
    
//Check values greater than 0, using the operator and.
    // if(a>0 && b>0 && c>0) {
    //     if(a<b+c && b<a+c && c<a+b){
    //         val.innerHTML = "É um triângulo!"
    //         res.innerHTML = `O lado A é ${a}, o lado B é ${b} e o lado C é ${c}.`
    //             if(a==b && b==c && a==b){
    //                 val.innerHTML += "<br><br><br>É equilátero."
    //             } else if(a!=c && b!=c && a!=b){
    //                 val.innerHTML += "<br><br><br>É escaleno."
    //             } else {
    //                 val.innerHTML += "<br><br><br>É isóceles."
    //             }
    //     } else {
    //        val.innerHTML = "Não é um triângulo!"
    //     }
    // } else {
    //     val.innerHTML = "Valores menores ou iguais a 0 não são válidos."
    // }
    
//Check values less or equal than 0, using the operator or.
    if (a<=0 || b<=0 || c<=0){
        val.innerHTML = "Valores menores ou iguais a 0 não são válidos."
    } else{
        if(a<b+c && b<a+c && c<a+b){
            val.innerHTML = "É um triângulo!"
            res.innerHTML = `O lado A é ${a}, o lado B é ${b} e o lado C é ${c}.`
            if(a==b && b==c && a==b){
                val.innerHTML += "<br><br><br>É equilátero."
            } else if(a!=c && b!=c && a!=b){
                val.innerHTML += "<br><br><br>É escaleno."
            } else {
                val.innerHTML += "<br><br><br>É isóceles."
            }
            } else {
               val.innerHTML = "Não é um triângulo!"
            }
    }
}

//Clean the form.
function limpar(){
    document.getElementById("newForm").reset();
    var res = document.getElementById('res')
    var val = document.getElementById('val')
    var def = document.getElementById('def')
    res.innerHTML = ''
    val.innerHTML = ''
    def.innerHTML = ''
}