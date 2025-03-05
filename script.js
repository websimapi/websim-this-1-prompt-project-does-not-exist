document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projects = [
        {
            id: 'minigame',
            title: 'This Minigame Idea Does Not Exist',
            url: 'https://websim.ai/@api/this-minigame-idea-does-not-exist',
            description: 'AI-generated minigame concepts that blur the line between imagination and playability.',
            thumbnail: createSVGThumbnail('#FF5252', 'game-controller', 'Controller icon with abstract game elements')
        },
        {
            id: 'programming-language',
            title: 'This Programming Language Does Not Exist',
            url: 'https://websim.ai/@api/this-programming-language-does-not-exist',
            description: 'Explore fictional programming languages with unique syntaxes and paradigms.',
            thumbnail: createSVGThumbnail('#4CAF50', 'code-brackets', 'Code brackets with floating syntax elements')
        },
        {
            id: 'date',
            title: 'This Date Does Not Exist',
            url: 'https://websim.ai/@api/this-date-does-not-exist',
            description: 'Generated calendar dates with fictional events and historical significance.',
            thumbnail: createSVGThumbnail('#2196F3', 'calendar', 'Calendar with highlighted date')
        },
        {
            id: 'soda',
            title: 'This Soda Does Not Exist',
            url: 'https://websim.ai/@api/this-soda-does-not-exist',
            description: 'Fictional soda brands with unique flavors and marketing concepts.',
            thumbnail: createSVGThumbnail('#FF9800', 'soda-bottle', 'Stylized soda bottle with bubbles')
        },
        {
            id: 'cat',
            title: 'This Cat Does Not Exist',
            url: 'https://websim.ai/@api/this-cat-does-not-exist',
            description: 'AI-imagined cat breeds with unique characteristics and behaviors.',
            thumbnail: createSVGThumbnail('#9C27B0', 'cat', 'Minimalist cat silhouette')
        },
        {
            id: 'wireframe',
            title: 'This Wireframe Does Not Exist',
            url: 'https://websim.ai/@api/this-wireframe-does-not-exist/1',
            description: 'Generated UI/UX wireframes for applications that don\'t exist.',
            thumbnail: createSVGThumbnail('#607D8B', 'wireframe', 'Abstract wireframe layout')
        },
        {
            id: 'arcade-game',
            title: 'This Classic Arcade Game Does Not Exist',
            url: 'https://websim.ai/@api/this-classic-arcade-game-does-not-exist/',
            description: 'Fictional arcade games with retro aesthetics and gameplay mechanics.',
            thumbnail: createSVGThumbnail('#E91E63', 'arcade', 'Pixelated arcade game elements')
        },
        {
            id: 'slideshow',
            title: 'This Slideshow Cartoon Does Not Exist',
            url: 'https://websim.ai/@api/this-slideshow-cartoon-does-not-exist',
            description: 'AI-generated cartoons with unique characters and storytelling.',
            thumbnail: createSVGThumbnail('#795548', 'cartoon', 'Simple cartoon character outline')
        },
        {
            id: 'fridge',
            title: 'This Fridge Does Not Exist',
            url: 'https://websim.ai/@api/this-fridge-does-not-exist/',
            description: 'Conceptual refrigerator designs with innovative features and aesthetics.',
            thumbnail: createSVGThumbnail('#00BCD4', 'fridge', 'Modern refrigerator outline')
        }
    ];

    // Generate project cards and add them to gallery
    const galleryEl = document.getElementById('projectGallery');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.projectId = project.id;
        card.dataset.url = project.url;
        card.dataset.title = project.title;
        
        card.innerHTML = `
            <div class="project-thumbnail" style="background-image: url('${project.thumbnail}')"></div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        
        galleryEl.appendChild(card);
    });

    // Modal elements
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const projectFrame = document.getElementById('projectFrame');
    const closeBtn = document.querySelector('.close-btn');

    // Event listeners for opening modal
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const url = this.dataset.url;
            const title = this.dataset.title;
            
            modalTitle.textContent = title;
            projectFrame.src = url;
            modal.style.display = 'block';
            
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        // Stop iframe content from playing when modal is closed
        projectFrame.src = 'about:blank';
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    }

    // Helper function to create SVG thumbnails
    function createSVGThumbnail(color, iconType, altText) {
        const svgContent = getSVGIcon(iconType, color);
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
    }

    // SVG icons for thumbnails
    function getSVGIcon(type, color) {
        const icons = {
            'game-controller': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <path d="M50,80 L80,80 L80,70 L90,70 L90,80 L120,80 L120,90 L90,90 L90,100 L80,100 L80,90 L50,90 Z" fill="white" />
                <circle cx="140" cy="80" r="10" fill="white" />
                <circle cx="160" cy="100" r="10" fill="white" />
                <path d="M30,60 C20,60 10,70 10,100 C10,130 20,140 40,140 L160,140 C180,140 190,130 190,100 C190,70 180,60 170,60 C120,60 80,60 30,60 Z" stroke="white" fill="none" stroke-width="5" />
            </svg>`,
            
            'code-brackets': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <path d="M60,50 L30,100 L60,150" stroke="white" fill="none" stroke-width="8" stroke-linecap="round" />
                <path d="M140,50 L170,100 L140,150" stroke="white" fill="none" stroke-width="8" stroke-linecap="round" />
                <path d="M120,40 L80,160" stroke="white" fill="none" stroke-width="8" stroke-linecap="round" />
            </svg>`,
            
            'calendar': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <rect x="40" y="50" width="120" height="110" rx="5" fill="white" />
                <rect x="40" y="50" width="120" height="25" fill="#333" />
                <line x1="70" y1="40" x2="70" y2="60" stroke="#333" stroke-width="4" />
                <line x1="130" y1="40" x2="130" y2="60" stroke="#333" stroke-width="4" />
                <rect x="80" y="90" width="40" height="40" rx="5" fill="${color}" />
                <text x="100" y="115" text-anchor="middle" fill="white" font-size="20" font-weight="bold">AI</text>
            </svg>`,
            
            'soda-bottle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <path d="M85,30 L115,30 L115,50 C115,50 125,60 125,70 L125,150 C125,160 115,170 100,170 C85,170 75,160 75,150 L75,70 C75,60 85,50 85,50 Z" fill="white" />
                <circle cx="90" cy="80" r="5" fill="${color}" />
                <circle cx="110" cy="100" r="5" fill="${color}" />
                <circle cx="95" cy="120" r="5" fill="${color}" />
                <circle cx="105" cy="140" r="5" fill="${color}" />
                <path d="M85,30 L115,30 L115,45 L85,45 Z" fill="${color}" />
            </svg>`,
            
            'cat': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <circle cx="100" cy="120" r="50" fill="white" />
                <circle cx="70" cy="100" r="25" fill="white" />
                <circle cx="130" cy="100" r="25" fill="white" />
                <path d="M70,80 L55,50" stroke="white" stroke-width="5" stroke-linecap="round" />
                <path d="M130,80 L145,50" stroke="white" stroke-width="5" stroke-linecap="round" />
                <circle cx="85" cy="110" r="5" fill="black" />
                <circle cx="115" cy="110" r="5" fill="black" />
                <path d="M95,120 L105,120" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path d="M90,130 C95,135 105,135 110,130" stroke="black" stroke-width="2" fill="none" />
            </svg>`,
            
            'wireframe': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <rect x="30" y="30" width="140" height="140" stroke="white" fill="none" stroke-width="2" />
                <rect x="40" y="40" width="120" height="20" fill="white" />
                <rect x="40" y="70" width="60" height="90" stroke="white" fill="none" stroke-width="2" />
                <rect x="110" y="70" width="50" height="40" stroke="white" fill="none" stroke-width="2" />
                <rect x="110" y="120" width="50" height="40" stroke="white" fill="none" stroke-width="2" />
                <line x1="40" y1="80" x2="100" y2="80" stroke="white" stroke-width="2" />
                <line x1="40" y1="90" x2="100" y2="90" stroke="white" stroke-width="2" />
                <line x1="40" y1="100" x2="100" y2="100" stroke="white" stroke-width="2" />
            </svg>`,
            
            'arcade': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <rect x="40" y="40" width="120" height="80" fill="white" />
                <rect x="50" y="50" width="100" height="60" fill="black" />
                <rect x="60" y="130" width="80" height="30" fill="white" />
                <rect x="70" y="60" width="10" height="10" fill="white" />
                <rect x="90" y="70" width="10" height="10" fill="white" />
                <rect x="110" y="80" width="10" height="10" fill="white" />
                <circle cx="140" cy="60" r="8" fill="red" />
                <circle cx="140" cy="80" r="8" fill="blue" />
                <rect x="50" y="140" width="20" height="10" fill="red" />
                <rect x="130" y="140" width="20" height="10" fill="red" />
            </svg>`,
            
            'cartoon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <rect x="40" y="40" width="120" height="80" stroke="white" fill="none" stroke-width="4" />
                <rect x="60" y="130" width="80" height="10" fill="white" />
                <circle cx="100" cy="80" r="30" fill="white" />
                <circle cx="90" cy="70" r="5" fill="black" />
                <circle cx="110" cy="70" r="5" fill="black" />
                <path d="M90,90 C95,100 105,100 110,90" stroke="black" fill="none" stroke-width="2" />
                <rect x="40" y="150" width="120" height="10" fill="white" />
            </svg>`,
            
            'fridge': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="${color}" />
                <rect x="50" y="30" width="100" height="140" rx="5" fill="white" />
                <line x1="50" y1="80" x2="150" y2="80" stroke="#DDD" stroke-width="2" />
                <circle cx="60" cy="60" r="5" fill="${color}" />
                <circle cx="60" cy="100" r="5" fill="${color}" />
                <rect x="70" y="120" width="20" height="30" fill="#EEE" stroke="#DDD" />
                <rect x="100" y="45" width="40" height="25" fill="#EEE" stroke="#DDD" />
                <rect x="100" y="100" width="40" height="20" fill="#EEE" stroke="#DDD" />
            </svg>`
        };
        
        return icons[type] || '';
    }
});

