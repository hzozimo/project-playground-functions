// Desafio 10
function techList(nomesTecnologias, nome) {
  nomesTecnologiasEmOrdem = nomesTecnologias.sort();
  let objeto = [];
  if (nomesTecnologias === []) {
    objeto = 'Vazio!';
  } else {
    for (let tecnologias of nomesTecnologiasEmOrdem) {
      objeto.push({
        tech: tecnologias,
        name: nome,
      });
    }
  }
  return objeto;
}

// Desafio 11
function generatePhoneNumber(arrayDeNumeros) {
  let saida = `(${arrayDeNumeros[0]}${arrayDeNumeros[1]})${arrayDeNumeros[2]}${arrayDeNumeros[3]}${arrayDeNumeros[4]}${arrayDeNumeros[5]}${arrayDeNumeros[6]}-${arrayDeNumeros[7]}${arrayDeNumeros[8]}${arrayDeNumeros[9]}${arrayDeNumeros[10]}`;
  saida = tamanho(arrayDeNumeros);
  for (numero of arrayDeNumeros) {
    if ((numero < 0) || (numero > 9) || repeticaoDeTresOuMais(arrayDeNumeros)) {
      saida = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return saida;
}

function tamanho (arrayDeNumeros) {
  let saida=`(${arrayDeNumeros[0]}${arrayDeNumeros[1]}) ${arrayDeNumeros[2]}${arrayDeNumeros[3]}${arrayDeNumeros[4]}${arrayDeNumeros[5]}${arrayDeNumeros[6]}-${arrayDeNumeros[7]}${arrayDeNumeros[8]}${arrayDeNumeros[9]}${arrayDeNumeros[10]}`;
    if (arrayDeNumeros.length != 11) {
    saida = 'Array com tamanho incorreto';
  }
  return saida;
}

function repeticaoDeTresOuMais (arrayDeNumeros) {
  let maisQueTres = false;
  let contagem ={ }
  for (let itens of arrayDeNumeros) {
    contagem[itens] = 0;
  }
  for (let itens of arrayDeNumeros) {
    contagem[itens] += 1;
  }
  for (let itens of arrayDeNumeros) {
    if (contagem[itens] >= 3) {
      maisQueTres = true;
    }
  }
  return maisQueTres;
}

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let existencia = (((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB-lineC))) || ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA-lineC))) || ((lineC < (lineB + lineA)) && (lineC > Math.abs(lineB-lineA))));
  return existencia
}
console.log(triangleCheck(10, 3, 4))


// Desafio 13
function hydrate(frase) {
  let regex = /\d+/g;
  let numeros = frase.match(regex);
  let soma=0;
  for (index in numeros) {
    soma = soma + parseInt(numeros[index]);
  }
  if (soma >1) {
  saida = `${soma} copos de água`;
  } else {
    saida = `${soma} copo de água`
  }
  return saida
}
console.log(hydrate('10 cachaça, 50 cervejas e 10 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
