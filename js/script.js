/*nav*/

  $(document).ready(function() {
    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });
  });

  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
      $("nav").addClass("black");
    }
    else {
      $("nav").removeClass("black");
    }
  })

/*nav*/

/*text*/

  var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };

  /*text*/

  /*cod filter*/

    $(document).ready(function(){
      $(".category_item").click(function(){
        var category = $(this).attr("id");

        if(category == ""){
          $(".edu_item").addClass("hide");
          setTimeout(function(){
            $(".edu_item").removeClass("hide");
          }, 150);
        } else {
          $(".edu_item").addClass("hide");
          setTimeout(function() {
            $("." + category).removeClass("hide");
          }, 150);
        }
      });
    });

  /*cod filter*/

  /*cod filter media */

  $(document).ready(function(){
    $(".category_item1").click(function(){
      var category = $(this).attr("id");

      if(category == "all"){
        $(".proj_item").addClass("hide");
        setTimeout(function(){
          $(".proj_item").removeClass("hide");
        }, 150);
      } else {
        $(".proj_item").addClass("hide");
        setTimeout(function() {
          $("." + category).removeClass("hide");
        }, 150);
      }
    });
  });

  /*cod filter media*/
