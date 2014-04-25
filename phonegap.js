navigator.geolocation.getCurrentPosition(show_location, big_error);

function show_location(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    document.getElementById('location').innerHTML="Location is "+lat+", "+lon;
  }

  function big_error(err) {
    document.getElementById('location').innerHTML=err.code;
  }


