import $ from "jquery";
import scrollify from 'jquery-scrollify'; 
console.log($.scrollify);

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