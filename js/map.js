initMap();

        function initMap() {
          var location  = {lat: 41.52963, lng: -81.65147};
          var map = new google.maps.Map(document.getElementById("map"), {
              zoom: 15,
              center: location
          });
          var marker = new google.maps.Marker({
              position: location,
              map: map
          })
      }