

var messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
	console.log('permiso');
	swal("¡Exito!", "Su grúa ha sido solicitada", "Ok");
})
.catch(function(){
	console.log('denegado')
})
