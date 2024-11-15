var a = [10,20,30,40,50,60];

// Forma mais analógica
for (let valor of a){
    console.log(valor);

}


// Utilizando o forEach
a.forEach(valor => console.log(valor))

var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);

a.forEach(function(valor,indice,array){
    console.log(array[indice]);
})


var carro = [
    {modelo: 'Audi A3', marca: 'Audi', ano: '2020'},
    {modelo: 'Compass', marca: 'Jeep', ano: '2022'}
];


for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}


for (let c of carro){
    console.log(c.ano);
}


var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}


var t = 1;
do{
    console.log(t);
    t++
}while( t < 6)



    const numeros = [2, 4, 6, 8, 10];

    let soma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
    
      if (numeros[i] % 2 === 0) {
    
        soma += numeros[i];
    
      }
    
    }
    
    console.log(soma);