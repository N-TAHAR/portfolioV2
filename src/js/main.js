
// let title = $(document.createElement("h1")).addClass('title');
// let infoProject = $(document.createElement("p")).addClass('info-project');
// $('.info-container').append(title);
// $(document).ready(function(){
  $(function(){
    $.scrollify({
      section : ".firstSection",
      interstitialSection : ".firstSection, .secondSection",
      scrollSpeed: 1000,
      before: function(section){
        if(section===0){
          $('.firstSection').addClass('active');
          $('.secondSection').removeClass('active');
          $('.view').addClass('reset');
          setTimeout(function(){ 
            $('.view').removeClass('reset');
          }, 500);
          $('.title').html('Wanted');
        }
        if(section===1){
          $('.secondSection').addClass('active');
          $('.firstSection').removeClass('active');
          $('.view').addClass('reset');
          setTimeout(function(){ 
            $('.view').removeClass('reset');
          }, 500);
          $('.title').html('Bye');
        }
      }
    });
  });
// });