document.addEventListener('DOMContentLoaded', function() {
    // Fonction de recherche
    const searchInput = document.getElementById('faq-search-input');
    const faqItems = document.querySelectorAll('.faq-item');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Réinitialiser l'affichage si le champ est vide
            faqItems.forEach(item => {
                item.style.display = 'block';
            });
            return;
        }
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                item.open = true; // Ouvrir automatiquement les résultats correspondants
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Navigation par catégories
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Mise à jour de la classe active
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Smooth scroll vers la section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});