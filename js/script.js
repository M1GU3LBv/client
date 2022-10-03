
$(document).ready(function () {  
    $.ajax({  
        type: "GET",  
        url: "http://localhost:9999/api/profesor",    
        dataType: "json", 
        success: function (data) {  
            
            
            console.log(data);
            
            
            
           $.each(data, function(i,item){
                    var row = "<tr>"+
                    "<td>" + item.nombre + "</td>" + 
                    "<td>" + item.departamento + "</td>" +
                    
                    "</tr>";						 
                   $("#nashe>tbody").append(row);
               });
        },   
    });  
    
    


}); 
