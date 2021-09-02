var bScroll = true;
var curPage = 0;
var total = $('.content-item').length;
var root = '/';

var newCharData = {"c1":["S506","S507","S508","S509"],
                    "c2":["S511","S512","S513","S514"]};

var imgList = [
    root + 'images/bg-main.jpg',
    root + 'images/c1.png',
    root + 'images/c2.png',
    root + 'images/icon-c1.png',
    root + 'images/icon-c2.png',
    root + 'images/icon-c1-active.png',
    root + 'images/icon-c2-active.png',
    root + 'images/masky.png',
    root + 'images/icon-md.png',
    root + 'images/icon-skin-1.png',
    root + 'images/icon-skin-2.png',
    root + 'images/icon-skin-3.png',
    root + 'images/icon-skin-4.png',
    root + 'images/icon-skin-5.png',
    root + 'images/icon-skin-6.png'
];

var lessThenIE9 = function () {
    var UA = navigator.userAgent,
        isIE = UA.indexOf('MSIE') > -1,
        v = isIE ? /\d+/.exec(UA.split(';')[1]) : 'no ie';
    return v < 9;
}();

if(lessThenIE9){
    init();
}
else{
    preloadimages(imgList).done(function(){
        init();
    });
}

function init(){

    $('.loading-sign').fadeOut();
    $('.icon-md').fadeIn();

    $('.u-nav.sidebar .nav-item').click(function(){
        var _i = $(this).index();

        if(_i==0){
            curPage = 0;
            $('.main-view').removeClass('fadeIn masky show');
            $('#J-cover').addClass('fadeIn masky show');
            $('.u-nav.sidebar').find('.nav-item').removeClass('active');
            $('.u-nav.sidebar').find('.nav-item').eq(0).addClass('active');            
        }
        else{
            if(curPage == 0){
                $('.main-view').addClass('fadeIn masky show');
                $('#J-cover').removeClass('fadeIn masky show');            
            }
            jump(_i - 1);
        }
    });    

    $('#J-cover').mousewheel(function(event, delta) {

        event.preventDefault();

        if(!bScroll)return;

        if (delta > 0) {
            // up
            
        } else if (delta < 0){
            //down
            $('.main-view').addClass('fadeIn masky show');
            $('#J-cover').removeClass('fadeIn masky show');
            $('.u-nav.sidebar').find('.nav-item').removeClass('active');
            $('.u-nav.sidebar').find('.nav-item').eq(1).addClass('active');                    
        }

        bScroll = false;

        setTimeout(function(){
            bScroll = true;
        },1000);	            
        
    });

    $('.main-view').mousewheel(function(event, delta) {

        event.preventDefault();

        if(!bScroll)return;

        if (delta > 0) {
            // up
            if(curPage>0){
                curPage--;
            }
            else{
                $('.main-view').removeClass('fadeIn masky show');
                $('#J-cover').addClass('fadeIn masky show');
                $('.u-nav.sidebar').find('.nav-item').removeClass('active');
                $('.u-nav.sidebar').find('.nav-item').eq(0).addClass('active');                
                return;    
            }
        } else if (delta < 0){
            //down
            if(curPage<total-1)curPage++;        
        }
        jump(curPage);          
    }); 
}                    
       

function jump(index){
    index = index || 0;
    //if(index==0)index = 1;
    curPage = index;
    //$('.m-body ul.content').animate({"top": -100*parseInt(index)+'%'}, 400);
    $('.content-list-container').css('top',-100*parseInt(index)+'%');
    $('.u-nav.sidebar').find('.nav-item').removeClass('active');
    $('.u-nav.sidebar').find('.nav-item').eq(index+1).addClass('active');

    bScroll = false;

    setTimeout(function(){
        bScroll = true;
    },500);			
};



//boss
$('.boss-list').find('.icon-boss').click(function(){
    var index = $(this).data('boss')||'boss-1';

    $('.boss-list .boss-txt').html('<div class="content '+ index +'"></div>');

    $('.boss-list').find('.icon-boss').removeClass('active');
    $(this).addClass('active');
});

//char swich
$('.char .sel').click(function(){
    var self = $(this),
        hero = self.data('char')|| 'c1',
        node = '';

    //alert(hero);
    $('.char .detail,.char-img').removeClass('c1 c2').addClass(hero);
    for (var i = 0; i < newCharData[hero].length; i++) {
        var element = newCharData[hero][i];
        if(i==0){
            node += '<div class="skill-icon active" data-skill="'+ element +'"><div class="pic '+ element +'"></div></div>';
            $('.skill-txt').html('<img src="images/skill/'+ element +'.png">');
        }
        else{
            node += '<div class="skill-icon" data-skill="'+ element +'"><div class="pic '+ element +'"></div></div>';
        }
    }
    $('.char .m-tab .hd').html(node);

    $('.char .sel').removeClass('active');
    self.addClass('active');            
});

$('.char .m-tab').on('click','.skill-icon',function(){
    var self = $(this),
        skill = self.data('skill');

    $('.skill-txt').html('<img src="images/skill/'+ skill +'.png">');

    $('.char .m-tab .skill-icon').removeClass('active');
    self.addClass('active');
});


//preload
function preloadimages(arr){   
    var newimages=[], loadedimages=0;
    var postaction=function(){};
    var arr=(typeof arr!="object")? [arr] : arr;
    function imageloadpost(){
        loadedimages++
        $('.loading-sign').html('资源已加载' + parseInt(loadedimages/arr.length*100) + '%');
        if (loadedimages==arr.length){
            postaction(newimages);
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return {
        done:function(f){
            postaction=f || postaction
        }
    }
}

//video
$('.play').click(function(event) {

    var vid = $(this).data('vid');
   // html = '<iframe style="width: 660px;height: 335px;border: none;" src="http://image.om.dianhun.cn/player/SoulPlayer.html?id='+ vid +'&autoPlay=1"></iframe>';

    $('.u-mask,.u-win').fadeIn();	
    $('.vidplayer .container').html(html);
        
});

$('.vidplayer .close').click(function(event) {
    $('.u-mask,.u-win').fadeOut();
    $('.vidplayer .container').html('');
});