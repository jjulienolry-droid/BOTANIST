// Menu burger animation
const burgerMenu = document.getElementById('burger-menu');
const burgerIcon = document.querySelector('.burger-icon');

burgerMenu.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
});

// Effet Parallax Scrolling
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const parallaxContainer = document.querySelector('.parallax-container');
    
    if (!parallaxBg || !parallaxContainer) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        const containerTop = parallaxContainer.offsetTop;
        const containerHeight = parallaxContainer.offsetHeight;
        
        // Vérifier si le container est visible dans le viewport
        if (scrollTop + window.innerHeight > containerTop && 
            scrollTop < containerTop + containerHeight) {
            
            // Calculer la position relative
            const relativeScroll = scrollTop - containerTop + window.innerHeight;
            const scrollPercent = relativeScroll / (containerHeight + window.innerHeight);
            
            // Appliquer l'effet parallax (vitesse 0.5 pour un effet modéré)
            const yPos = (scrollPercent - 0.5) * 100 * 0.5;
            parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Écouter le scroll avec option passive pour de meilleures performances
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initialiser au chargement
    updateParallax();
}

// Initialiser le parallax quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallax);
} else {
    initParallax();
}