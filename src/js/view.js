let view = document.querySelectorAll('.view');
let content = document.querySelectorAll('.content');

// Hover on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseover', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.add('onView');
    }
  })
}

// end Hover on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseout', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.remove('onView');
    }
    })
}

// Click on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('click', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.toggle('clickView');
      view[i].classList.remove('onView');
    }
    for (let i = 0; content.length; i++){
      content[i].classList.toggle('is-clicked');
    }
    if($.scrollify.isDisabled()){
      $.scrollify.enable();
    }else{
      $.scrollify.disable();
    }
  })
}