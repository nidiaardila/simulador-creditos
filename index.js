// Clase Cuota

class Cuota{
    
    constructor(cuotaNro, capital, interes, total){
        this.cuotaNro = cuotaNro;
        // this.fecha = fecha;
        this.capital = capital;
        this.interes = interes;
        this.total = total;
    }

    mostrar(){
        console.log(`Cuota Nro: ${this.cuotaNro} Capital: ${this.capital} Interes: ${this.capital} Total: ${this.total}` )
    }
}

let cuota1 = new Cuota(1, 100, 10, 110) 
cuota1.mostrar();

let totalCuotas = [];



function calcularCredito(credito, cuotas) {
    let totalCredito = 0;
    let mensual = (credito / cuotas) * 1.2;
  
    if (cuotas > 5) {
      mensual = (credito / cuotas) * 1.3;
    } else if (cuotas > 12) {
      mensual = (credito / cuotas) * 1.4;
    }
  
    for (i = 1; i <= cuotas; i++) {
      totalCredito += mensual;
      console.log(`cuota ${i} = ${mensual}`);
    }
    console.log(totalCredito);
    return totalCredito;
  }
  
  let credito = parseInt(prompt("Ingrese el monto a solicitar"));
  let cuotas = parseInt(prompt("¿Cuantas cuotas desea?"));
  
  let total = calcularCredito(credito, cuotas);
  
  console.log(`Credito de $${credito} a ${cuotas} cuotas. Total a pagar $ ${total}`);
  alert(`Credito de $${credito} a ${cuotas} cuotas. Total a pagar $ ${total}`);