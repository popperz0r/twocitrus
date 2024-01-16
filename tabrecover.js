window.onload = function() {

  var originalTitle = document.title;
  var attentionMessage = String.fromCodePoint(0x1F514)+' Do not forget!';
  var blinkEvent = null;

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if(!isPageActive){
      blink();
    }else {
      document.title = originalTitle;
      clearInterval(blinkEvent);
    }
  });

  function blink(){
    blinkEvent = setInterval(function() {
      if(document.title === attentionMessage){
        document.title = originalTitle;
      }else {
        document.title = attentionMessage;
      }
    }, 100);
  }
};
