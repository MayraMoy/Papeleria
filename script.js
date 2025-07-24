const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

function openLightbox(id) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

  // Asocia cada ID con su imagen
const imageMap = {
    cuadro1: 'img/cuadro.png',
    cuadro2: 'img/cuadro2.png',
    cuadro3: 'img/cuadro3.png',

    polaroid1: 'img/poloraid.png',
    polaroid2: 'img/polaraid1.png',
    polaroid3: 'img/poloraid2.png',

    sticker1: 'img/stikers.png',
    sticker2: 'img/stiker.png',
    sticker3: 'img/stikers2.png',
    sticker4: 'img/stikers3.png',
    sticker5: 'img/nombres.png',
    sticker6: 'img/stikers1.png',

    topper1: 'img/toppers.png',
    topper2: 'img/toppers2.png',
    topper3: 'img/toppers3.png',

    calendario1: 'img/calendario.png',
    golosineras1: 'img/golosineramilk.png',

    otros1: 'img/pulsera.png',
    otros2: 'img/recuerdos1.png',
    otros3: 'img/recuerdos2.png',
    otros4: 'img/recuerdos.png',
    otros5: 'img/bolsas.png',

    centro: 'img/centrosmesas.png',
    centro2: 'img/centromesas2.png',
    centro3: 'img/centro.png',
};

lightboxImg.src = imageMap[id];
lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Cerrar con tecla Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Cerrar haciendo clic fuera del contenido
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Keyframes para la animación de los enlaces del menú
const style = document.createElement('style');
style.innerHTML = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
    opacity: 0;
}
.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}
`;
document.head.appendChild(style);

function showDetails(id) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('details-title');
    const description = document.getElementById('details-description');
    const price = document.getElementById('details-price');
    const tags = document.getElementById('details-tags');

    const detailsMap = {
        cuadro1: {
            title: 'Cuadros Personalizados',
            description: 'Hermosos cuadros personalizados con nombres, frases especiales y diseños únicos para decorar cualquier espacio.',
            price: 'Desde $12,000',
            tags: ['Personalizable', 'Varios tamaños', 'Decoración']
    },
        cuadro2: {
            title: 'Cuadros Personalizados',
            description: 'Hermosos cuadros personalizados con nombres, frases especiales y diseños únicos para decorar cualquier espacio.',
            price: 'Desde $12,000',
            tags: ['Personalizable', 'Varios tamaños', 'Decoración']
    },
        cuadro3: {
            title: 'Cuadros Personalizados',
            description: 'Hermosos cuadros personalizados con nombres, frases especiales y diseños únicos para decorar cualquier espacio.',
            price: 'Desde $12,000',
            tags: ['Personalizable', 'Varios tamaños', 'Decoración']
    },
        polaroid1: {
            title: 'Fotos Estilo Polaroid',
            description: 'Fotografías con el encanto vintage de las polaroids, perfectas para crear recuerdos únicos y nostálgicos.',
            price: 'Desde $800',
            tags: ['Vintage', 'Recuerdos', 'Instantáneas']
    },
        polaroid2: {
            title: 'Fotos Estilo Polaroid',
            description: 'Fotografías con el encanto vintage de las polaroids, perfectas para crear recuerdos únicos y nostálgicos.',
            price: 'Desde $800',
            tags: ['Vintage', 'Recuerdos', 'Instantáneas']
    },
        polaroid3: {
            title: 'Fotos Estilo Polaroid',
            description: 'Fotografías con el encanto vintage de las polaroids, perfectas para crear recuerdos únicos y nostálgicos.',
            price: 'Desde $800',
            tags: ['Vintage', 'Recuerdos', 'Instantáneas']
    },
        sticker1: {
            title: 'Stickers y Calcomanías',
            description: 'Stickers coloridos y divertidos para decorar cuadernos, laptops, celulares y cualquier superficie.',
            price: 'Desde $300',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker2: {
            title: 'Stickers y Calcomanías',
            description: 'Stickers coloridos y divertidos para decorar cuadernos, laptops, celulares y cualquier superficie.',
            price: 'Desde $300',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker3: {
            title: 'Stickers y Calcomanías',
            description: 'Stickers coloridos y divertidos para decorar cuadernos, laptops, celulares y cualquier superficie.',
            price: 'Desde $300',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker4: {
            title: 'Stickers y Calcomanías',
            description: 'Stickers coloridos y divertidos para decorar cuadernos, laptops, celulares y cualquier superficie.',
            price: 'Desde $300',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker5: {
            title: 'Stickers y Calcomanías',
            description: 'Stickers coloridos y divertidos para decorar cuadernos, laptops, celulares y cualquier superficie.',
            price: 'Desde $300',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker6: {
            title: 'Stickers y Calcomanías',
            description: 'Stickers coloridos y divertidos para decorar cuadernos, laptops, celulares y cualquier superficie.',
            price: 'Desde $300',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        topper1: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            price: 'Desde $2,000',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        topper2: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            price: 'Desde $2,000',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        topper3: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            price: 'Desde $2,000',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        otros1: {
            title: 'Pulseras Personalizadas',
            description: 'Pulseras únicas y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            price: 'Desde $1,500',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        otros2: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            price: 'Desde $1,200',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros3: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            price: 'Desde $1,200',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros4: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            price: 'Desde $1,200',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros5: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            price: 'Desde $1,200',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        centro: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            price: 'Desde $3,000',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
        centro2: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            price: 'Desde $3,000',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
        centro3: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            price: 'Desde $3,000',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
};

const data = detailsMap[id];

    title.textContent = data.title;
    description.textContent = data.description;
    price.textContent = data.price;

    tags.innerHTML = '';
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        tags.appendChild(span);
    });
    
    modal.style.display = 'flex';
}

function closeDetails() {
    document.getElementById('details-modal').style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();    // si está abierto el lightbox
        closeDetails();     // si está abierto el modal de detalles
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productItems = document.querySelectorAll(".product-item");
    
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
      // Eliminar clase activa de todos los botones
    filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Agregar clase activa al botón actual
        button.classList.add("active");

        const category = button.getAttribute("data-filter");
        
        productItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (category === "all" || itemCategory === category) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
        });
    });
    });
});

