(function($) {
	$.fn.rainbow = function(options) {
		this.each(function() {
		
			options.originalText = $(this).html();
			options.iterations = 0;
			if (!options.pauseLength) {
				options.pauseLength = options.animateInterval;
			}
			$(this).data('options',options);
			
			if (options.pad) {
			
				for (x = 0; x < options.originalText.length; x++) {
					options.colors.unshift(options.colors[options.colors.length-1]);
				}
			}
			
			$.fn.rainbow.render(this);		
			
		});
	}

	$.fn.pauseRainbow = function() {
		this.each(function() {
			var options = $(this).data('options');
			if (options) {
				options.animate = false;
				$(this).data('options',options);		
			}
		});
	}


	$.fn.resumeRainbow = function() {
		this.each(function() {
			var options = $(this).data('options');
			if (options) {
				options.animate = true;
				$(this).data('options',options);		
				$.fn.rainbow.render(this);
			}
		});
	}

		
	$.fn.rainbow.render = function(obj) {
	
			var options = $(obj).data('options');
			var chars = options.originalText.split('');

			options.iterations++;
				
			var newstr = '';
			var counter = 0;
			for (var x in chars) {
			
				if (chars[x]!=' ') {
					newstr = newstr + '<span style="color: ' + options.colors[counter] + ';">' + chars[x] + '</span>';
					counter++;
				} else {
					newstr = newstr + ' ';
				
				}
			
			
				if (counter >= options.colors.length) {
					counter = 0;
				}
			}
			$(obj).html(newstr);
	
			var pause = (options.iterations % options.colors.length == 0);
			


			if (options.animate) {
			
				(
					function(obj,interval) {
						var options = $(obj).data('options');
						var i = setTimeout(function() {
							$.fn.rainbow.shift(obj);
						},interval);
						options.interval = i;
						$(obj).data('options',options);
					}
				)(obj,pause?options.pauseLength:options.animateInterval);
			}	

			
	}
	
	
	$.fn.rainbow.shift = function(obj) {
	
		var options = $(obj).data('options');
		var color = options.colors.pop();
		options.colors.unshift(color);
		$.fn.rainbow.render(obj);
	
	}
	
})(jQuery);




