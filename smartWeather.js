var x=document.getElementById("demo");
    function getLocation()
    {
      if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
      else{p.innerHTML="Geolocation is not supported by this browser.";}
    }
    
    function showPosition(position)
    {
      p.innerHTML="Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;	
    }