// 可自由扩展该组件
!function ($) {
	$.fn.navInit = function (options) {
		var defaults = {
			navBar: 'li',
			className: "select",
			tabEvent: "click",
			activeIndex: 0
		}

		var options = $.extend(defaults, options);

		var activeIndex = options.activeIndex

		var rtnEl = { activeIndex: activeIndex, onChange: options.onChange }

		this.each(function () {
			var that = $(this);
			that.find(options.navBar).removeClass(options.className);
			that.find(options.navBar).eq(options.activeIndex).addClass(options.className);

			that.find(options.navBar).on(options.tabEvent, function () {
				that.find(options.navBar).removeClass(options.className);
				$(this).addClass(options.className);
				var tepmIndex = that.find(options.navBar).index(this);
				if (rtnEl.activeIndex != tepmIndex) {
					rtnEl.activeIndex = tepmIndex
					rtnEl.onChange(rtnEl)
				}
			});
		});

		return rtnEl
	}
}(window.jQuery);