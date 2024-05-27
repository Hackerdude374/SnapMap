var canvas = document.getElementById('capturedImg')
var userLocation
var geoRecall = true
var progressbar = document.getElementById('imgprogressbar')

function addimgtocanvas(e){
    var reader = new FileReader()
    reader.onload = function(event){
        var img = new Image()
        img.onload = function(){
            var ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0,0,240,320)
        }
        img.src = event.target.result
    }
    reader.readAsDataURL(e.files[0])
}

function showPosition(position){
    document.getElementById('position_info').innerHTML = 'We got position! Saving the post'
    document.getElementById('position_info').style.color = 'green'
    userLocation ={
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }
    console.log("userLocation from feed.js :", userLocation)
    submitPost(userLocation)
    geoRecall = false

}
function positionError(){
    document.getElementById('position_info').innerHTML = 'Please turn on ur GPS!'
    document.getElementById('position_info').style.color = 'red'
    userLocation = undefined
    if(geoRecall){
        geolocagain()
    }
}
function getlocagain(){
    navigator.geolocation.getCurrentPosition(showPosition, positionError)
}
function getlocation(){
    navigator.geolocation.getCurrentPosition(showPosition, positionError)
}

function submitPost(location){
    canvas.toBlob(blob =>{
        var name = currentUsersemail + new Date().toISOString()
        var storeRef = firebase.storage().ref('feed/')
    })
}

