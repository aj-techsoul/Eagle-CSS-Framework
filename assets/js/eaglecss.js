$(document).ready(function(){
  // navbar
  $('.navbar-brand .mdi-menu').on('click',function(){
      $('nav ul:not(.navbar-brand)').toggle(300,function(){
          if($(this).is(':visible'))
          {
              // true
              $('i.mdi').removeClass('mdi-menu');
              $('i.mdi').addClass('mdi-close');
          }
          else {
              // false
              $('ul.navbar-brand i.mdi').removeClass('mdi-close');
              $('ul.navbar-brand i.mdi').addClass('mdi-menu');
          }
      });
  })

})

// dropdown

function navbar(nav)
{
  defaultnav = {
  type : 'simple',
  action : 'click',
  speed : 300
  }

  nav = nav || defaultnav;

  $('nav.'+ nav.type +' li').bind(nav.action,function(el){
    $(this).children('.dropdown-content').toggle(nav.speed,function(){
      if($(this).is(':visible'))
      {
          // true
          if($('.dropdown-content').is(':visible'))
          {
            $('.dropdown-content').not(this).hide(100);
            $('.dropdown-content').not(this).removeClass('active');
          }
            $(this).css('min-width',el.width );
                    $(this).addClass('active');
      }
      else {
          // false
          $(this).removeClass('active');
      }
    });
  })
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleresponsive() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
