'use strict';

(function ($, plugin) {
	if ($) { // Global jQuery
		plugin.fn = (plugin.isStatic ? $ : $.fn)[plugin.name] = plugin.factory($);
	}

	if (typeof exports !== 'undefined' && plugin.fn) { // CommonJS
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = plugin.fn;
		}

		exports[plugin.name] = plugin.fn;
	} else if (typeof define === 'function' && define.amd) { // AMD
		define(['jquery'], function ($) {
			var fn = (plugin.isStatic ? $ : $.fn)[plugin.name] = plugin.factory($);
			return fn;
		});
	} else if (!$) {
		/*
			jQuery isn't defined and user is
			trying to use plugin directly without
			CommonJS or AMD support
		*/
		throw 'jQuery not defined.';
	}
})(window.$, {
	'name' : 'removeClassWithPrefix',
	'isStatic' : false,
	'factory' : function ($) {
		return function (prefix) {
			var $el = $(this),
				ATTR = 'class',
				DELIMITER = ' ';

			if ($el && $el.attr(ATTR)) {

				var classes = $.map($el.attr(ATTR).split(DELIMITER), function(item) {
					return item.indexOf(prefix) === -1 ? item : '';
				});

				return $el.attr(ATTR, classes.join(DELIMITER));
			}

			return $el;
		};
	}
});