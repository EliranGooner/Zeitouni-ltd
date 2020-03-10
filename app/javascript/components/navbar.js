const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.home-menu');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
