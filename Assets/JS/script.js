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