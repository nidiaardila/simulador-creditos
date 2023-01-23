//clase cuota
class Cuota {
  constructor(numeroCuota, fecha, mensualidad, pagocapital, pagointeres, credito) {
    this.numeroCuota = numeroCuota;
    this.fecha = fecha;
    this.mensualidad = mensualidad;
    this.pagocapital = pagocapital;
    this.pagointeres = pagointeres;
    this.credito = credito;
  }
}

//Array de almacenacimiento de objetos clase Cuota
let totalCuotas = [];

//funcion calcularCredito
function calcularCredito(credito, cuotas, interes) {
  let numeroCuota = 1;
  let pagocapital = 0;
  let pagointeres = 0;
  let mensualidad = 0;
  let fecha = new Date();
//variables para calcular el total a pagar
  let tcuota = 0;
  let tcapital = 0;
  let tinteres = 0;

  //formula para calcular valor de cada cuota
  mensualidad =(credito * ((Math.pow(1 + interes / 100, cuotas) * interes) / 100)) / (Math.pow(1 + interes / 100, cuotas) - 1);

  document.getElementById("tbody").innerHTML = "";
  totalCuotas = [];



  for (let i = 1; i <= cuotas; i++) {
    // Calcula la fecha de pago de la cuota
    fecha.setMonth(fecha.getMonth() + 1);
    fecha.setDate(1);

    pagointeres = parseFloat(credito * (interes / 100));
    pagocapital = mensualidad - pagointeres;
    credito = parseFloat(credito - pagocapital);

    let cuota = new Cuota(
      numeroCuota,
      fecha,
      mensualidad,
      pagocapital,
      pagointeres,
      credito
    );
    totalCuotas.push(cuota);


    // document.getElementById("tbody").innerHTML=document.getElementById("tbody").innerHTML+
    // `<td>${numeroCuota}</td>
    //                <td>${fecha.toDateString()}</td>
    //                <td>${mensualidad.toFixed(2)}</td>
    //                <td>${pagocapital.toFixed(2)}</td>
    //                <td>${pagointeres.toFixed(2)}</td>
    //                <td>${credito.toFixed(2)}</td>
    //               `;
    // let tabla = document.getElementById("tbody");
    // tabla.append(row);

    let row = document.createElement("tr");
    row.innerHTML = `<td>${numeroCuota}</td>
                   <td>${fecha.toDateString()}</td>
                   <td>${mensualidad.toFixed(2)}</td>
                   <td>${pagocapital.toFixed(2)}</td>
                   <td>${pagointeres.toFixed(2)}</td>
                   <td>${credito.toFixed(2)}</td>
                  `;
    let tabla = document.getElementById("tbody");
    tabla.append(row);
   

    numeroCuota++;
  }

  //calcular el total pagado en interes, capital y cuotas
  for (let i = 0; i < totalCuotas.length; i++) {
    tcuota += totalCuotas[i].mensualidad;
    tcapital += totalCuotas[i].pagocapital;
    tinteres += totalCuotas[i].pagointeres;
  }
    

  // console.log("ESTE ES")
  // console.log(document.getElementById("tbody"))
  let totalCuota = document.getElementById("totalCuota");
  totalCuota.innerHTML = tcuota.toFixed(2);

  let totalCapital = document.getElementById("totalCapital");
  totalCapital.innerHTML = tcapital.toFixed(2);

  let totalInteres = document.getElementById("totalInteres");
  totalInteres.innerHTML = tinteres.toFixed(2);


  // Convertir el array de objetos 'totalCuotas' a una cadena de texto JSON
  let totalCuotasJSONString = JSON.stringify(totalCuotas);

  // Almacenar la cadena JSON en el almacenamiento local
  localStorage.setItem("totalCuotas", totalCuotasJSONString);

  // Recuperar la cadena JSON del almacenamiento local
  let totalCuotasJSONFromStorage = localStorage.getItem("totalCuotas");

  // Convertir la cadena JSON a un array de objetos
  let totalCuotasArray = JSON.parse(totalCuotasJSONFromStorage);

  console.log("totalCuotasJSONString");
  console.log(totalCuotasJSONString);
  console.log("totalCuotasJSONFromStorage");
  console.log(totalCuotasJSONFromStorage);
  console.log("totalCuotasArray");
  console.log(totalCuotasArray);
}

//funcion limpiar la tabla - borrar
function limpiarTabla() {

  Swal.fire({
    title: '¿Deseas eliminar la simulacion?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let tabla = document.getElementById("tbody");
  tabla.innerHTML = "";
  let filaTotales = document.getElementById("filaTotales");
  filaTotales.parentNode.removeChild(filaTotales);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

  // let tabla = document.getElementById("tbody");
  // tabla.innerHTML = "";
  // // totalcuota.innerHTML ="";
  // // totalCapital.innerHTML = "";
  // // totalInteres.innerHTML = "";
  // let filaTotales = document.getElementById("filaTotales");
  // filaTotales.parentNode.removeChild(filaTotales);

  }
  
let credito = document.getElementById("credito");
let cuotas = document.getElementById("cuotas");
let interes = document.getElementById("interes");
let btnSimular = document.getElementById("btnSimular");
let tabla = document.getElementById("tbody");

let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");

// boton simular - llamado a funcion calcularCredito
let simulationDone = false;
btnSimular.addEventListener("click", () => {
  if (!simulationDone) {
    calcularCredito(credito.value, cuotas.value, interes.value);
    simulationDone = true;
  }
});

// btnSimular.addEventListener("click", () => {
  
//     calcularCredito(credito.value, cuotas.value, interes.value);
    
  
// });

// manejador de evento para el botón Borrar - llama a la función para limpiar la tabla
document.getElementById("btnBorrar").addEventListener("click", function () {
  limpiarTabla();
});

// localStorage
nombre.addEventListener("input", () => {
  localStorage.setItem("nombre", nombre.value);
});
fecha.addEventListener("input", () => {
  localStorage.setItem("fecha", fecha.value);
});
credito.addEventListener("input", () => {
  localStorage.setItem("credito", credito.value);
});
cuotas.addEventListener("input", () => {
  localStorage.setItem("cuotas", cuotas.value);
});
interes.addEventListener("input", () => {
  localStorage.setItem("interes", interes.value);
});

window.addEventListener("load", () => {
  nombre.value = localStorage.getItem("nombre");
  fecha.value = localStorage.getItem("fecha");
  credito.value = localStorage.getItem("credito");
  cuotas.value = localStorage.getItem("cuotas");
  interes.value = localStorage.getItem("interes");
  // localStorage.clear();
});

  //API openweather

document.addEventListener("DOMContentLoaded", main);

const key = "042084c7e790ea4cb6ceadc791a3fc89";
let city;

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await response.json();
    updateWeather(data);
}

function updateWeather(data) {
    const temperaturaKelvin = data.main.temp;
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    const weather = data.weather[0].main;
    const iconUrl = getWeatherIcon(data.weather[0].icon);
    document.getElementById("temp").innerHTML = temperaturaCelsius.toFixed(2);
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("icon").src = iconUrl;
}

function getWeatherIcon(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function main() {
    const cityInput = document.getElementById("ciudad-input");
    cityInput.addEventListener("change", function(){
        city = this.value;
        getWeather();
    });
}



