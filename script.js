// ========================================
// STRAFE MANUTENÇÃO — INTERAÇÕES
// ========================================

// Ano automático no rodapé
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ========================================
// EFEITO DE LUZ ACOMPANHANDO O MOUSE
// ========================================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
    window.addEventListener("mousemove", (event) => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
    });
}


// ========================================
// MENU MOBILE
// ========================================

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const menuOpen = navigation.classList.toggle("open");

        menuButton.textContent = menuOpen ? "×" : "☰";

    });


    // Fecha o menu ao clicar em algum link
    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");
            menuButton.textContent = "☰";

        });

    });

}


// ========================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ========================================

const animatedElements = document.querySelectorAll(
    ".service-card, .step, .feature-list div, .terminal"
);

if (animatedElements.length > 0) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}


// ========================================
// ESTILOS DINÂMICOS DAS ANIMAÇÕES
// ========================================

const dynamicStyle = document.createElement("style");

dynamicStyle.textContent = `

.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition:
        opacity 0.6s ease,
        transform 0.6s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* Menu mobile */

@media (max-width: 900px) {

    .nav.open {

        display: flex;

        position: absolute;

        top: 72px;

        left: 20px;

        right: 20px;

        flex-direction: column;

        gap: 0;

        padding: 8px;

        background: rgba(9, 12, 16, 0.97);

        border: 1px solid rgba(255, 255, 255, 0.09);

        backdrop-filter: blur(16px);

        z-index: 100;

    }


    .nav.open a {

        padding: 15px;

        border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    }


    .nav.open a:last-child {

        border-bottom: none;

    }

}

`;

document.head.appendChild(dynamicStyle);
