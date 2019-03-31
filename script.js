var trigger = document.getElementById('dropdown');

trigger.addEventListener('click', function open(){
	
	var target = document.getElementById('dropdown-list');
	
	if (target.style.display === 'none' || target.style.display === '' ){
		target.style.display = 'block';
	}else{
		target.style.display = 'none';
	}
});