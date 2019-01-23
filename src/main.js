import $ from "jquery";
import scrollify from 'jquery-scrollify'; 
console.log($.scrollify);

let view = document.querySelectorAll('.view');

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseover', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.add('onView');
    }
    })
}

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseout', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.remove('onView');
    }
    })
}

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('click', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.toggle('clickView');
      view[i].classList.remove('onView');
    }
    })
}


$(function(){
  $.scrollify({
    section : ".firstSection",
    interstitialSection : ".firstSection, .secondSection",
    scrollSpeed: 1000,
    before: function(section){
      if(section===0){
        $('.content').addClass('disappear-content');
        $('.firstSection').addClass('active');
        $('.secondSection').removeClass('active');
        $('.view').addClass('reset');
        setTimeout(function(){ 
          $('.view').removeClass('reset');
          $('.title').html('Wanted');
          $('.content').removeClass('disappear-content');
        }, 500);
      }
      if(section===1){
        $('.content').addClass('disappear-content');
        $('.secondSection').addClass('active');
        $('.firstSection').removeClass('active');
        $('.view').addClass('reset');
        setTimeout(function(){ 
          $('.view').removeClass('reset');
          $('.title').html('Bye');
          $('.content').removeClass('disappear-content');
        }, 500);
      }
      }
  });
});