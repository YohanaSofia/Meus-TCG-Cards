if('geolocation' in navigator){
  const watcher = navigator.geolocation.watchPosition(function(position){
     console.log(position)
  }, function(error){
    console.log(error)
    }, { enableHighAccuracy: true, maximumAge: 30000, timeout: 30000 })
  }else{
    alert('localização indisponível')
  }
