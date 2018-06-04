/*  global $
    global ftoi
NOTE: Turn off alerts in editor */
$(document).ready(function() {
    $.ajax({
     //method: "GET",
     url: "https://newsapi.org/v2/sources",
     data: { category: "sport", country: "us", language: "en", apiKey: "299724b477974817929291d2fcbe15d4"},
     success: function(data){
        if (data.status == "ok") {
        console.log (data)
         for (var i = 0; i < data.sources.length; i++) {
            var source = document.createElement("OPTION");
            source.setAttribute("value", data.sources[i].id)
            source.innerHTML = data.sources[i].name;
            document.getElementById('selection').appendChild(source);
            
            
         }
     }
  }
 
//DO NOT TOUCH 
  })
  
  
  
  function XYZ (headlines){
  $.ajax({
     //method: "GET",
     url: "https://newsapi.org/v2/top-headlines",
     data: { category: "sport", country: "us", language: "en", apiKey: "299724b477974817929291d2fcbe15d4"},
     success: function(headline){
    
        for (var x = 0; x < headline.articles.length; x++) {
             var headlines = document.createElement("P")
             headline.innerHTML = headline.articles[x].title;
             document.getElementById("headline").appendChild(headlines)
             console.log(headline)
             
        }
     }

            
  //
  $('#source').submit( function(event) {
      event.preventDefault();
      alert(document.getElementById('selection').value)
      displayIT(document.)
      //Top headlines from source selected - 
      
      //Function to display headlines with an ajax call
      
      // use ID - reach out to top headlines - display "title"
      
  });
         
     });
      
  });
    
});
});
       //




    //.done(function( data ) {
      // console.log ( data );
       //console.log ( data.status )