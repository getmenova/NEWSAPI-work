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
 
 
 
 
  })
   $('#source').submit( function(event) {
      event.preventDefault();
      alert(document.getElementById('selection').value)
      
   });
})







    //.done(function( data ) {
      // console.log ( data );
       //console.log ( data.status )