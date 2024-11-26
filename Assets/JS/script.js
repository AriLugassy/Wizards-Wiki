
let scrollAnimation = document.getElementById("scroll-animation")
let scrollAnimationTop = document.getElementById("scroll-animation-top")

window.addEventListener('scroll', () => {
  if((window.innerHeight + Math.round(window.scrollY))>= document.body.offsetHeight) {
    scrollAnimation.style.backgroundImage = "url('assets/images/scroll-bottom-open-v2.svg')";
    scrollAnimation.style.animation = "none";
    
    // scrollAnimation.style.height = "270px"
    console.log("youre at the bottom")
  }
  else if ((window.scrollY == 0)) {
    scrollAnimationTop.style.backgroundImage = "url('assets/images/scroll-bottom-open-v2.svg')";
    scrollAnimationTop.style.animation = "none";
    console.log("youre at the top")

  }
  else {
    scrollAnimation.style.animation = "scrollmove 1s infinite";
    scrollAnimation.style.animationDelay = " calc(var(--scroll) * -2s)"
    scrollAnimation.style.animationPlayState = "paused"
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
    scrollAnimationTop.style.animation = "scrollmove 1s infinite";
    scrollAnimationTop.style.animationDelay = " calc(var(--scroll) * -2s)"
    scrollAnimationTop.style.animationPlayState = "paused"

    console.log("not at bottom")
  }
}, false);