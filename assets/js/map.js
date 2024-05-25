function mapinit(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiamltYm9qb25lczEyMyIsImEiOiJjbHdqemkxdXMxNjN1MmpsZWQyMnhpZWF4In0.xFj5mvD2KTm3K9VwF-mupw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
}