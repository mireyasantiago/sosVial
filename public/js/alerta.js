var messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
	console.log('permiso')
})
.catch(function(){
	console.log('denegado')
})
