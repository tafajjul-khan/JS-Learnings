
/**
 * STUDIO LUXE - 3D Interior Portfolio
 * Interactive JavaScript Controller
 */

class StudioLuxe {
    constructor() {
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
        this.startClock();
        this.initCursor();
        this.initParallax();
        this.animateOnLoad();
    }

    setupElements() {
        this.roomContainer = document.getElementById('roomContainer');
        this.sceneContainer = document.getElementById('sceneContainer');
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.discoverButtons = document.querySelectorAll('.discover-btn');
        this.closePanelButtons = document.querySelectorAll('.close-panel');
        this.detailPanels = document.querySelectorAll('.detail-panel');
        this.cursorFollower = document.getElementById('cursorFollower');
        
        // Current rotation state
        this.currentRotation = { x: 20, y: -25 };
        this.targetRotation = { x: 20, y: -25 };
        this.isParallaxActive = false;
        
        // Room positions for navigation
        this.roomPositions = {
            home: { x: 20, y: -25 },
            living: { x: 20, y: 65 },
            kitchen: { x: 20, y: 155 },
            bedroom: { x: 20, y: -115 }
        };
    }

    setupEventListeners() {
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const room = link.dataset.room;
                this.navigateToRoom(room);
                this.setActiveNavLink(link);
            });
            
            link.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('active');
            });
            
            link.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('active');
            });
        });

        // Discover buttons
        this.discoverButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target;
                this.revealDetailPanel(target);
            });
            
            btn.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('active');
            });
            
            btn.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('active');
            });
        });

        // Close panel buttons
        this.closePanelButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const panel = btn.dataset.panel;
                this.closeDetailPanel(panel);
            });
            
            btn.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('active');
            });
            
            btn.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('active');
            });
        });

        // Mouse parallax effect
        this.sceneContainer.addEventListener('mousemove', (e) => {
            this.handleParallax(e);
        });

        this.sceneContainer.addEventListener('mouseenter', () => {
            this.isParallaxActive = true;
            this.roomContainer.classList.add('parallax-active');
        });

        this.sceneContainer.addEventListener('mouseleave', () => {
            this.isParallaxActive = false;
            this.roomContainer.classList.remove('parallax-active');
            this.resetRotation();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllPanels();
            }
        });

        // Panel CTA buttons
        const ctaButtons = document.querySelectorAll('.panel-cta');
        ctaButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('active');
            });
            
            btn.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('active');
            });
        });
    }

    navigateToRoom(room) {
        if (this.roomPositions[room]) {
            this.targetRotation = { ...this.roomPositions[room] };
            this.animateRotation();
        }
    }

    animateRotation() {
        const duration = 1200;
        const startTime = performance.now();
        const startRotation = { ...this.currentRotation };
        const deltaX = this.targetRotation.x - startRotation.x;
        const deltaY = this.targetRotation.y - startRotation.y;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-in-out cubic)
            const eased = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            this.currentRotation.x = startRotation.x + (deltaX * eased);
            this.currentRotation.y = startRotation.y + (deltaY * eased);

            this.updateRoomRotation();

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    updateRoomRotation() {
        const { x, y } = this.currentRotation;
        this.roomContainer.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }

    handleParallax(e) {
        if (!this.isParallaxActive) return;

        const rect = this.sceneContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate offset from center (-1 to 1)
        const offsetX = (mouseX - centerX) / (rect.width / 2);
        const offsetY = (mouseY - centerY) / (rect.height / 2);
        
        // Apply parallax effect (subtle tilt)
        const maxTilt = 10;
        const baseRotation = this.roomPositions[this.getCurrentRoom()] || this.roomPositions.home;
        
        this.currentRotation.x = baseRotation.x + (offsetY * maxTilt);
        this.currentRotation.y = baseRotation.y - (offsetX * maxTilt);
        
        this.updateRoomRotation();
    }

    resetRotation() {
        const currentRoom = this.getCurrentRoom();
        this.targetRotation = { ...this.roomPositions[currentRoom] };
        this.animateRotation();
    }

    getCurrentRoom() {
        const activeLink = document.querySelector('.nav-link.active');
        return activeLink ? activeLink.dataset.room : 'home';
    }

    setActiveNavLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    revealDetailPanel(target) {
        const panel = document.getElementById(`detailPanel-${target}`);
        if (panel) {
            // Add floor lift animation
            const roomWall = document.querySelector(`[data-wall="${target}"]`);
            if (roomWall) {
                const floorTiles = roomWall.querySelectorAll('.floor-tile');
                floorTiles.forEach((tile, index) => {
                    setTimeout(() => {
                        tile.style.transform = `translateZ(-200px) rotateX(90deg)`;
                        tile.style.opacity = '0';
                    }, index * 100);
                });
            }

            setTimeout(() => {
                panel.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 400);
        }
    }

    closeDetailPanel(panel) {
        const detailPanel = document.getElementById(`detailPanel-${panel}`);
        if (detailPanel) {
            detailPanel.classList.remove('active');
            document.body.style.overflow = 'auto';

            // Reset floor tiles
            setTimeout(() => {
                const roomWall = document.querySelector(`[data-wall="${panel}"]`);
                if (roomWall) {
                    const floorTiles = roomWall.querySelectorAll('.floor-tile');
                    floorTiles.forEach((tile) => {
                        tile.style.transform = '';
                        tile.style.opacity = '';
                    });
                }
            }, 600);
        }
    }

    closeAllPanels() {
        this.detailPanels.forEach(panel => {
            if (panel.classList.contains('active')) {
                const panelId = panel.id.replace('detailPanel-', '');
                this.closeDetailPanel(panelId);
            }
        });
    }

    startClock() {
        const updateClock = () => {
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
            
            const clockElement = document.getElementById('currentTime');
            if (clockElement) {
                clockElement.innerHTML = `${dateStr}<br>at ${timeStr} IST`;
            }
        };

        updateClock();
        setInterval(updateClock, 1000);
    }

    initCursor() {
        document.addEventListener('mousemove', (e) => {
            this.cursorFollower.style.left = `${e.clientX}px`;
            this.cursorFollower.style.top = `${e.clientY}px`;
        });

        // Add cursor effects to all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .floor-tile, .furniture-piece');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('active');
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('active');
            });
        });
    }

    initParallax() {
        // Subtle parallax effect for furniture pieces
        const furniturePieces = document.querySelectorAll('.furniture-piece');
        
        this.sceneContainer.addEventListener('mousemove', (e) => {
            const rect = this.sceneContainer.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

            furniturePieces.forEach((piece, index) => {
                const speed = (index % 3 + 1) * 2;
                const x = mouseX * speed;
                const y = mouseY * speed;
                
                piece.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${speed * 2}px)`;
            });
        });
    }

    animateOnLoad() {
        // Stagger animation for floor tiles
        const allTiles = document.querySelectorAll('.floor-tile');
        allTiles.forEach((tile, index) => {
            tile.style.animationDelay = `${index * 0.1}s`;
        });

        // Animate navbar
        setTimeout(() => {
            this.navbar.style.opacity = '1';
        }, 500);

        // Add entrance animation to room container
        this.roomContainer.style.opacity = '0';
        this.roomContainer.style.transform = 'rotateX(20deg) rotateY(-25deg) scale(0.8)';
        
        setTimeout(() => {
            this.roomContainer.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            this.roomContainer.style.opacity = '1';
            this.roomContainer.style.transform = 'rotateX(20deg) rotateY(-25deg) scale(1)';
        }, 100);
    }

    // Utility: Add smooth scrolling for detail panels
    smoothScroll(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    // Utility: Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add observer for lazy loading animations
    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.wall-info, .discover-btn');
        animatedElements.forEach(el => observer.observe(el));
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new StudioLuxe();
    
    // Add performance monitoring (optional)
    if (window.performance) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Studio Luxe loaded in ${loadTime}ms`);
        });
    }

    // Add resize handler for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate room positions if needed
            app.updateRoomRotation();
        }, 250);
    });

    // Add visibility change handler to pause/resume animations
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            app.roomContainer.style.animationPlayState = 'paused';
        } else {
            app.roomContainer.style.animationPlayState = 'running';
        }
    });

    // Console signature
    console.log('%c Studio Luxe ', 'background: #c5a880; color: #0a0a0a; padding: 10px 20px; font-size: 20px; font-weight: bold;');
    console.log('%c 3D Interior Design Portfolio ', 'background: #1a1a1a; color: #c5a880; padding: 5px 20px; font-size: 14px;');
    console.log('%c Crafted with precision and passion ', 'color: #8a8a8a; font-size: 12px; font-style: italic;');
});

// Add smooth animation frame updates for better performance
class AnimationScheduler {
    constructor() {
        this.tasks = [];
        this.isRunning = false;
    }

    add(task) {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
        this.start();
    }

    remove(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        if (this.tasks.length === 0) {
            this.stop();
        }
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.tick();
        }
    }

    stop() {
        this.isRunning = false;
    }

    tick() {
        if (!this.isRunning) return;

        this.tasks.forEach(task => {
            if (typeof task === 'function') {
                task();
            }
        });

        requestAnimationFrame(() => this.tick());
    }
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StudioLuxe, AnimationScheduler };
}