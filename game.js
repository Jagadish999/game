var player;
var upKeyPressed = false;
var downKeyPressed = false;
var leftKeyPressed = false;
var rightKeyPressed = false;

function keydown(event) {
	if (event.keyCode == 37) {		
		leftKeyPressed = true;
	}
	if (event.keyCode == 39) {
		rightKeyPressed = true;
	}
	if (event.keyCode == 38) {
		upKeyPressed = true;
	}
	if (event.keyCode == 40) {
		downKeyPressed = true;
	}	
}

function keyup(event) {
	if (event.keyCode == 37) {		
		leftKeyPressed = false;
		player.className = 'character standLeft';
	}
	if (event.keyCode == 38) {
		upKeyPressed = false;
		player.className = 'character standUp';
	}
	if (event.keyCode == 39) {
		rightKeyPressed = false;
		player.className = 'character standRight';
	}
	if (event.keyCode == 40) {
		downKeyPressed = false;
		player.className = 'character standDown';
	}	
}


function move() {
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;


	if (downKeyPressed == true) {
		player.style.top = positionTop + 1 + 'px';
		player.className = 'character walkDown';
	}

	if (upKeyPressed == true) {
		player.style.top = positionTop - 1 + 'px';
		player.className = 'character walkUp';
	}

	if (leftKeyPressed == true) {
		player.style.left = positionLeft - 1 + 'px';
		player.className = 'character walkLeft';
	}

	if (rightKeyPressed == true) {
		player.style.left = positionLeft + 1 + 'px';
		player.className = 'character walkRight';
	}
}

function setHead() {
	var head = player.getElementsByClassName('head')[0];
	head.style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function setBody() {
	var body = player.getElementsByClassName('body')[0];
	body.style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function myLoadFunction() {
	player = document.getElementById('player');

	var ulHead = document.getElementsByClassName('heads')[0].getElementsByTagName('li');
	for (var i = 0; i < ulHead.length; i++) {
		ulHead[i].addEventListener('click', setHead);
	}
	
	var ulBody = document.getElementsByClassName('bodies')[0].getElementsByTagName('li');
	
	for (var i = 0; i < ulBody.length; i++) {
		ulBody[i].addEventListener('click', setBody);
	}

	var interval = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}


document.addEventListener('DOMContentLoaded', myLoadFunction);