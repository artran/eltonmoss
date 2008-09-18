function fixTrans()
{
	if (typeof document.body.style.maxHeight == 'undefined') {
		var imgs = document.getElementsByTagName("img");
		for (i = 0; i < imgs.length; i++)
		{
			if (imgs[i].src.indexOf(".png") != -1)
			{
				imgs[i].parentNode.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgs[i].src + "',sizingMethod='crop')";
				imgs[i].parentNode.style.display = "inline-block";
				imgs[i].style.visibility = "hidden";
			}
		}
	}
}

if (document.all && !window.opera)
	attachEvent("onload", fixTrans);