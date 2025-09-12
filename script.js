// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
});

// Modal Handling
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Simple form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formular wurde abgeschickt! (Diese Funktion ist nur eine Demo)');
    });
});

// Pricing card selection
const pricingButtons = document.querySelectorAll('.pricing-card .btn');
pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Abonnement ausgewählt! (Diese Funktion ist nur eine Demo)');
    });
});

document.getElementById('modern-contact-form').addEventListener('submit', function(e) {
e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// Simple validation
if (name && email && message) {
    // In a real application, you would send the form data to a server here
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    
    // Reset form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
} else {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    
    // Hide error message after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}
});

document.addEventListener('DOMContentLoaded', function() {
            const previewButtons = document.querySelectorAll('.preview-button');
            const modalOverlay = document.getElementById('modalOverlay');
            const modalImage = document.getElementById('modalImage');
            const modalClose = document.getElementById('modalClose');
            const zoomInBtn = document.getElementById('zoomIn');
            const zoomOutBtn = document.getElementById('zoomOut');
            const resetZoomBtn = document.getElementById('resetZoom');
            
            let currentScale = 1;
            
            // Vollbild für alle Buttons aktivieren
            previewButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const cardImage = this.closest('.analysis-image').querySelector('img');
                    modalImage.src = cardImage.src;
                    modalImage.alt = cardImage.alt;
                    modalOverlay.classList.add('active');
                    resetZoom();
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Bild auch durch Klick auf das Bild selbst öffnen
            document.querySelectorAll('.analysis-image').forEach(image => {
                image.addEventListener('click', function() {
                    const cardImage = this.querySelector('img');
                    modalImage.src = cardImage.src;
                    modalImage.alt = cardImage.alt;
                    modalOverlay.classList.add('active');
                    resetZoom();
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Vollbild schließen
            modalClose.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            // Schließen wenn außerhalb des Bildes geklickt wird
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Zoom-Funktionen
            zoomInBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentScale += 0.2;
                applyZoom();
            });
            
            zoomOutBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentScale = Math.max(0.5, currentScale - 0.2);
                applyZoom();
            });
            
            resetZoomBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                resetZoom();
            });
            
            function applyZoom() {
                modalImage.style.transform = `scale(${currentScale})`;
                modalImage.style.transition = 'transform 0.3s ease';
            }
            
            function resetZoom() {
                currentScale = 1;
                modalImage.style.transform = 'scale(1)';
            }
            
            // Schließen mit Escape-Taste
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                    modalOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });