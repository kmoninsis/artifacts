(function(window, $, undefined) {
  var $window = $(window);

  var loadedImages = 0;

  var autorun = function() {

    $("#ninoimg1").one('load', function() {
      imageLoaded();
    }).each(function() {
      if(this.complete) $(this).load();
    });

    $("#ninoimg2").one('load', function() {
      imageLoaded();
    }).each(function() {
      if(this.complete) $(this).load();
    });

    $("#ninoimg3").one('load', function() {
      imageLoaded();
    }).each(function() {
      if(this.complete) $(this).load();
    });

    

    $("#ninoimg1").attr("src", "images/nino-panorama1.png");
    $("#ninoimg2").attr("src", "images/nino-panorama2.png");
    $("#ninoimg3").attr("src", "images/nino-panorama3.png");
    

  };

  var imageLoaded = function() {
    loadedImages++;

    if (loadedImages == 3) {
      
      setTimeout(function() {
        $(".imgs").css("display","block");
        $(".imgs").animate({ opacity: 1 }, 3000, "linear");

      }, 500);
    }
  };
  $(autorun);

})(this, jQuery);