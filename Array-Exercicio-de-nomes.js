var array = ["Guilherme","Manoel","Samuel","Davi","Joao"];

array.unshift("Monica");
array.pop();
console.log("Posição do Samuel:" + array.indexOf("Samuel"));

array.splice(2, 1, "Emanoel");
console.log(array);