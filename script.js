 function myFunc() {

    var x = document.getElementById('img').src='';

        $.ajax({





            


         url: "https://api.thecatapi.com/v1/images/search?size=full",
         type: "GET",
         success: function (data) { 


            document.getElementById('img').src=data[0].url;




          }







      });


     }

// setInterval(myFunc,5000);