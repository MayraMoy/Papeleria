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
    cuadro1: 'img/cuadros/cuadro1.png',
    cuadro2: 'img/cuadros/cuadro2.png',
    cuadro3: 'img/cuadros/cuadro3.png',

    polaroid1: 'img/fotos/polaraid.png',
    polaroid2: 'img/fotos/polaraid1.png',
    polaroid3: 'img/fotos/poloraid2.png',

    sticker1: 'img/stickers/stikers0.png',
    sticker2: 'img/stickers/stiker.png',
    sticker3: 'img/stickers/stikers2.png',
    sticker4: 'img/stickers/stikers3.png',
    sticker5: 'img/stickers/stikers4.png',
    sticker6: 'img/stickers/stikers1.png',

    topper1: 'img/toppers/toppers.png',
    topper2: 'img/toppers/toppers2.png',
    topper3: 'img/toppers/toppers3.png',
    topper4: 'img/toppers/toppers4.jpg',

    calendario1: 'img/calendarios/calendario.png',

    golosinera1: 'img/golosineras/golosineramilk.png',
    golosinera2: 'img/golosineras/cajita2.png',
    golosinera3: 'img/golosineras/bolsas1.png',
    golosinera4: 'img/golosineras/golosinera.jpg',

    otros1: 'img/otros/pulsera.png',
    otros2: 'img/otros/recuerdos1.png',
    otros3: 'img/otros/recuerdos2.png',
    otros4: 'img/otros/recuerdos.png',
    otros5: 'img/otros/bolsas.png',
    otros6: 'img/otros/otros.jpg',
    otros0: 'img/otros/otros1.jpg',
    otros7: 'img/otros/otros2.jpg',
    otros8: 'img/otros/souvenirs1.jpg',
    otros9: 'img/otros/souvenirs.jpg',

    centro1: 'img/centro-mesa/centromesa4.jpg',
    centro2: 'img/centro-mesa/centromesas2.png',
    centro3: 'img/centro-mesa/centro.png',
    centro4: 'img/centro-mesa/centromesa3.jpg',
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

// Cerrar modal de detalles al hacer clic fuera del contenido
document.getElementById('details-modal').addEventListener('click', function (e) {
    if (e.target.id === 'details-modal') {
        closeDetails();
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
    const subtitle = document.getElementById('details-subtitle');
    const description = document.getElementById('details-description');
    const price = document.getElementById('details-price');
    const tags = document.getElementById('details-tags');

    const detailsMap = {
        cuadro1: {
            title: 'Cuadros Personalizados',
            subtitle: 'Cuadros Personalizados 13x18 cm.',
            description: 'Impresos en papel fotográfico de alta calidad, podés agregar nombres, frases o fechas especiales. Vienen listos para apoyar, ideales para decorar escritorios, estanterías o mesas. Disponibles en color blanco o negro, combinan con cualquier estilo y ocasión.',
            tags: ['Personalizable', 'Decoración']
    },
        cuadro2: {
            title: 'Cuadros Personalizados',
            subtitle: 'Cuadros Personalizados 13x18 cm.',
            description: 'Impresos en papel fotográfico de alta calidad, podés agregar nombres, frases o fechas especiales. Vienen listos para apoyar, ideales para decorar escritorios, estanterías o mesas. Disponibles en color blanco o negro, combinan con cualquier estilo y ocasión.',
            tags: ['Personalizable', 'Decoración']
    },
        cuadro3: {
            title: 'Cuadros Personalizados',
            subtitle: 'Cuadros Personalizados 13x18 cm.',
            description: 'Impresos en papel fotográfico de alta calidad, podés agregar nombres, frases o fechas especiales. Vienen listos para apoyar, ideales para decorar escritorios, estanterías o mesas. Disponibles en color blanco o negro, combinan con cualquier estilo y ocasión.',
            tags: ['Personalizable', 'Decoración']
    },
        polaroid1: {
            title: 'Fotos Estilo Polaroid',
            subtitle: 'Fotos Estilo Polaroid 8x10 cm',
            description: 'Dale vida a tus recuerdos con nuestras fotos tipo Polaroid de 8x10 cm. Están impresas en papel fotográfico de alta calidad y podés personalizarlas con frases, nombres o fechas especiales. Son ideales para decorar, regalar o crear álbumes llenos de momentos únicos',
            price: 'Disponibles en packs:',
            tags: ['Pack x12 ud: $7500', 'Pack x18 ud: $12.000', 'Pack x24 ud: $15.000', 'Pack x32 ud: $18.000']
    },
        polaroid2: {
            title: 'Fotos Estilo Polaroid',
            subtitle: 'Fotos Estilo Polaroid 8x10 cm',
            description: 'Dale vida a tus recuerdos con nuestras fotos tipo Polaroid de 8x10 cm. Están impresas en papel fotográfico de alta calidad y podés personalizarlas con frases, nombres o fechas especiales. Son ideales para decorar, regalar o crear álbumes llenos de momentos únicos',
            price: 'Disponibles en packs:',
            tags: ['Pack x12 ud: $7500', 'Pack x18 ud: $12.000', 'Pack x24 ud: $15.000', 'Pack x32 ud: $18.000']
    },
        polaroid3: {
            title: 'Fotos Estilo Polaroid',
            subtitle: 'Fotos Estilo Polaroid 8x10 cm',
            description: 'Dale vida a tus recuerdos con nuestras fotos tipo Polaroid de 8x10 cm. Están impresas en papel fotográfico de alta calidad y podés personalizarlas con frases, nombres o fechas especiales. Son ideales para decorar, regalar o crear álbumes llenos de momentos únicos',
            price: 'Disponibles en packs:',
            tags: ['Pack x12 ud: $7500', 'Pack x18 ud: $12.000', 'Pack x24 ud: $15.000', 'Pack x32 ud: $18.000']
    },
        sticker1: {
            title: 'Stickers y Calcomanías',
            subtitle: 'Papel fotográfico brillante adhesivo',
            description: 'papel fotográfico brillante adhesivo. Ideales para decorar bolsitas, souvenirs, cajitas, vasos y mucho más. Resistentes, con colores vibrantes y terminación brillante, se adaptan a cualquier temática. Podés elegir nombres, frases, personajes y diseños únicos para hacer de cada cumpleaños un momento inolvidable.',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker2: {
            title: 'Stickers y Calcomanías',
            subtitle: 'Papel fotográfico brillante adhesivo',
            description: 'papel fotográfico brillante adhesivo. Ideales para decorar bolsitas, souvenirs, cajitas, vasos y mucho más. Resistentes, con colores vibrantes y terminación brillante, se adaptan a cualquier temática. Podés elegir nombres, frases, personajes y diseños únicos para hacer de cada cumpleaños un momento inolvidable.',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker3: {
            title: 'Stickers y Calcomanías',
            subtitle: 'Papel fotográfico brillante adhesivo',
            description: 'papel fotográfico brillante adhesivo. Ideales para decorar bolsitas, souvenirs, cajitas, vasos y mucho más. Resistentes, con colores vibrantes y terminación brillante, se adaptan a cualquier temática. Podés elegir nombres, frases, personajes y diseños únicos para hacer de cada cumpleaños un momento inolvidable.',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker4: {
            title: 'Stickers y Calcomanías',
            subtitle: 'Papel fotográfico brillante adhesivo',
            description: 'papel fotográfico brillante adhesivo. Ideales para decorar bolsitas, souvenirs, cajitas, vasos y mucho más. Resistentes, con colores vibrantes y terminación brillante, se adaptan a cualquier temática. Podés elegir nombres, frases, personajes y diseños únicos para hacer de cada cumpleaños un momento inolvidable.',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker5: {
            title: 'Stickers y Calcomanías',
            subtitle: 'Papel fotográfico brillante adhesivo',
            description: 'papel fotográfico brillante adhesivo. Ideales para decorar bolsitas, souvenirs, cajitas, vasos y mucho más. Resistentes, con colores vibrantes y terminación brillante, se adaptan a cualquier temática. Podés elegir nombres, frases, personajes y diseños únicos para hacer de cada cumpleaños un momento inolvidable.',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        sticker6: {
            title: 'Stickers y Calcomanías',
            subtitle: 'Papel fotográfico brillante adhesivo',
            description: 'papel fotográfico brillante adhesivo. Ideales para decorar bolsitas, souvenirs, cajitas, vasos y mucho más. Resistentes, con colores vibrantes y terminación brillante, se adaptan a cualquier temática. Podés elegir nombres, frases, personajes y diseños únicos para hacer de cada cumpleaños un momento inolvidable.',
            tags: ['Variados', 'Resistentes', 'Coloridos']
    },
        calendario1: {
            title: 'Calendarios Personalizados',
            subtitle: 'Papel fotográfico brillante',
            description: 'Llevá tu marca a donde vayan tus clientes con nuestros calendarios personalizados imantados. Están impresos en papel fotográfico brillante de alta calidad, lo que garantiza colores intensos y una presentación profesional. Son ideales para regalar como detalle de fin de año o como promoción de tu negocio. Disponibles en varios tamaños, se adhieren fácilmente a heladeras, escritorios y superficies metálicas. ¡Una forma práctica y visual de estar presente todo el año!',
            tags: ['Personalizable', 'Decoración', 'Regalo']
    },
        topper1: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        topper2: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        topper3: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        topper4: {
            title: 'Toppers Personalizados',
            description: 'Toppers únicos para decorar tortas y cupcakes, perfectos para darle un toque especial a tus celebraciones.',
            tags: ['Decoración', 'Fiestas', 'Personalizable']
    },
        otros0: {
            title: 'Souvenirs Personalizadas',
            description: 'Souvenirs únicos y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        otros1: {
            title: 'Pulseras Personalizadas',
            description: 'Pulseras únicas y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        otros2: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros3: {
            title: 'Tarjetas Personalizadas',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros4: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros5: {
            title: 'Recuerdos Personalizados',
            description: 'Recuerdos únicos para eventos, como bautizos, comuniones o cumpleaños, personalizados con el nombre y fecha del evento.',
            tags: ['Eventos', 'Personalizable', 'Recuerdos']
    },
        otros6: {
            title: 'Souvenirs Personalizadas',
            description: 'Souvenirs únicos y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        otros7: {
            title: 'Souvenirs Personalizadas',
            description: 'Souvenirs únicos y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        otros8: {
            title: 'Souvenirs Personalizadas',
            description: 'Souvenirs únicos y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        otros9: {
            title: 'Souvenirs Personalizadas',
            description: 'Souvenirs únicos y personalizadas con nombres, frases o diseños especiales, ideales para regalar o usar en eventos.',
            tags: ['Personalizable', 'Regalo', 'Eventos']
    },
        centro1: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
        centro2: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
        centro3: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
        centro4: {
            title: 'Centros de Mesa Personalizados',
            description: 'Centros de mesa únicos y personalizados para decorar tus eventos, con diseños que se adaptan a cualquier temática.',
            tags: ['Eventos', 'Decoración', 'Personalizable']
    },
        golosinera1: {
            title: 'Golosineras Personalizadas',
            subtitle: 'Golosinera tipo Milk – Papel fotográfico brillante',
            description: 'Decorá tu fiesta con nuestras cajitas tipo milk, ideales para golosinas, souvenirs o regalitos. Están impresas en papel fotográfico brillante, lo que les da un acabado de alta calidad y colores súper vibrantes. Podés personalizarlas con el nombre del homenajeado, edad, fecha y temática que elijas.',
            price: '🎉 Pack de 15 unidades por $45.000',
            tags: ['Eventos', 'Dulces', 'Personalizable']
    },
        golosinera2: {
            title: 'Golosineras Personalizadas',
            subtitle: 'Golosinera tipo Milk – Papel fotográfico brillante',
            description: 'Golosineras únicas y personalizadas para eventos, ideales para regalar dulces y sorpresas a tus invitados.',
            price: '🎉 Pack de 15 unidades por $45.000',
            tags: ['Eventos', 'Dulces', 'Personalizable']
    },
        golosinera3: {
            title: 'Golosineras Personalizadas',
            description: 'Golosineras únicas y personalizadas para eventos, ideales para regalar dulces y sorpresas a tus invitados.',
            tags: ['Eventos', 'Dulces', 'Personalizable']
    },
        golosinera4: {
            title: 'Golosineras Personalizadas',
            description: 'Golosineras únicas y personalizadas para eventos, ideales para regalar dulces y sorpresas a tus invitados.',
            tags: ['Eventos', 'Dulces', 'Personalizable']
    }
};

const data = detailsMap[id];

    title.textContent = data.title;
    subtitle.textContent = data.subtitle || ''; // Si no hay subtítulo, se deja vacío
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

// Cierra el menú al hacer clic en un link (móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('nav-active');
        document.querySelector('.burger').classList.remove('toggle');
    });
});

window.addEventListener("orientationchange", function () {
    const menu = document.querySelector(".menu");
    menu.classList.remove("active");
});
