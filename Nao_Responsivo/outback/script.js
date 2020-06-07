function mudaFoto(qualFoto){
    let getFoto = document.getElementById('fotoAtual')
    if(Number(qualFoto) == 1){
        getFoto.src = 'imagens/capa1.jpeg'
    }else if(Number(qualFoto) == 2){
        getFoto.src = 'imagens/capa2.jpeg'
    }else{
        getFoto.src = 'imagens/capa3.jpeg'
    }
}