$(document).ready(function(){

	var container = $('#cont'),
		li = container.find('li');

	// Using the tzShutter plugin. We are giving the path
	// to he shutter.png image in the plugin folder and two
	// callback functions.

	container.tzShutter({
		imgSrc: 'http://3.bp.blogspot.com/-NfAg3D0osc8/T2NeY3FqhLI/AAAAAAAAAtY/K8jW9x4imxQ/s1600/shutter.png',
		closeCallback: function(){

			// Cycling the visibility of the li items to
			// create a simple slideshow.

			li.filter(':visible:first').hide();

			if(li.filter(':visible').length == 0){
				li.show();
			}

			// Scheduling a shutter open in 0.1 seconds:
			setTimeout(function(){container.trigger('shutterOpen')},100);
		},
		loadCompleteCallback:function(){
			setInterval(function(){
				container.trigger('shutterClose');
			},4000);

			container.trigger('shutterClose');
		}
	});

});
