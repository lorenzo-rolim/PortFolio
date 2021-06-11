const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

animeScroll();

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.76);
    target.forEach(function(a) {
        if((windowTop) > a.offsetTop) {
            a.classList.add(animationClass);
        } else{
            a.classList.remove(animationClass);
        }

    });
};


if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 10));
}