podeSubir(altura, estaAcompanhada){
    let altura = 1.30
    let estaAcompanhada = true
    
    if (altura > 1.40 && altura < 2.00){
        console.log "Acesso permitido";
    }else if(altura < 1.40 && estaAcompanhada == true){
        console.log "Acesso autorizado somente com acompanhante";
    }else if (altura < 1.20){
        console.log "Acesso negado";
    }else{
        console.log "Acesso negado";
    }
       
    }
    
    return podeSubir();
}

