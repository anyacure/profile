document.addEventListener('DOMContentLoaded', function() {
  const tiltElements = document.querySelectorAll('.tilt-element');

  tiltElements.forEach(el => {
    el.style.setProperty('--rotate-x', '0deg');
    el.style.setProperty('--rotate-y', '0deg');

    const handleTilt = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 30;
      const rotateX = (centerY - y) / 30;
      
      el.style.setProperty('--rotate-x', `${rotateX}deg`);
      el.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    let isHovering = false;
    let animationFrameId = null;

    function animateTilt() {
      if (!isHovering) return;
      animationFrameId = requestAnimationFrame(animateTilt);
    }

    el.addEventListener('mouseenter', () => {
      isHovering = true;
      animateTilt();
    });

    el.addEventListener('mousemove', (e) => {
      if (isHovering) {
        handleTilt(e);
      }
    });

    el.addEventListener('mouseleave', () => {
      isHovering = false;
      el.style.setProperty('--rotate-x', '0deg');
      el.style.setProperty('--rotate-y', '0deg');
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });
  });
});