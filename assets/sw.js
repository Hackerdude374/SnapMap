self.addEventListener('install', function(event){
    console.log('Service worker is installed', event)
})

self.addEventListener('activate', function(event){
    console.log('Service worker is activated', event)
})

self.addEventListener('fetch', function(event){
    // console.log('Service worker is fetched', event)
})