document.addEventListener('DOMContentLoaded', function() {
    // Gestion du filtrage des avis
    const filterBtns = document.querySelectorAll('.filter-btn');
    const reviewCards = document.querySelectorAll('.review-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mise à jour de la classe active
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filtrage des avis
            reviewCards.forEach(card => {
                const stars = parseInt(card.getAttribute('data-stars'));
                const hasText = card.getAttribute('data-has-text') === 'true';
                
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === '5' && stars === 5) {
                    card.style.display = 'block';
                } else if (filter === '4' && stars === 4) {
                    card.style.display = 'block';
                } else if (filter === '3-1' && stars <= 3) {
                    card.style.display = 'block';
                } else if (filter === 'with-text' && hasText) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Gestion de la pagination (simulation)
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mise à jour de la classe active
            paginationBtns.forEach(b => b.classList.remove('active'));
            if (!this.classList.contains('next')) {
                this.classList.add('active');
            }
            
            // Ici, vous pourriez ajouter la logique pour charger plus d'avis
            // avec une requête AJAX ou en affichant des avis préchargés mais cachés
        });
    });
});