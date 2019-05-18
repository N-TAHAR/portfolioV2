// Import of libraries
import $ from "jquery";
import scrollify from 'jquery-scrollify'; 

// Force to scroll to the top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let body = document.querySelector('body');
let homePage = document.querySelector('.homePage');

// homePage disappear & Scroll desactivate
$.scrollify.disable();
setTimeout(function(){ 
  homePage.classList.add('disappear');
}, 3000);
// activate the scroll 
setTimeout(function(){ 
  homePage.classList.add('none');
  body.classList.add('disable');
  $.scrollify.enable();
}, 4000);

// function to make the animation on scroll with scrollify
let sectionScroll = (prevSection, activeSection, title, nextSection)=>{
  $('.content').addClass('disappear-content');
  $('.social-icons').addClass('disappear');
  $(prevSection).removeClass('active');
  $(activeSection).addClass('active');
  if (nextSection)
    $(nextSection).removeClass('active');
  $('.view').addClass('reset');
  setTimeout(function(){ 
    $('.view').removeClass('reset');
    $('.title').html(title);
    $('.content').removeClass('disappear-content');
    $('.social-icons').removeClass('disappear');
  }, 500);
}

// scroll with scrollify
let memo;
$(function(){
  $.scrollify({
    section : ".firstSection",
    interstitialSection : ".firstSection, .secondSection, .thirdSection",
    scrollSpeed: 1000,
    before: function(section){
      if(section===0){
        memo = section;
        sectionScroll('.secondSection', '.firstSection', 'Wanted');
      }
      if(section===1){
        memo = section;

        sectionScroll('.firstSection', '.secondSection', 'Project 1', '.thirdSection');
      }
      if(section===2){
        memo = section;

        sectionScroll('.secondSection', '.thirdSection', 'Project 2');
      }
    }
  });
});


// Cursor
$(document).mousemove(function(e){
  $(".cursor").css({left:e.pageX, top:e.pageY});
});
