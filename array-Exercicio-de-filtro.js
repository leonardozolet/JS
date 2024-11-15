var produtos = [
    {id: 1, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 2, descricao: "Playstation", categoria: "Eletrônico"},
    {id: 3, descricao: "Xbox", categoria: "Eletrônico"},
    {id: 4, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Forno", categoria: "Eletrodoméstico"},
];

var eletronico = produtos.filter(function(produto) {
    return produto.categoria === "Eletrônico"
});

console.log(eletronico);