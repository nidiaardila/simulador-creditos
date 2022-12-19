class Cuota {
  constructor(cuotaNro, mensualidad, pagocapital, pagointeres, credito) {
    this.cuotaNro = cuotaNro;
    this.mensualidad = mensualidad;
    // this.fecha = fecha;
    this.pagocapital = pagocapital;
    this.pagointeres = pagointeres;
    this.credito= credito;
  }

  mostrar() {
    console.log(`Cuota Nro: ${this.cuotaNro} Cuota: ${this.mensualidad} Capital: ${this.pagocapital} Interes: ${this.pagointeres}  Saldo: ${this.credito}` );
  }
}

let totalCuotas = [];

function calcularCredito(credito, cuotas, interes) {
  let cuotaNro = 1;
  let pagocapital = 0;
  let pagointeres=0;
  let mensualidad=0;

   mensualidad = credito * (Math.pow(1 + interes / 100, cuotas) * interes / 100) /(Math.pow(1 + interes / 100, cuotas) - 1);
  
  for (let i = 1; i <=cuotas; i++) {
    pagointeres = parseFloat(credito * (interes / 100));
    pagocapital = mensualidad - pagointeres;
    credito = parseFloat(credito - pagocapital);
  
    let cuota = new Cuota(cuotaNro, mensualidad, pagocapital, pagointeres, credito);
    totalCuotas.push(cuota);
    cuotaNro++;
  }

  for (let cuota of totalCuotas) {
    cuota.mostrar();
  }
}


function consultarCuota(cuota){
  return cuota.cuotaNro == consulta
}


let credito = parseInt(prompt("Ingrese el monto a solicitar"));
let cuotas = parseInt(prompt("¿Cuantas cuotas desea?"));
let interes = parseFloat(prompt("Ingrese el interes"));

calcularCredito(credito, cuotas, interes);


let consulta = parseInt(prompt("Ingrese el numero de cuota que desea consultar"));
console.log(`La cuota consulta es la cuota = ${consulta}`);
let resultadoConsulta = totalCuotas.find(consultarCuota);
console.log(resultadoConsulta);