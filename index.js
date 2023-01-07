class Cuota {
  constructor(cuotaNro, mensualidad, pagocapital, pagointeres, credito) {
    this.cuotaNro = cuotaNro;
    this.mensualidad = mensualidad;
    // this.fecha = fecha;
    this.pagocapital = pagocapital;
    this.pagointeres = pagointeres;
    this.credito= credito;
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

}

// function consultarCuota(cuota){
//   return cuota.cuotaNro == consulta
// }

let credito = document.getElementById("credito");
let cuotas = document.getElementById("cuotas");
let interes = document.getElementById("interes");
let btnSimular = document.getElementById("btnSimular");
let tabla = document.getElementById("tbody");

let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");


btnSimular.addEventListener("click", () => {
 calcularCredito(credito.value, cuotas.value, interes.value);
});

btnBorrar.addEventListener("click", () => {
nombre.value = '';
fecha.value = '';
credito.value = '';
cuotas.value = '' ;
interes.value = '' ;
tbody.innerHTML= '';
});

// localStorage
nombre.addEventListener('input', () => {
  localStorage.setItem('nombre', nombre.value);
});
fecha.addEventListener('input', () => {
  localStorage.setItem('fecha', fecha.value);
});
credito.addEventListener ('input', () => {
  localStorage.setItem ('credito', credito.value);
});
cuotas.addEventListener ('input', () => {
  localStorage.setItem ('cuotas', cuotas.value);
});
interes.addEventListener ('input', () => {
  localStorage.setItem ( 'interes', interes.value);
});

window.addEventListener('load', ()=> {
  nombre.value = .getItem ('nombre');
  fecha.value = localStorage.getItem ('fecha');
  credito.value = localStorage.getItem ('credito');
  cuotas.value = localStorage.getItem ('cuotas');
  interes.value = localStorage.getItem('interes');
  // localStorage.clear();
} );
