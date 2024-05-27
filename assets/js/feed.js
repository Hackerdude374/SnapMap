var canvas = document.getElementById('capturedImg')


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

