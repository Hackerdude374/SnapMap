function showAlert(div, type,msg){
    var putInDiv = document.getElementById(div)
    putInDiv.innerHTML ='<div class="alert alert-'+type+' alert-dismissible fade show" role="alert">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close">  <span aria-hidden="true">&times;</span></button> </div>'
}


$('#sign_up_form').submit(function(e){
    e.preventDefault()
    var email = document.querySelector('#sign_up_email')
    var pwd1 = document.querySelector('#sign_up_pwd1')
    var pwd2 = document.querySelector('#sign_up_pwd2')

    if(pwd1 === pwd2){
        

        firebase.auth().createUserWithEmailAndPassword(email, pwd1).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });

       
    } else{
        showAlert('sign_up_alerts','warning','Hi! The passwords are not matching!!')
    }
})