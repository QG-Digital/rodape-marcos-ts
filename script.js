document.addEventListener('DOMContentLoaded', () => {

    const openWhatsApp = (message) => {
        const url = `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const loadContent = () => {
        // Hero
        document.getElementById('hero-video').innerHTML = `<source src="${CONFIG.hero.videoUrl}" type="video/mp4">`;
        document.getElementById('hero-title').textContent = CONFIG.hero.title;
        document.getElementById('hero-subtitle').textContent = CONFIG.hero.subtitle;

        // Differentials
        document.getElementById('differentials-title').textContent = CONFIG.differentials.title;
        document.getElementById('differentials-subtitle').textContent = CONFIG.differentials.subtitle;
        document.getElementById('differentials-grid').innerHTML = CONFIG.differentials.items.map(item => `
            <div class="differential-card">
                <div class="differential-icon">${ICONS[item.icon]}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

        // Products
        document.getElementById('products-title').textContent = CONFIG.products.title;
        document.getElementById('products-subtitle').textContent = CONFIG.products.subtitle;
        document.getElementById('products-grid').innerHTML = CONFIG.products.items.map(item => `
            <div class="product-card" data-id="${item.id}">
                <div class="product-image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p class="product-specs">Altura: ${item.height} | Material: ${item.material}</p>
                    <div class="product-buttons">
                        <button class="cta-button" onclick="openMaterialModal('${item.material.toLowerCase().replace(' (ps)', '').replace(' expandido', '')}')">
                            Sobre o ${item.material}
                        </button>
                        <button class="cta-button" onclick="openGalleryModal('${item.id}')">
                            Ver Galeria
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Materials
        document.getElementById('materials-title').textContent = CONFIG.materials.title;
        document.getElementById('materials-subtitle').textContent = CONFIG.materials.subtitle;
        document.getElementById('materials-grid').innerHTML = CONFIG.materials.items.map(item => `
            <div class="material-card">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <ul>${item.properties.map(prop => `<li>${prop}</li>`).join('')}</ul>
            </div>
        `).join('');

        // Factory
        document.getElementById('factory-title').textContent = CONFIG.factory.title;
        document.getElementById('factory-text').innerHTML = CONFIG.factory.text;
        document.getElementById('factory-gallery').innerHTML = CONFIG.factory.images.map(src => `
            <img src="${src}" alt="Foto da fábrica Rodapés Premium" loading="lazy">
        `).join('');

        // Contact
        document.getElementById('contact-title').textContent = CONFIG.contactSection.title;
        document.getElementById('contact-subtitle').textContent = CONFIG.contactSection.subtitle;
        document.getElementById('contact-details').innerHTML = `
            <div class="contact-details-item">
                <div class="contact-details-icon">${ICONS.whatsapp}</div>
                <div class="contact-details-text"><h4>WhatsApp</h4><p><a href="javascript:void(0);" id="contact-whatsapp-link">${CONFIG.contact.phone}</a></p></div>
            </div>
            <div class="contact-details-item">
                <div class="contact-details-icon">${ICONS.mail}</div>
                <div class="contact-details-text"><h4>Email Comercial</h4><p><a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a></p></div>
            </div>
            <div class="contact-details-item">
                <div class="contact-details-icon">${ICONS.mapPin}</div>
                <div class="contact-details-text"><h4>Nossa Sede</h4><p><a href="${CONFIG.contact.googleMapsLink}" target="_blank" rel="noopener noreferrer">${CONFIG.contact.location}</a></p></div>
            </div>
        `;
        document.getElementById('contact-whatsapp-link').addEventListener('click', () => openWhatsApp(CONFIG.contact.defaultWhatsappMessage));

        // Footer
        const socialIconsHTML = Object.keys(CONFIG.social).map(key => `
            <a href="${CONFIG.social[key]}" target="_blank" rel="noopener noreferrer" aria-label="${key.charAt(0).toUpperCase() + key.slice(1)}">${ICONS[key]}</a>
        `).join('');
        document.getElementById('footer-social-icons').innerHTML = socialIconsHTML;
        document.getElementById('footer-tagline').textContent = CONFIG.footer.tagline;
        document.getElementById('footer-contact-phone').innerHTML = `<a href="javascript:void(0);" id="footer-whatsapp-link">${CONFIG.contact.phone}</a>`;
        document.getElementById('footer-contact-email').innerHTML = `<a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a>`;
        document.getElementById('footer-contact-location').innerHTML = `<a href="${CONFIG.contact.googleMapsLink}" target="_blank" rel="noopener noreferrer">${CONFIG.contact.location}</a>`;
        document.getElementById('footer-copyright').textContent = CONFIG.footer.copyright;
        document.getElementById('footer-developer').innerHTML = `<a href="${CONFIG.footer.developer.url}" target="_blank" rel="noopener noreferrer">${CONFIG.footer.developer.text}</a>`;
        document.getElementById('footer-whatsapp-link').addEventListener('click', () => openWhatsApp(CONFIG.contact.defaultWhatsappMessage));

        // WhatsApp Floating Button
        document.getElementById('whatsapp-float').addEventListener('click', () => openWhatsApp(CONFIG.contact.defaultWhatsappMessage));
    };

    const initMobileMenu = () => {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }));
    };

    const initContactForm = () => {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.elements['name'].value;
            const interest = form.elements['interest'].value;
            const message = form.elements['message'].value;
            const fullMessage = `Olá, meu nome é ${name}, tenho interesse em "${interest}". ${message || ''}`.trim();
            openWhatsApp(fullMessage);
            form.reset();
        });
    };
    
    // --- MODAL LOGIC ---
    window.openMaterialModal = (materialId) => {
        const modal = document.getElementById('material-modal');
        const material = CONFIG.materials.items.find(m => m.id === materialId);
        if (!material) return;
        document.getElementById('modal-title').textContent = material.name;
        document.getElementById('modal-description').textContent = material.description;
        document.getElementById('modal-properties').innerHTML = material.properties.map(p => `<li>${p}</li>`).join('');
        modal.classList.add('active');
    };

    let currentGalleryIndex = 0;
    window.openGalleryModal = (productId) => {
        const modal = document.getElementById('gallery-modal');
        const product = CONFIG.products.items.find(p => p.id === productId);
        if (!product || !product.gallery || product.gallery.length === 0) return;
        
        document.getElementById('gallery-modal-title').textContent = `Galeria: ${product.name}`;
        const imagesContainer = document.getElementById('gallery-modal-images');
        imagesContainer.innerHTML = product.gallery.map(src => `<img src="${src}" alt="Galeria de ${product.name}" loading="lazy">`).join('');
        
        currentGalleryIndex = 0;
        updateGalleryView();
        modal.classList.add('active');
    };

    const updateGalleryView = () => {
        const images = document.querySelectorAll('#gallery-modal-images img');
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentGalleryIndex);
        });
    };
    
    const initModals = () => {
        document.querySelectorAll('.modal').forEach(modal => {
             modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-close-button')) {
                    modal.classList.remove('active');
                }
            });
        });

        document.getElementById('gallery-prev').addEventListener('click', () => {
            const imageCount = document.querySelectorAll('#gallery-modal-images img').length;
            currentGalleryIndex = (currentGalleryIndex - 1 + imageCount) % imageCount;
            updateGalleryView();
        });

        document.getElementById('gallery-next').addEventListener('click', () => {
            const imageCount = document.querySelectorAll('#gallery-modal-images img').length;
            currentGalleryIndex = (currentGalleryIndex + 1) % imageCount;
            updateGalleryView();
        });
    };
    
    // --- NEW FEATURES ---
    const initProductShowMore = () => {
        const wrapper = document.querySelector('.products-reveal-wrapper');
        const button = document.getElementById('show-more-products');
        
        // Se houver 4 ou menos itens, esconde o botão e o container dele
        if (CONFIG.products.items.length <= 4) {
            button.closest('.show-more-container').classList.add('hidden');
            wrapper.classList.add('show-all'); // Garante que todos sejam visíveis e a animação não restrinja
            return;
        }

        button.addEventListener('click', () => {
            wrapper.classList.toggle('show-all');
            button.textContent = wrapper.classList.contains('show-all') ? 'Ver menos modelos' : 'Ver mais modelos';
        });
    };

    const initAnimatedBg = () => {
        const bg = document.getElementById('animated-bg');
        const shapeCount = 15;
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape');
            shape.style.left = `${Math.random() * 100}vw`;
            shape.style.top = `${Math.random() * 100}vh`;
            const size = Math.random() * 150 + 50;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.animationDuration = `${Math.random() * 20 + 15}s`;
            shape.style.animationDelay = `${Math.random() * 5}s`;
            bg.appendChild(shape);
        }
    };
    
    const initParticleEffect = () => {
        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            document.body.appendChild(particle);
            
            const size = Math.floor(Math.random() * 8 + 4);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x - size / 2}px`;
            particle.style.top = `${y - size / 2}px`;

            const destX = (Math.random() - 0.5) * 100;
            const destY = (Math.random() - 0.5) * 100;
            particle.style.setProperty('--x', `${destX}px`);
            particle.style.setProperty('--y', `${destY}px`);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        };
        
        document.addEventListener('mousemove', e => createParticle(e.clientX, e.clientY));
        document.addEventListener('touchmove', e => createParticle(e.touches[0].clientX, e.touches[0].clientY));
    };

    // Initialize all functions
    loadContent();
    initMobileMenu();
    initContactForm();
    initModals();
    initProductShowMore();
    initAnimatedBg();
    initParticleEffect();
});