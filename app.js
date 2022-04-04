// Crt espaço abrejanela de opções

console.log()

// Clicando em Javascript no rodapé exibe todasdas linguagens suportadas pelo VSCode

// Ctrl + aumenta o zum

//Crtl S salvar

//F8 mostra o erro

// Slipedi parte do código já pronta

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// Comentar bloco de codigo -> marco e (Ctrl + :)

const pessoa = {
    nome: "Adilson Santos",
    idade: 48
}

const pessoaComTelefone = 
{...pessoa, telefone: 9123456789}

const {idade} = pessoa

function imprimeDados({nome, idade})
{
    console.log('Seu nome é',nome,'e sua idade é',idade,'anos')
}

imprimeDados(pessoa)