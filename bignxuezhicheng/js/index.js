 
function showBg() {
	$(".video_box").show(); 
	document.getElementById('bg').style.display='block'; 
} 
function closeBg() { 
	$(".video_box").hide();
	document.getElementById('bg').style.display='none'; 		
}
$(".wx a").mouseover(function(){
	$(".wx_tc").show(); 
}).mouseout(function(){
	$(".wx_tc").hide();	
})
jQuery(".news_list").slide({autoPlay:true});
jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
jQuery(".imgBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});