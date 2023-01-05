class Cuota {
  constructor(cuotaNro, mensualidad, pagocapital, pagointeres, credito) {
    this.cuotaNro = cuotaNro;
    this.mensualidad = mensualidad;
    // this.fecha = fecha;
    this.pagocapital = pagocapital;
    this.pagointeres = pagointeres;
    this.credito= credito;
  }

  // mostrar() {
  //   console.log(`Cuota Nro: ${this.cuotaNro} Cuota: ${this.mensualidad} Capital: ${this.pagocapital} Interes: ${this.pagointeres}  Saldo: ${this.credito}` );
  // }
  
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
    

    let row = document.createElement('tr');
  row.innerHTML = `<td>${cuotaNro}</td>
                   <td>${mensualidad.toFixed(2)}</td>
                   <td>${pagocapital.toFixed(2)}</td>
                   <td>${pagointeres.toFixed(2)}</td>
                   <td>${credito.toFixed(2)}</td>
                  `;
  let tabla = document.getElementById("tbody");
  tabla.append(row);

  cuotaNro++;

  }

  // let a =credito.toFixed(2);

  // let tinteres = cuotas*pagointeres;
  // document.getElementById("tinteres").innerHTML=tinteres; 

}

// function consultarCuota(cuota){
//   return cuota.cuotaNro == consulta
// }

let credito = document.getElementById("credito");
let cuotas = document.getElementById("cuotas");
let interes = document.getElementById("interes");
let btnSimular = document.getElementById("btnSimular");
let tabla = document.getElementById("tbody");

console.log(`credito === ${credito} cuotas ===${cuotas}  interes===${interes}`);
// btnSimular.addEventListener('click', calcularCredito(Credito, cuotas, interes));

btnSimular.addEventListener("click", () => {
 calcularCredito(credito.value, cuotas.value, interes.value);
});

// let credito = parseInt(prompt("Ingrese el monto a solicitar"));
// let cuotas = parseInt(prompt("¿Cuantas cuotas desea?"));
// let interes = parseFloat(prompt("Ingrese el interes"));

// calcularCredito(credito, cuotas, interes);

// let consulta = parseInt(prompt("Ingrese el numero de cuota que desea consultar"));
// console.log(`La cuota consulta es la cuota = ${consulta}`);
// let resultadoConsulta = totalCuotas.find(consultarCuota);
// console.log(resultadoConsulta);
