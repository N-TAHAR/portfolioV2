import $ from "jquery";
import scrollify from 'jquery-scrollify'; 
console.log($.scrollify);

let sectionScroll = (prevSection, activeSection, title, nextSection)=>{
  $('.content').addClass('disappear-content');
  $(prevSection).removeClass('active');
  $(activeSection).addClass('active');
  if (nextSection)
    $(nextSection).removeClass('active');
  $('.view').addClass('reset');
  setTimeout(function(){ 
    $('.view').removeClass('reset');
    $('.title').html(title);
    $('.content').removeClass('disappear-content');
  }, 500);
}

$(function(){
  $.scrollify({
    section : ".firstSection",
    interstitialSection : ".firstSection, .secondSection, .thirdSection",
    scrollSpeed: 1000,
    before: function(section){
      if(section===0){
        sectionScroll('.secondSection', '.firstSection', 'Wanted');
      }
      if(section===1){
        sectionScroll('.firstSection', '.secondSection', 'Project 1', '.thirdSection');
      }
      if(section===2){
        sectionScroll('.secondSection', '.thirdSection', 'Project 2');
      }
    }
  });
});

