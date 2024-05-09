console.log("nodemon iniciado")
// variables globales
let nPob = 1000
let nElitePob = 10
let nGen = 1000
let min = -9
let max = 9
class individuo{
  constructor(cromosoma,aptitud,padre,madre){
    this.cromosoma = cromosoma
    this.aptitud = aptitud
    this.padre = padre
    this.madre = madre
  }
  getApt(){
    return this.aptitud
  }
}

function fxAptitud(cromosoma){
let x = cromosoma[0]
let y = cromosoma[1]

eval = (cromosoma[0]*cromosoma[0])+cromosoma[1]*Math.sin(cromosoma[0])
//eval = 1/(x*x+y*Math.sin(x))*1/(x*x+y*Math.sin(y))*Math.cos(x+y)*y/x
  return eval
}
// probamos el super elitismo
function elitismo(poblacion,nE){
  let poblacionElite = []
  let poblacion2 = poblacion.map((x) => x)

  let c = 1
  for(let i = 0; i < nElitePob ; i++){
    masApto = poblacion2.reduce((previous, current) => {
    return current.aptitud < previous.aptitud ? current : previous;
    });
    poblacionElite.push(masApto)
    //console.log(masApto)
    let indiceMejor = poblacion2.indexOf(masApto) 
    //console.log(poblacion2[indiceMejor])
    let elegido = poblacion2.splice(indiceMejor, 1)
    /*console.log(indiceMejor)
    console.log(poblacion2[indiceMejor])
  */
  }
  //console.log(poblacionElite)
  return poblacionElite
}

function nuevaGen(pobElite){
  let nuevaPob = pobElite.map((x) => x)
  for(let i = nElitePob; i < nPob; i++){
    let xCrom = aleatorioRango();
    let yCrom = aleatorioRango();
    cromosoma = [xCrom,yCrom]
    let ind = new individuo(cromosoma,fxAptitud(cromosoma),0,0);
    //console.log(ind)
    nuevaPob.push(ind)
}
//console.log(nuevaPob.length)
return nuevaPob
}



function masacre(pob){
  for(let i = 0; pob.length; i++){
    pob.pop()
  }
}

function aleatorioRango(){ 
  random =  Math.random() * (max - min + 1) + min
  if(random < min){
    random = Math.ceil(random)
  }
  if(random > max){
  random = Math.floor(random)
  }
return random
}

// probando generacion de poblacion

let poblacion = []
console.log("poblacion inicial")
for(let i = 0; i < nPob; i++){
  let xCrom = aleatorioRango();
  let yCrom = aleatorioRango();
  cromosoma = [xCrom,yCrom]
  let ind = new individuo(cromosoma,fxAptitud(cromosoma),0,0);
  //console.log(ind)
  poblacion.push(ind)
}
/*
for(let i = 0; i < 10; i++){
console.log(aleatorioRango())
}
*/
// creacion de generaciones

for(let i = 0; i < nGen; i++){
  let pobElite = elitismo(poblacion)
  let nGen = nuevaGen(pobElite)
  masacre(poblacion)
  poblacion = nGen.map((x) => x)
  //console.log(poblacion)
  //console.log("----fin nueva pob-----")
}

console.log("Mejores Individuos")

for(let i = 0; i < nElitePob; i++ ){
  console.log(poblacion[i])
}

