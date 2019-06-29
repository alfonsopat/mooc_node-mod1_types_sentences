// Ejercicio 1 
console.log('\b');

// Ej 2
let d = new Date();
let hora = d.getHours();
if ((hora = 22)||(hora = 23)||((hora >= 0)&&(hora <= 6))) {
    console.log('Good night, it\'s ' + hora);
} else if ((hora >= 7)&&(hora <= 12)){
    console.log('Good morning, it\'s ' + hora);
} else {
    console.log('Good afternoon, it\'s ' + hora);
};

// Ej 3
console.log('\b');

// Ej 4
console.log(Math.PI.toPrecision(7));

// Ej 5
console.log('\b');

// Ej 6
function linea (x) {
	console.log(x+" dec = "+x.toString(16)+" hex = "+x.toString(8)+" oct = "+x.toString(2)+" bin"+"\b");
};
for (let i=1;i<=22;i++){
	linea (i);
};
	
// Ej 7
console.log('\b');

// Ej 8
function linea (x) {
	console.log(x+" dec = "+x.toString(16)+" hex = "+x.toString(8)+" oct = "+x.toString(2)+" bin"+"\b");
};
for (let i=1;i<=22;i++){
	if (i%2 === 0) {
		linea (i);
	};
};
		
// Ej 9
console.log('\b');

// Ej 10
console.log('\u55e8\uff0c\u4f60\u597d\u5417');

// Ej 11
console.log('\b');

// Ej 12
console.log('The program has finished');
