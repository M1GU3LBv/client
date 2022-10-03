$(document).ready(function () { 
 var departamento = ['Informática','Matemáticas',	'Economía y Empresa','Educación','Agronomía','Química y Física'], id_departamento = [] , nombre = [];
   
 

//  async function dummyChart() {
//     await getDummyData()
  
//   const ctx = document.getElementById('myChart').getContext('2d');
  
//   const chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'bar',
  
//       // The data for our dataset
//       data: {
//           labels: employeeLabel,
//           datasets: [{
//               label: 'Profesor',
//               backgroundColor: 'blue',
//               borderColor: 'rgb(255, 99, 132)',
//               data: departamento
//           },
//           {
//             label: 'Departamento',
//             backgroundColor: 'pink',
//             borderColor: 'rgb(255, 99, 132)',
//             data: nombre
//         }
//         ]
//       },
  
//       // Configuration options go here
//       options: {
//         tooltips: {
//           mode: 'index'
//         }
//       }
//   })}
//   dummyChart();
//   async function getDummyData() {
//     const apiUrl = "http://localhost:9999/api/profesor"
  
//     const response = await fetch(apiUrl)
//     const barChatData = await response.json()
//     console.log(barChatData);
//     const salary = barChatData.data.map((x) => x.departamento)
//     console.log(salary);
//     const age = barChatData.data.map((x) => x.id_departamento)
//     const name = barChatData.data.map((x) => x.nombre)
  
//     departamento = salary
//     id_departamento = age
//     nombre = name
//   }

























    
    
    $.ajax({
        type: "GET",  
        url: "http://localhost:9999/api/profesor",    
        dataType: "json",
    success: function (data, status, xhr) {
    
    var gdpData = data;
    
    gdpData.forEach(element => {
        // departamento.push(element.departamento);
        id_departamento.push(element.id_departamento);
    });
    
    createBarGraph(id_departamento, departamento);
    
    }
    });

}); 
function createBarGraph(val, name) {
        let barChart = new Chart("myChart", {
        type: "bar",
        data: {
        labels: name,
        datasets: [{
        data: val,
        label: 'GDP Value (in Trillions)',
        backgroundColor: ["#b71540", "#eb2f06", "#f6b93b", "#0c2461", "#1e3799",
        "#0a3d62", "#60a3bc", "#079992", "#78e08f", "#6a89cc"]
        }]
        },
        options:{
        
        }
        });
        }