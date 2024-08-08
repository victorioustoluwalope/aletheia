// Animation upon scroll for Why Aletheia Components
document.addEventListener('DOMContentLoaded', function () {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = window.scrollY + window.innerHeight;
    var animatables = document.querySelectorAll('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if (animatables.length === 0) {
      window.removeEventListener('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    animatables.forEach(function(animatable) {
      if ((animatable.getBoundingClientRect().top + window.scrollY + animatable.offsetHeight - 20) < offset) {
        animatable.classList.remove('animatable');
        animatable.classList.add('animated');
      }
    });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  window.addEventListener('scroll', doAnimations);
  window.dispatchEvent(new Event('scroll'));
});
