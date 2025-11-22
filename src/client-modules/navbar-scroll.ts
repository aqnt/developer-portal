import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function navbarScroll() {
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  const navbar = document.querySelector('.navbar') as HTMLElement;

  if (!navbar) {
    return;
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 10) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  // Initial check
  handleScroll();

  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

