  $(document).ready(function() {
      $(".js-scroll-trigger").click(function() {
          $("#myNavbar").addClass("in");
          $("#nav-icon4").removeClass("open");
		  
      });
	  $('#nav-icon4').click(function() {
          $(this).toggleClass('open');
		  $(".overlay").toggle();
		  
      });
	  $(".overlay").click(function() {
          $("#myNavbar").addClass("in");
          $("#nav-icon4").removeClass("open");
          $(this).hide("");
		  
      });



	  
  });
  $(document).ready(function() {	  
	var path = window.location.pathname.split( '/' );
	var url = path[2];
	if(url == '' || url == 'index.php'){
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
          if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 900, function() {

                  window.location.hash = hash;
              });
          }
      });
    }

  })


  /* $(document).ready(function() {

      var divHeight = $('.contact_form_1').height();
      if (screen.width > 767) {
          $('.contact_details').css('height', (divHeight + 30) + 'px');
      }
  }); */


  $(document).ready(function() {
      var sideslider = $('[data-toggle=collapse-side]');
      var sel = sideslider.attr('data-target');
      var sel2 = sideslider.attr('data-target-2');
      sideslider.click(function(event) {
          $(sel).toggleClass('in');
          $(sel2).toggleClass('out');
      });
  });

  
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



        $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
          $(this).siblings(".panel-top").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).parent().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hide.bs.collapse', function(){
          $(this).parent().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        });
    });
        
		
		$(document).ready(function(){
	$('.readmore').click(function(){
		$(this).parent().find('p').toggleClass('show_1');
		$(this).parent().find('.readmore_cont').toggleClass('show_1');

    if ($(this).text() == "Readless..")
       $(this).text("Readmore..")
    else
       $(this).text("Readless..");
		
	});

	
	$('.projects_img_div').hover(function(){      
      $(this).children(".static_img_shadow").toggleClass("shadow_hide");
      $(this).next(".sub_img").toggleClass("show_1 wow bounceInLeft");
      $(this).next().next(".sub_img").toggleClass("show_1 wow bounceInLeft");
      $(this).toggleClass("projects_img_div_height");


   });
 //   $('.close_img').click(function(){
 //     $('.project_sub_img').hide();
 //   });
});
		
		
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
		
      $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".panel_head_1").click(function(){         
          $(".panel_head_1").removeClass("active");
          $(this).addClass("active");
          $(".panel .tablinks:first-child").addClass("active");
        });
      });
  
  
 $(document).ready(function(){
	 if (screen.width < 768) {
  $(".leftmenu-toggle").click(function(){
    $(".main_leftmenu").animate({
      width: "toggle" 
    }); 
	
  });
  $(".tablinks,.main_servicetab_cont,.leftmenu-toggle-close").click(function(){
	$(".main_leftmenu").animate({
      width: "hide" 
    }); 
  });
	 }
});
/*   $(document).ready(function() { 
window.sr = ScrollReveal({ reset: true });




sr.reveal('.wow', { 
  duration: 2000 
});
}); */


$(function(){
	var path = window.location.pathname.split( '/' );
	var url = path[3];
	$(".tablinks").each(function () {
        var href = $(this).attr('href');
        if (url == href) {
			$(this).removeClass('active');
			$(this).addClass('active');
        }
	});
}); 