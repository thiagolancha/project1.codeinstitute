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

/*text typing auto*/

  var textAuto = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  textAuto.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullText = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullText.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullText.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullText) {
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
      for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new textAuto(elements[i], JSON.parse(toRotate), period);
          }
      }
      var css = document.createElement("style");
      css.innerHTML = ".typewrite > .wrap { border-right: 0.09em solid #FFF}";
      document.body.appendChild(css);
  };

  /*text typing auto*/

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

  /*calc form1*/
  function MudaPreco(dataID, quantID, LabelID)
      {
          dataID = $('#dtTicket').val();
          quantID = $('#quantTicket').val(22);


          var Total = dataID * 22;

          if (isNaN(Total)) {
              document.getElementById(LabelID).innerHTML = "- -";
          }
          else {
              document.getElementById(LabelID).innerHTML = formatDinheiro(Total, "€");
          }
      }

      function formatDinheiro(n, currency) {
          return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{2})+\.)/g, "€1,");
      }
/*calc form1*/
/*calc form2*/
function MudaPreco2(dataID2, quantID2, LabelID2)
    {
        dataID2 = $('#dtTicket2').val();
        quantID2 = $('#quantTicket2').val(15);


        var Total2 = dataID2 * 15;

        if (isNaN(Total2)) {
            document.getElementById(LabelID2).innerHTML = "- -";
        }
        else {
            document.getElementById(LabelID2).innerHTML = formatDinheiro2(Total2, "€");
        }
    }

    function formatDinheiro2(n, currency) {
        return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{2})+\.)/g, "€1,");
    }
/*calc form2*/
/*calc form3*/
function MudaPreco3(dataID3, quantID3, LabelID3)
    {
        dataID3 = $('#dtTicket3').val();
        quantID3 = $('#quantTicket3').val(18);


        var Total3 = dataID3 * 18;

        if (isNaN(Total3)) {
            document.getElementById(LabelID3).innerHTML = "- -";
        }
        else {
            document.getElementById(LabelID3).innerHTML = formatDinheiro3(Total3, "€");
        }
    }

    function formatDinheiro3(n, currency) {
        return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{2})+\.)/g, "€1,");
    }
/*calc form3*/

/*func alert*/
function func1()
{
  alert("Request Completed");
}
/*func alert*/
