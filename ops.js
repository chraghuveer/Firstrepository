function add(){
	var a = document.getElementById('first_number').value;
	var b = document.getElementById('second_number').value;
	var c = parseInt(a)+parseInt(b);
	document.getElementById('addition').innerHTML = c;
	alert(c);

}

function sub(){
	var a = document.getElementById('first_number').value;
	var b = document.getElementById('second_number').value;
	var c = parseInt(a)-parseInt(b);
	document.getElementById('subtraction').innerHTML = c;

	alert(c);
}