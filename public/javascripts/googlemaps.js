var map;
var myOptions = {
          zoom: 15,
          center: new google.maps.LatLng( ﻿10.033333, 105.783333),
          mapTypeId: google.maps.MapTypeId.ROADMAP
};
function initialize() { 

        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(function(position){
            map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
/*
             var marker = new google.maps.Marker({                
                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                map: map,
                draggable:true
             });
*/
            // map.panTo(position);
          });      
        }

   //     google.maps.event.addListener(map, 'click', function(e) {
   //       placeMarker(e.latLng, map);
   //     });      
      }

function placeMarker(position, map) {
 var marker = new google.maps.Marker({
   position: position,
   map: map,
   draggable:true
   });
  map.panTo(position);
}
google.maps.event.addDomListener(window, 'load', initialize);
