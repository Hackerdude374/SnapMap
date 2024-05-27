var map
mapboxgl.accessToken = 'pk.eyJ1IjoiamltYm9qb25lczEyMyIsImEiOiJjbHdqemkxdXMxNjN1MmpsZWQyMnhpZWF4In0.xFj5mvD2KTm3K9VwF-mupw';
function mapinit(){
    
   map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
//fetch data from database 
    feedData()  }

    function feedData(){
      fetch('https://snapmap-gis-default-rtdb.firebaseio.com/feed.json')
      .then((response) =>{
          return response.json()
      })
      .then((data) => {
        var ids = Object.keys(data)

        for(i= 0; i <ids.length; i++){
          // create the popup
  //   const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  //     '<p> Status : ' + data[ids[i]].status + ' </p> <img src' + data[ids[i]].image + ' /> <p> Email : ' + data[ids[i]].image + ' /> <p>'

  // );

  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<p> Status : ' + data[ids[i]].status + ' </p> <img src=' + data[ids[i]].image + ' /> <p> Email : ' + data[ids[i]].email + ' </p>'
    );

  // create DOM element for the marker
  const el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker()
      .setLngLat([data[ids[i]].location.longitude, data[ids[i]].location.latitude])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

        }
      })
    }
