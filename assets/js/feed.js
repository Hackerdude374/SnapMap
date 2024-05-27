var canvas = document.getElementById('capturedImg')
var userLocation
var geoRecall = true
var progressbar = document.getElementById('imgprogressbar');

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
    canvas.toBlob(blob => {
        var name = currentUsersemail + new Date().toISOString()
        var storeRef = firebase.storage().ref('feed/'+ name)

        var task = storeRef.put(blob)
        progressbar.parentElement.style.display = 'flex'
        task.on('state_changed',function(snapshot){
            var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            progressbar.style.width = percent + '%'
        }, function( err){
            console.log(err)
        },function complete(){
            progressbar.parentElement.style.display = 'none'
            progressbar.style.width = '0%'
        })
        task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url=> {
            console.log(url)
            fetch('gs://snapmap-gis.appspot.com/feed.json',{
                method: 'POST',
                headers :{
                    'Content-type' : 'application/json',
                    'Accept': 'application/json'
                },body:JSON.stringify({
                    "email":currentUsersemail,
                    "status": document.getElementById('feeling').value,
                    "image": url,
                    "location":location,
                    "time": new Date().toISOString()
                })
                })
                .then(function(res){
                    console.log('entry added')
                    var cts  = canvas.getContext('2d')
                    ctx.clearRect(0,0,240,320)
                    document.getElementById('feeling').value = ''
                    document.getElementById('position_info').innerHTML = ''
                    $('#newentry').modal('hide')
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    }
