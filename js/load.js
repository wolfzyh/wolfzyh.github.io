var time_delay=null;
$(document).ready(function(){
			/*悬停效果*/
			$(".Ver .photo").bind('mouseenter',function(){
					var self=$(this)
					clearTimeout(time_delay)	
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("hover");
									var self_img=self.find("img");
									self_img.stop(true,false).animate({"opacity":"0.6","margin-left":"-10%","margin-top":"-5%","width":"120%","height":"120%" }, 400);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				   clearTimeout(time_delay)	
							var self=$(this)
							if (self.is(".hover"))
							{		
									
									var self_img=self.find("img");
									
								
									self_img.stop(true,false).animate({"opacity":"1","margin-left":"0","margin-top":"0","width":"100%","height":"100%" }, 500);
									
									self.removeClass("hover");
							}
			})
			
			if (BrowseVer=='ie6' || BrowseVer=='ie7' || BrowseVer=='ie8' || BrowseVer=='ie9' )
			{
				$(".hvr-ripple-out").removeClass("hvr-ripple-out")
			}
})

//返回浏览器类型 
$.fn.Browser_ver=function(){
		var navmsg=navigator.userAgent
		var ver='1';
		if(navmsg.indexOf("MSIE")>0){   
			  ver="";
			  if(navmsg.indexOf("MSIE 6.0")>0){ver='ie6'}   
			  if(navmsg.indexOf("MSIE 7.0")>0){ver='ie7'}   
			  if(navmsg.indexOf("MSIE 8.0")>0 && !window.innerWidth){ver='ie8'}   
			  if(navmsg.indexOf("MSIE 9.0")>0){ver='ie9'}   
			  if(navmsg.indexOf("MSIE 10.0")>0){ver='ie10' }   
			  if(navmsg.indexOf("MSIE 11.0")>0){ver='ie11'}   
		} 
		else if(ver=="1" && navmsg.indexOf("Safari")>0){ 
			ver="Saifari"
		}
		else if(ver=="1" && navmsg.indexOf("Firefox")>0){ 
			ver="Firefox"
		}
		else if(ver=="1" && navmsg.indexOf("Opera")>0){ 
			ver="Opera"
		}
		return ver	
}
var BrowseVer=$.fn.Browser_ver()