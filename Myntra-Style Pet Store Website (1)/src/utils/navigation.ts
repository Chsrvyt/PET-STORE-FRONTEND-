export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 120; // Account for sticky header height
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const getActiveSection = () => {
  const sections = ['home', 'categories', 'trending', 'deals', 'bestsellers', 'contact'];
  const headerHeight = 120;
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
        return sectionId;
      }
    }
  }
  
  return 'home';
};