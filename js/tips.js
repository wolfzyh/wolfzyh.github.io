var g_oTimerHide=null,
	tips = {};

// $.getJSON('js/tipsData.js',function(json, textStatus) {
// 	tips = json;
// 	bindTopic('[data-tip]');
// });

bindTopic('[data-tip]');

function bindTopic(selector){
	
	//var i=0;
	//aElement[i].onmouseover=function (ev){showTopic(this.znsIndex, window.event || ev);};
	$('body').on('mouseover',selector,function(ev){
		//ev.stopPropagation();
		showTopic($(this).data('tip'), ev);
	});

	$('body').on('mouseleave',selector,function(ev){
		ev.stopPropagation();
		hideTopic();
	});

	$('body').on('mousemove',selector,function(ev){
		//ev.stopPropagation();
		setPosition(ev.clientX, ev.clientY);
	});
}

function showTopic(id, ev){

	var topic = $('#J-tips');
	
	if(g_oTimerHide){
		clearTimeout(g_oTimerHide);
	}
		
	topic.find('.inner_html').html('<div class="img"><img src="images/tips/'+ id +'.png"></div>');
	topic.show();
	
	setPosition(ev.clientX, ev.clientY);
}

function hideTopic(){

	var topic = $('#J-tips');
	
	if(g_oTimerHide)
	{
		clearTimeout(g_oTimerHide);
	}
	g_oTimerHide=setTimeout
	(
		function ()
		{
			topic.hide();
		},50
	);
}

function setPosition(x, y){

	var top = document.body.scrollTop || document.documentElement.scrollTop;
	var left = document.body.scrollLeft || document.documentElement.scrollLeft;
	
	x += left;
	y += top;
	
	var topic = $('#J-tips');
	var l = x + 20 ;
	var t = y - (topic.outerHeight() - 20 );
	var bRight = true;
	var iPageRight = left + document.documentElement.clientWidth;
	
	if( l+ topic.outerWidth() > iPageRight )
	{
		bRight=false;
		
		l=x-(topic.outerWidth()+20);
		topic.find('div')[0].className='adorn_r';
	}
	else
	{
		topic.find('div')[0].className='adorn';
	}
	
	topic.css({
		'left' : l,
		'top' : t
	});
}

function setColor(str){
	var color = '';
	switch(str){
		case '金':
			return 'gold';
			break;
		case '紫':
			return 'purple';
			break;
		case '暗金':
			return 'dGold';
			break;
		case '橙':
			return 'orange';
			break;
		case '蓝':
			return 'blue';
			break;
		default :
			return 'green';									
	}
};