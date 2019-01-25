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

let memo;
$(function(){
  $.scrollify({
    section : ".homePage",
    interstitialSection : ".homePage, .firstSection, .secondSection, .thirdSection",
    scrollSpeed: 1000,
    before: function(section){
      if(section===0){
      memo = section;

      }
      if(section===1){
        console.log(memo);
        memo = section;
        console.log(memo);
        sectionScroll('.secondSection', '.firstSection', 'Wanted');
      }
      if(section===2){
        console.log(memo);
        memo = section;
        console.log(memo);

        sectionScroll('.firstSection', '.secondSection', 'Project 1', '.thirdSection');
      }
      if(section===3){
        console.log(memo);
        memo = section;
        console.log(memo);

        sectionScroll('.secondSection', '.thirdSection', 'Project 2');
      }
    }
  });
});

