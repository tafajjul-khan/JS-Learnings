/**
 * STUDIO LUXE - Interior Design Portfolio
 * Clean JavaScript Controller
 */

class StudioLuxe {
    constructor() {
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.initCursor();
        this.startClock();
        this.updateProgressIndicator();
    }

    cacheElements() {
        this.cursor = document.getElementById('cursor');
        this.cursorFollower = document.getElementById('cursorFollower');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.interior-section');
        this.discoverButtons = document.querySelectorAll('.discover-btn');
        this.progressDots = document.querySelectorAll('.progress-dot');
        this.detailModal = document.getElementById('detailModal');
        this.modalClose = document.getElementById('modalClose');
    }

    setupEventListeners() {
        // Navigation
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Discover buttons
        this.discoverButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.openModal();
            });
        });

        // Progress dots
        this.progressDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const section = dot.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Modal close
        if (this.modalClose) {
            this.modalClose.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Close modal on outside click
        if (this.detailModal) {
            this.detailModal.addEventListener('click', (e) => {
                if (e.target === this.detailModal) {
                    this.closeModal();
                }
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
            
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                this.navigateNext();
            }
            
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                this.navigatePrevious();
            }
        });

        // Mouse wheel navigation
        let scrollTimeout;
        window.addEventListener('wheel', (e) => {
            if (this.detailModal && this.detailModal.classList.contains('active')) {
                return; // Don't navigate while modal is open
            }

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    this.navigateNext();
                } else if (e.deltaY < 0) {
                    this.navigatePrevious();
                }
            }, 150);
        }, { passive: true });

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .floor-tile, .furniture');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('active');
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('active');
            });
        });

        // Parallax effect on isometric rooms
        this.sections.forEach(section => {
            const room = section.querySelector('.isometric-room');
            if (room) {
                section.addEventListener('mousemove', (e) => {
                    this.applyParallax(e, room);
                });
            }
        });
    }

    navigateToSection(sectionId) {
        // Remove active from all sections and nav links
        this.sections.forEach(section => section.classList.remove('active'));
        this.navLinks.forEach(link => link.classList.remove('active'));
        this.progressDots.forEach(dot => dot.classList.remove('active'));

        // Add active to target section and corresponding nav link
        const targetSection = document.getElementById(sectionId);
        const targetNavLink = document.querySelector(`[data-section="${sectionId}"]`);
        const targetProgressDot = this.progressDots[this.getSectionIndex(sectionId)];

        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
        }

        if (targetNavLink) {
            targetNavLink.classList.add('active');
        }

        if (targetProgressDot) {
            targetProgressDot.classList.add('active');
        }

        this.updateProgressIndicator();
    }

    getSectionIndex(sectionId) {
        const sectionOrder = ['home', 'living', 'kitchen', 'bedroom', 'contact'];
        return sectionOrder.indexOf(sectionId);
    }

    navigateNext() {
        const sectionOrder = ['home', 'living', 'kitchen', 'bedroom', 'contact'];
        const currentIndex = sectionOrder.indexOf(this.currentSection);
        const nextIndex = (currentIndex + 1) % sectionOrder.length;
        this.navigateToSection(sectionOrder[nextIndex]);
    }

    navigatePrevious() {
        const sectionOrder = ['home', 'living', 'kitchen', 'bedroom', 'contact'];
        const currentIndex = sectionOrder.indexOf(this.currentSection);
        const prevIndex = (currentIndex - 1 + sectionOrder.length) % sectionOrder.length;
        this.navigateToSection(sectionOrder[prevIndex]);
    }

    updateProgressIndicator() {
        this.progressDots.forEach((dot, index) => {
            if (index === this.getSectionIndex(this.currentSection)) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    applyParallax(event, room) {
        if (!room) return;

        const rect = room.parentElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        const offsetX = (mouseX - centerX) / (rect.width / 2);
        const offsetY = (mouseY - centerY) / (rect.height / 2);
        
        const rotateY = offsetX * 5;
        const rotateX = -offsetY * 5;
        
        room.style.transform = `rotateX(${60 + rotateX}deg) rotateZ(${45 + rotateY}deg)`;
    }

    openModal() {
        if (this.detailModal) {
            this.detailModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        if (this.detailModal) {
            this.detailModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    initCursor() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = `${e.clientX}px`;
            this.cursor.style.top = `${e.clientY}px`;
            
            this.cursorFollower.style.left = `${e.clientX}px`;
            this.cursorFollower.style.top = `${e.clientY}px`;
        });
    }

    startClock() {
        const updateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const dateStr = now.toLocaleDateString('en-US', options);
            const timeStr = now.toLocaleTimeString('en-US', {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            const timeElement = document.getElementById('liveTime');
            if (timeElement) {
                timeElement.innerHTML = `${dateStr}<br>at ${timeStr} IST`;
            }
        };

        updateTime();
        setInterval(updateTime, 1000);
    }

    // Utility: Smooth animation frame scheduler
    scheduleAnimation(callback) {
        requestAnimationFrame(callback);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new StudioLuxe();

    // Add smooth entrance animations
    const animateEntrance = () => {
        const navbar = document.querySelector('.navbar');
        const activeSection = document.querySelector('.interior-section.active');
        
        if (navbar) {
            navbar.style.opacity = '0';
            navbar.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                navbar.style.transition = 'all 0.8s ease';
                navbar.style.opacity = '1';
                navbar.style.transform = 'translateY(0)';
            }, 100);
        }

        if (activeSection) {
            const room = activeSection.querySelector('.isometric-room');
            const info = activeSection.querySelector('.section-info');
            
            if (room) {
                room.style.opacity = '0';
                room.style.transform = 'rotateX(60deg) rotateZ(45deg) scale(0.8)';
                
                setTimeout(() => {
                    room.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                    room.style.opacity = '1';
                    room.style.transform = 'rotateX(60deg) rotateZ(45deg) scale(1)';
                }, 300);
            }

            if (info) {
                info.style.opacity = '0';
                info.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    info.style.transition = 'all 0.8s ease';
                    info.style.opacity = '1';
                    info.style.transform = 'translateY(0)';
                }, 800);
            }
        }
    };

    animateEntrance();

    // Performance monitoring
    if (window.performance) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`✨ Studio Luxe loaded in ${loadTime}ms`);
        });
    }

    // Console branding
    console.log(
        '%c STUDIO LUXE ',
        'background: #c5a880; color: #0a0a0a; padding: 10px 20px; font-size: 24px; font-weight: bold;'
    );
    console.log(
        '%c Interior Design Portfolio - Crafted with precision ',
        'color: #c5a880; font-size: 14px; font-style: italic;'
    );
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StudioLuxe;
}