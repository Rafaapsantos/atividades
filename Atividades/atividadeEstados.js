const sp = 67.83643
const rj = 36.67866
const mg = 29.22988
const es = 27.16548
const outros = 19.84953

const total = sp + rj + mg + es + outros

const porcSp = (sp / total) * 100
const porcRj = (rj / total) * 100
const porcMg = (mg / total) * 100
const porcEs = (es / total) * 100
const porcOutros = (outros / total) * 100;

console.log('Porcentagem de SP:', porcSp.toFixed(2));
console.log('Porcentagem de RJ:', porcRj.toFixed(2));
console.log('Porcentagem de MG:', porcMg.toFixed(2));
console.log('Porcentagem de ES:', porcEs.toFixed(2));
console.log('Porcentagem de OUT:', porcOutros.toFixed(2));