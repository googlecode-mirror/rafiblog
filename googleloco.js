/*
 * Michi Kono
 * michikono.com
 * Created January 30, 2007
 */
function addEvent(object, eventType, functionPointer){ 
	if (!object) {
		return false;
	}
	if (object.addEventListener){ 
		object.addEventListener(eventType, functionPointer, false); 
		return true; 
	}
	else if (object.attachEvent){ 
		var result = object.attachEvent("on" + eventType, functionPointer); 
		return result; 
	}
	else { 
		return false; 
	} 
};

loco = {
	colors: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],

	generateHex: function() {
		digit = new Array(5);
		color = '';
		for (i=0; i<6; i++) {
			digit[i]=loco.colors[Math.round(Math.random()*14)];
			color = color+digit[i];
		}
		return color;
	},

	locoEffects: function(event, object) {
		loco.locoColors(event, object);
		current = event.currentTarget ? event.currentTarget : event.srcElement;
	},
	
	locoColors: function(event, object) {
		current = event.currentTarget ? event.currentTarget : event.srcElement;
		current.style.color = loco.generateHex();
		current.style.backgroundColor = loco.generateHex();
	},
	
	keepUpdated: function(event, object) {
		current = event.currentTarget ? event.currentTarget : event.srcElement;
		document.getElementById('search-box').value = current.value;
		
		if(false && event.currentTarget) {
			caretStart = current.selectionStart;
			caretEnd = current.selectionEnd;
			if(caretStart == caretEnd && caretStart == 0) {
				current.selectionStart = 1;
				current.selectionEnd = 1;
				current.focus();
			}
			if(current.value.charCodeAt(0) != 8238) {
				charStripper = new RegExp(String.fromCharCode(8238), 'g');
				current.value = String.fromCharCode(8238) + current.value.replace(charStripper, "");
			}
			if(current.value.charCodeAt(0) == 8238) {
				document.getElementById('search-box').value = document.getElementById('search-box').value.substr(1);
			}
		}
	},
	
	feeling: function(event, object) {
	//	document.location.href = 'http://www.google.com/search?btnI=1&q=' + escape(document.getElementById('search-box').value);
	}
};


initializeOnLoad = function(event) {
	addEvent(document.getElementById('search-box'), 'keydown', loco.locoEffects);
	addEvent(document.getElementById('search-box'), 'load', loco.locoEffects);
	addEvent(document.getElementById('search-box'), 'blur', loco.keepUpdated);
	addEvent(document.getElementById('search-box'), 'keypress', loco.keepUpdated);
	//addEvent(document.getElementById('loco-button'), 'click', loco.feeling);
	//addEvent(document.getElementById('search-button'), 'click', loco.search);
}

addEvent(window, 'load', initializeOnLoad);