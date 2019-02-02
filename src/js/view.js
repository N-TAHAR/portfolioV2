let cursor= document.querySelector('.cursor');
let cursorText = document.querySelector('.cursor p');

let view = document.querySelectorAll('.view');
let content = document.querySelectorAll('.content');

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

let clicked = true;

// Click on view
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('click', function(){
    for (let i = 0; i < view.length; i++) {
      view[i].classList.toggle('clickView');
      view[i].classList.remove('onView');
    }
    cursor.classList.toggle('enter');
    // if(!clicked){
    //   clicked = true;
    // }else{
    //   clicked = false;
    // }
    for (let i = 0; content.length; i++){
      content[i].classList.toggle('is-clicked');
    }
  });
}

let social = document.querySelectorAll('a .icon');

for (let i = 0; i < social.length; i++) {
  social[i].addEventListener('mouseover', function(){
    cursorText.innerHTML = '';    
  })
}

for (let i = 0; i < social.length; i++) {
  social[i].addEventListener('mouseout', function(){
    cursorText.innerHTML = 'Scroll';
  })
}
