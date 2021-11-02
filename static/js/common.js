(function (doc, win) {
    var domElement = document.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      setRem = function () {
          var clientWidth = domElement.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 1920) {
              domElement.style.fontSize = '100px';
          } else {
              domElement.style.fontSize = 100 * (clientWidth / 1920) + 'px';
          }
      };
    if (!document.addEventListener) return;
    setRem();
    window.addEventListener(resizeEvt, setRem, false);
    document.addEventListener('DOMContentLoaded', setRem, false);
})(document, window); 
