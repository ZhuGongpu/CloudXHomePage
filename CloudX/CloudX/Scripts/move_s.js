function getStyle(obj,attr)
{
	if(obj.currentStyle)
		return obj.currentStyle[attr];
	else
		return getComputedStyle(obj,false)[attr];	
}
timer = null;
function start_Move(obj,json,fn)
{
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		for(var attr in json)
		{
			var bStop = true;//所有的值都到达
			//1取当前值
			var iCur = 0;
			if(attr == 'opacity')
			{
				iCur = parseInt(parseFloat(getStyle(obj,attr)) * 100);	
			}
			else
			{
				iCur = parseInt(getStyle(obj,attr));	
			}
			//2算速度
			var iSpeed = (json[attr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			//3检测停止
			if(iCur != json[attr])
			{
				bStop = false;	
			}
			
			if(attr == 'opacity')
			{
				obj.style.filter = 'alpha(opacity:'+(iCur + iSpeed)+')';	
				obj.style.opacity = (iCur + iSpeed) / 100;
			}
			else
			{
				obj.style[attr] = iCur + iSpeed + 'px';	
			}		
		}
		if(bStop)
		{
			clearInterval(obj.timer);	
			if(fn)
			{
				fn();	
			}	
		}
	},30);
}