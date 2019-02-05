let cursor= document.querySelector('.cursor');
let cursorText = document.querySelector('.cursor p');
let clicked = false;
let view = document.querySelectorAll('.view');
let content = document.querySelectorAll('.content');
let icons = document.querySelectorAll('.social-icons svg');


// Hover on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseover', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.add('onView');
    }
    cursorText.innerHTML = 'Click';
  })
}

// end Hover on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseout', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.remove('onView');
    }
    cursorText.innerHTML = 'Scroll';
  })
}


// Click on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('click', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.toggle('clickView');
      view[i].classList.remove('onView');
    }
    cursor.classList.toggle('enter');
    clicked = !clicked;
    for (let i = 0; i < content.length; i++){
      content[i].classList.toggle('is-clicked');
    }
    for (let i = 0; i < icons.length; i++){
      icons[i].classList.toggle('icon-color-change');
      if (clicked){
        icons[i].classList.add('hover');
      }else{
        icons[i].classList.remove('hover');
      }
    }

  });
}

let social = document.querySelector('.social-icons');

social.addEventListener('mouseover', function(){
  cursorText.innerHTML = '';    
})

social.addEventListener('mouseout', function(){
  cursorText.innerHTML = 'Scroll';
})

// for (let i = 0; i < social.length; i++) {
//   social[i].addEventListener('mouseover', function(){
//     cursorText.innerHTML = '';    
//   })
// }

// for (let i = 0; i < social.length; i++) {
//   social[i].addEventListener('mouseout', function(){
//     cursorText.innerHTML = 'Scroll';
//   })
// }
