function initGallery()
{
	var _img = [];
	var _btn = [];
	var _n = 0;
	var hold = document.getElementById('gallery');
	if(hold)
	{
		_img = $('.hold img', hold);
		_btn = $('.nav-hold li', hold);
		for( var i = _btn.length-1 ; i >= 0 ; i--) if( _btn.eq(i).hasClass('active')) _n = i;
		_img.css({ display : 'none', zIndex : '1'});
		if(_img.eq(_n).get(0)) _img.eq(_n).css({ display : 'block', zIndex : '2'});
		_btn.click( function(){
			if( _n != _btn.index(this))
			{
				_n = _btn.index(this);
				_btn.removeClass('active');
				_btn.eq(_n).addClass('active');
				if(_img.eq(_n).get(0))
				{
					_img.css('zIndex', 1);
					_img.eq(_n).css('zIndex', 2);
					_img.fadeOut();
					_img.eq(_n).fadeIn();
				}
			}
			return false;
		});
	}
}
if (window.addEventListener)
	window.addEventListener("load", initGallery, false);
else if (window.attachEvent)
	window.attachEvent("onload", initGallery);

