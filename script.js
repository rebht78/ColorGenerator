window.onkeydown = function(e)
{
	//getting the div with id keycode
	var divKeyCode = document.querySelector('#keycode');
	//getting the div with id actualkey
	var divActual = document.querySelector('#actualkey');

	divKeyCode.innerHTML = e.keyCode;
	divActual.innerHTML = e.key;
};