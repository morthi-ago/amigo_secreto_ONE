let listaDeNomes = [];
function limparEspaco() {
    adicionar = document.querySelector('input');
    adicionar.value = '';
}
function adicionarAmigo() {
    let novoNome = document.querySelector('input').value;
    if (novoNome) {
        listaDeNomes.push(novoNome);
        limparEspaco();
        updateListaAmigos()
    } else {
        alert('Digite um nome para que seja adicionado');
    }
    return novoNome
}
function updateListaAmigos() {
    document.getElementById("listaAmigos").innerHTML = listaDeNomes.map(listaDeNomes => `<li>${listaDeNomes}</li>`).join('');
}
function escolhaAleatoria() {    
    let tamanhoDaLista = listaDeNomes.length; 
    if (tamanhoDaLista == 0) {
        alert('A lista de pessoas esta vazia!');
    } else {
        let indiceEscolhido = parseInt(Math.random() * tamanhoDaLista);
        let amigoSorteado = listaDeNomes[indiceEscolhido];
        console.log(amigoSorteado);
        return amigoSorteado;
    }}
function sortearAmigo() {
    let escolhaFinal = escolhaAleatoria();
    let inserirNoHtml = document.getElementById('resultado')
    inserirNoHtml.innerHTML = `O amigo secreto sorteado é : ` + escolhaFinal;
}
