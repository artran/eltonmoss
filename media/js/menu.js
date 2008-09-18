function initMenu()
{
	var nodes = document.getElementById("menu").getElementsByTagName("li");
	for (var i=0; i<nodes.length; i++)
	{
		nodes[i].onmouseover = function()
		{
			this.className += " hover";
		}
		nodes[i].onmouseout = function()
		{
			this.className = this.className.replace(" hover", "");
		}
	}
}
if (document.all && !window.opera) attachEvent("onload", initMenu);
