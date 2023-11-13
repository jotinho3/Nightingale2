const dropdownMenu = document.querySelector('.dropdownMenu');
const hamburguerIcon = document.querySelector('.hamburguerIcon');


function hamburguerIconClick() {
    dropdownMenu.classList.toggle('active') //com isso, consigo adicionar e remover a class dinamicamente
}

//toggle -> se tiver a class ele vai excluir, se não tiver ele vai adicionar


// function soma(number1,number2) { // criação da função
//    const somados = number1 + number2
//    console.log(somados)

// }

// soma(2,6) //execução da função



// var globa -> a variavel que é criada na execução do javascript pelo proprio javascript
// document -> keyword 'palavra reservada'
// document -> é o HTML
// cada variavel global é um objeto que tem seus proprios métodos
// metodo '.metodo()'
//o método querySelector('') nos permite utilizar seleção de CSS no JavaScript
// o método classList nos permite criar, deletar e atualizar o atributo CLASS
