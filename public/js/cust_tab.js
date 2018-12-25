!function($) {
	$.fn.tabInit = function(options){
		var defaults = {
			tabBar:'.tabBar li',
			tabCon:".tabCon",
			className:"select",
			tabEvent:"click",
			activeIndex:0
		}
		var options = $.extend(defaults, options);

		var activeIndex = options.activeIndex

		var rtnEl = { activeIndex: activeIndex, onChange: options.onChange }

		this.each(function(){
			var that = $(this);
			that.find(options.tabBar).removeClass(options.className);
			that.find(options.tabBar).eq(options.activeIndex).addClass(options.className);
			that.find(options.tabCon).hide();
			that.find(options.tabCon).eq(options.activeIndex).show();
			
			that.find(options.tabBar).on(options.tabEvent,function(){
				that.find(options.tabBar).removeClass(options.className);
				$(this).addClass(options.className);
				var tepmIndex = that.find(options.tabBar).index(this);

				if(rtnEl.activeIndex != tepmIndex){
					that.find(options.tabCon).hide();
					that.find(options.tabCon).eq(tepmIndex).show();
					rtnEl.activeIndex = tepmIndex
					rtnEl.onChange(rtnEl)
				}
			});
		});
	}
} (window.jQuery);