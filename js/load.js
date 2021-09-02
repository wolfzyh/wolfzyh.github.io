$(document).ready(function(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
       $("#music").music();
    };
	/*动画*/
	$.fn.wowanimate_list();
	/*悬停效果*/
	$.fn.hovers();
	/*返回顶部*/
	$("body").on("click",".btn_backtop",function(){
		
		$("html,body").animate({scrollTop:0},500)
	return false;
		
	})
	
	/*音乐开关*/
	$("#music_offon").bind("click",function(){
		
		$("#music .music").trigger("click");
		
	})
	
	$.fn.xuanzuan();
	
	
})
$.fn.xuanzuan=function(){
		var dotlen	=	$("#photoshow .photolist").find("li"),
			spanhtml	=	'';
		
		dotlen.each(function(index, element) {
			if (index===0){
           	spanhtml	+='<span class="change"></span>';
			}else{
           	spanhtml	+='<span></span>';
			}
        });
		$("#photoshow .dot").append(spanhtml);
	
	
		$('#photoshow .photolist').roundabout({
			btnNext: "#next",
			btnPrev: "#prev"
		});	
	
}


//音乐播放
$.fn.music=function(){
    var self=$(this)
    if (self.length==0) return false;
    var audio=self.find("audio"),
        music_img=$('.music-img')
        audio[0].load();
        audio[0].play();
        document.addEventListener("WeixinJSBridgeReady",function() {audio.play();}, false);
        self.find('.music').click(function(){
            
            if(music_img.is('.ro'))
            {
                music_img.removeClass('ro')
                $('.music-p').css('display','none')
                audio[0].pause();
           }
           else{
                music_img.addClass('ro')
                $('.music-p').css('display','block')
                audio[0].play();
          }
        })
		
		
		
		
};

//悬停效果
$.fn.hovers=function(){
	/*浮动条 二维码*/
	$("#Floatingbar .RQcode").hover_animate(
				{
				aniobj:
				[
					[
						"img",					//应用对象
						"",//初始CSS
						"right:100%;",		//mouseenter动画CSS
						"right:0%;",			//mouseleave动画css
						"300",					//mouseenter 时间
						"300"						//mouseleave 时间
					]
				]
				}
				
			)
	
	/*游戏下载 补丁下载 在线充值*/
	$("#quicklink li").hover_animate(
				{
				aniobj:
				[
					[
						"self",					//应用对象
						"position:relative;",//初始CSS
						"margin-top:-10px;",		//mouseenter动画CSS
						"margin-top:0px;",			//mouseleave动画css
						"300",					//mouseenter 时间
						"300"						//mouseleave 时间
					]
				],
				set_class:"hover_"
				}
				
			)
	
	$(".PicList li").hover_animate(
				{
				aniobj:
				[
					[
						"img",					//应用对象
						"position:relative;",//初始CSS
						"margin-left:-10px;",		//mouseenter动画CSS
						"margin-left:0px;",			//mouseleave动画css
						"300",					//mouseenter 时间
						"300"						//mouseleave 时间
					]
				],
				set_class:"hover_"
				}
				
			)
	
}



$.fn.wowanimate_list=function(){
	
	if (typeof(WOW)=='undefined') {return;}
	if ((/msie [6|7|8|9]/i.test(navigator.userAgent))){return;}

	var quicklink		=	$("#quicklink");
	if (quicklink.length>0){
		quicklink.find("ul li").each(function(index, element) {
			
				$(this).css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":200*(index+1)+"ms"})
        });
	}
	
	var gameIntr		=	$("#gameIntr");
	if (gameIntr.length>0){
		
		gameIntr.find(".PartTitle").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})
		gameIntr.find(".jieshao").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
		
	}
	
	var huishou			=	$("#huishou");
	if (huishou.length>0){
		
		huishou.find(".PartTitle").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})
		huishou.find(".huishouBox").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":500+"ms"})
		
		
	}
	
	var equipment	=	$("#equipment");
	if (equipment.length>0){
		
		equipment.find(".PartTitle").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})

		equipment.find(".PicList li").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.1+"s","data-wow-delay":100*(index+1)+"ms"})
        });

		
	}
	
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			if (typeof(WOW)!='undefined')
			{new WOW().init();}
		};	
	
}




$.fn.hover_animate = function (obj) {
    var time_delay = null,
        runlist = [],
        runlist_end = [],
        create_var = [],
        set_var = [],
        self = $(this);
    if (self.length === 0 || obj.aniobj.length === 0) {
		if (self.selector.indexOf(" ")!=-1){
			if ($(self.selector.split(" ")[0]).length==0){return;}
		}else{return;}
	}
    if (obj.set_class === "" || typeof(obj.set_class) === "undefined") {
            $.extend(obj, {
                set_class: "this_hover"
            });
        }
     if (obj.remove_classtime === "" || typeof(obj.remove_classtime) === "undefined") {
            $.extend(obj, {
                remove_classtime:0
            });
		 
		}
   if (typeof(obj.delaytime) !== "number" || typeof(obj.delaytime) === "undefined") {
            $.extend(obj, {
                delaytime: 100
            })
        }
    var fn = {
            csschange: function (val) {
                val = $.trim(val);
                if (val === "") {
                    return ""
                }
                if (val.indexOf("{") < 0 || val.indexOf("}") < 0) {
                    val = $.trim(val);
                    var last_fh = val.lastIndexOf(";");
                    if (last_fh + 1 === val.length) {
                        val = val.substring(0, last_fh);
                        val = "{'" + val.replace(/\:/g, "':'").replace(/\;/g, "','") + "'}";
                    } else {
                        val = "{'" + val.replace(/\:/g, "':'").replace(/\;/g, "','") + "'}";
                    }
                }
                return $.trim(val)
            }
        };
    $.each(obj.aniobj, function (index, val) {
            if (val.length < 6) {
                return;
            }
            var setobj = val[0],
                setobj_ = setobj.replace(/\.|\[|\]|\ |\>/g, ""),
                animate_css = fn.csschange(val[1]),
                animate_start = fn.csschange(val[2]),
                animate_end = fn.csschange(val[3]),
                animate_easing = val[4],
                animate_easing2 = val[5],
                animate_delay = val[6],
                animate_delay2 = val[7],
                animate_css_end = val[8],
                run = "",
                run_end = "";
            if (typeof(animate_delay) === "undefined") {
                    animate_delay = 0;
                }
            if (typeof(animate_delay2) === "undefined") {
                    animate_delay2 = 0;
                }
            if (animate_css !== "") {
                    animate_css_ = ".css(" + animate_css + ")";
                } else {
                    animate_css_ = "";
                }
            if (setobj === "") {
                    return;
                }
			
			
					create_var.push("var _" + setobj_ + "");
            
			
            if (setobj === "self") {
                    set_var.push("_" + setobj_ + "=[self]");
                } else {
					if ((setobj.indexOf("[.")!=-1 || setobj.indexOf("[#")!=-1) && setobj.indexOf("]")!=-1){
						 setobj	=	setobj.replace(/\[|\]/g, "")
						 set_var.push("_" + setobj_ + '=$("' + setobj + '")');
						
					}else{
						 set_var.push("_" + setobj_ + '=[self].find("' + setobj + '")');
					}
                   
                }
            if (animate_start !== "") {
                    run = "_" + setobj_ + animate_css_ + ".stop(true,false).delay(" + animate_delay + ").animate(" + animate_start + "," + animate_easing + ");";
                } else {
                    run = "_" + setobj_ + animate_css;
                }
            if (animate_css_ !== "" || animate_start !== "") {
                    runlist.push(run);
                }
            if (animate_end !== "") {
                    if (typeof(animate_css) != "undefined" && animate_css != "" && animate_css.indexOf("'display':'block'")!=-1) {
				
                        if (animate_easing.indexOf("easing") == -1) {
                            run_end = "_" + setobj_ + ".stop(true,false).delay(" + animate_delay2 + ").animate(" + animate_end + "," + animate_easing2 + ",function(){$(this).css({'display':'none'});});";
                        } else {
                            run_end = "_" + setobj_ + ".stop(true,false).delay(" + animate_delay2 + ").animate(" + animate_end + "," + animate_easing2 + ");";
                        }
                    } else {
                        run_end = "_" + setobj_ + ".stop(true,false).delay(" + animate_delay2 + ").animate(" + animate_end + "," + animate_easing2 + ");";
                    }
                    runlist_end.push(run_end);
                }
        });
    var selfobj = null,
		$parent	=	null,
		hoverstring="",
		hoverendstring="",
		findparent	=	function(selector){
			if (selector.indexOf(" ")!=-1){selector=selector.slice(0,selector.indexOf(" "));}
			if (selector!=""){$parent=$(selector).parent();}
			
			
		};
		findparent(self.selector)
		if ($parent.length==0){$parent=$("body");}
		
		hoverstring	='function hoverstar(){';
			$.each(runlist, function (index, val) {
				hoverstring	+=	val;
			})
		hoverstring+='}';
		
		hoverendstring='function hoverend(){';
              $.each(runlist_end, function (index, val) {
                   	hoverendstring	+=	val;
                });
		hoverendstring+='}';
		eval(hoverstring);
		eval(hoverendstring);
		
    
    $.each(create_var, function (index, val) {eval(val);});
		
  $parent.on("mouseenter.s",self.selector, function () {
           var selfobj = $(this);
            $.each(set_var, function (index, val) {
                eval(val.replace("[self]", "selfobj"));
            });
            clearTimeout(time_delay);
            time_delay = setTimeout(function () {
                if (!selfobj.is(":animated")) {
                    selfobj.addClass(obj.set_class);
					hoverstar();
                }
            }, obj.delaytime)
        }).on("mouseleave.s",self.selector, function () {
			 var selfobj = $(this);
            clearTimeout(time_delay);
            if (selfobj.is("." + obj.set_class)) {
				hoverend();
				setTimeout(function(){selfobj.removeClass(obj.set_class);},obj.remove_classtime)
            }
        })
};


jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});




