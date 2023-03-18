const form= [...document.querySelector('.login-container').children];

form.forEach((item, i) => {
 if(!item.classList.contains('alert-box')){
  setTimeout(() =>{
      item.style.opacity = 1; 
    }, i*100 );
  }
})
