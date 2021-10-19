/** SBS */

(function ( $ ) {
	$.fn.sbsbox = function(options) {

		var settings = $.extend({
			aniSpeed: 250,
			showPcnt: 100
		}, options);

		return this.each(function() {
			// console.log('called sbs box plugin', this);
			var $box = $(this);

			// Variables
			var showPercent = settings.showPcnt;
			var hidePercent = 100 - showPercent;

			// Add mouse enter
			$box.find('.imgwrapper').on('mouseenter', function() {
				// console.log('mouse enter', this);
				var $imgWrapper = $(this);
				var $imgWrapperImg = null;
				var $imgOppositeWrapper = null;
				var $imgOppositeWrapperImg = null;
				if ($imgWrapper.hasClass('imgleft')) {
					$imgWrapperImg = $imgWrapper.find('img');
					$imgOppositeWrapper = $box.find('.imgright');
					$imgOppositeWrapperImg = $imgOppositeWrapper.find('img');

					$imgWrapper.stop().animate({
						width: showPercent + '%'
					}, settings.aniSpeed);
					$imgWrapperImg.stop().animate({
						left: 0
					}, settings.aniSpeed);

					$imgOppositeWrapper.stop().animate({
						width: hidePercent + '%'
					}, settings.aniSpeed);
					$imgOppositeWrapperImg.stop().animate({
						right: -100
					}, settings.aniSpeed);

					// console.log('left', $imgWrapper, $imgOppositeWrapper);
				} else {
					$imgWrapperImg = $imgWrapper.find('img');
					$imgOppositeWrapper = $box.find('.imgleft');
					$imgOppositeWrapperImg = $imgOppositeWrapper.find('img');

					$imgWrapper.stop().animate({
						width: showPercent + '%'
					}, settings.aniSpeed);
					$imgWrapperImg.stop().animate({
						right: 0
					}, settings.aniSpeed);

					$imgOppositeWrapper.stop().animate({
						width: hidePercent + '%'
					}, settings.aniSpeed);
					$imgOppositeWrapperImg.stop().animate({
						left: -100
					}, settings.aniSpeed);

					// console.log('right', $imgWrapper, $imgOppositeWrapper);
				}
			});

			// ADd mouse out
			$box.find('.imgwrapper').on('mouseout', function() {
				// console.log('mouse out', this);
				$box.find('.imgwrapper').stop().animate({
					width: '50%'
				}, settings.aniSpeed);
				$box.find('.imgleft img').stop().animate({
					left: -50
				}, settings.aniSpeed);
				$box.find('.imgright img').stop().animate({
					right: -50
				}, settings.aniSpeed);
			});
		});
	};
}( jQuery ));