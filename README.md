# Rainbow.js

A jQuery plugin for creating rainbow or gradient text

[Get it from Github](http://github.com/xoxco/rainbow-text)

[View Demo](http://xoxco.com/projects/code/rainbow/)

[Test it yourself using this jsFiddle Demo](http://jsfiddle.net/ajVzR/)

Created by [XOXCO](http://xoxco.com)


## Instructions

	$('#foo').rainbow({	
		colors: [
			'#FF0000',
			'#f26522',
			'#fff200',
			'#00a651',
			'#28abe2',
			'#2e3192',
			'#6868ff'
		],
		animate: true,
		animateInterval: 100,
		pad: false,
		pauseLength: 100,
	});


## Options:

* colors: an array of CSS color values
* animate: boolean
* animateInterval: # of ms between frames
* pad: pad the color array with the last color so the gradient appears only once
* pauseLength: # of ms to pause between iterations through the colors