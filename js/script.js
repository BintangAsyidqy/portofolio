/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/*
   Close mobile menu after clicking
   a navigation link.
*/

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =====================================================
   PROJECT IMAGE PREVIEW
===================================================== */

const projectImages = document.querySelectorAll(".project-image, .certificate-image");
const imageModal = document.getElementById("imageModal");
const imageModalPreview = document.getElementById("imageModalPreview");
const imageModalClose = document.getElementById("imageModalClose");

const closeImageModal = () => {
    imageModal.classList.remove("active");
    imageModal.setAttribute("aria-hidden", "true");
    imageModalPreview.src = "";
    document.body.style.overflow = "";
};

const openImageModal = (imageContainer) => {
    const image = imageContainer.querySelector("img");

    imageModalPreview.src = image.src;
    imageModalPreview.alt = image.alt;
    imageModal.classList.add("active");
    imageModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    imageModalClose.focus();
};

projectImages.forEach((imageContainer) => {
    imageContainer.setAttribute("role", "button");
    imageContainer.setAttribute("tabindex", "0");
    imageContainer.setAttribute("aria-label", "Lihat detail foto");

    imageContainer.addEventListener("click", () => {
        openImageModal(imageContainer);
    });

    imageContainer.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openImageModal(imageContainer);
        }
    });
});

imageModalClose.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        closeImageModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageModal.classList.contains("active")) {
        closeImageModal();
    }
});


