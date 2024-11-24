window.addEventListener('scroll', () => {
   if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      document.getElementById("scroll-animation").style.backgroundImage = "url('assets/images/scroll-bottom-open.svg')"
      console.log("youre at the bottom")
    }
    else {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }
  }, false);

  window.onscroll = function(ev) {
   
};


let scrollAnimation = document.getElementById('scroll-animation')

window.addEventListener('scroll', () => {
  if((winder.innerHeight + Math.round(window.scrollY))>= document.body.offsetHeight){
    scrollAnimation.style.backgroundImage = "url('assets/images/scroll-bottom-open.svg')";
    scrollAnimation.style.animation = "none";
    console.log("youre at the bottom")
  }
  else {
    scrollAnimation.style.animation = "scrollmove 1s infinite";
    scrollAnimation.style.animationDelay = " calc(var(--scroll) * -2s)"
    scrollAnimation.style.animationPlayState = "paused"
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - winow.innerHeight));

    console.log("not at bottom")
  }
}, false);