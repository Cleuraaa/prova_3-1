//** Utilizando destructuring, escreva uma função chamada formatarContato que aceite um 
//objeto contato com propriedades como nome, email e telefone. A função deve extrair 
//essas informações usando destructuring e retornar uma string formatada com essas 
//informações. Por exemplo, se o objeto for {nome: "Ana Silva", email: 
//"ana.silva@example.com", telefone: "123456789"}, a função deve retornar a string: 
//"Nome: Ana Silva, Email: ana.silva@example.com, Telefone: 123456789".


function formatarContato (propriedades){
    let {nome, email, telefone} = propriedades;
    return `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
}
console.log(formatarContato({nome:"Clara Vitória", email:"Claravitoria@gmail.com", telefone:"84 99195-6359"}));