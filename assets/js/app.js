if('serviceWorker' in navigator){
    console.log('sw can be installed')
    navigator.serviceWorker
    .register('sw.js')
    .then(function(){
        console.log('server worked is registered')
    })
    .catch(function(err){
        console.log('error while registering serviceWorker', err)
    })
}