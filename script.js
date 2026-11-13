console.log("Barbara-pro: JavaScript працює!");

const services = [
    {
        title: "Краса та догляд",
        description: "Професійний догляд та увага до кожної деталі."
    },
    {
        title: "Індивідуальний стиль",
        description: "Підкреслюємо вашу природну красу."
    },
    {
        title: "Професійні послуги",
        description: "Якість, комфорт та турбота про кожного клієнта."
    }
];

const servicesList = document.getElementById("services-list");

if (servicesList) {
    services.forEach(service => {
        const card = document.createElement("div");

        card.className = "service-card";

        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;

        servicesList.appendChild(card);
    });
}

// Анімація появи блоків
const sections = document.querySelectorAll(
    ".about, .services, .gallery, .videos, .price-list, .contacts"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
// Галерея фотографій
const galleryList = document.getElementById("gallery-list");
const photoModal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const modalClose = document.getElementById("modal-close");

for (let i = 1; i <= 40; i++) {
    const image = document.createElement("div");

    image.className = "gallery-item";

    image.innerHTML = `
        <img src="./images/work${i}.jpg" alt="Робота салону Barbara-pro">
    `;

    galleryList.appendChild(image);

    image.addEventListener("click", () => {
        modalImage.src = `./images/work${i}.jpg`;
        photoModal.classList.add("active");
    });
}

modalClose.addEventListener("click", () => {
    photoModal.classList.remove("active");
});

photoModal.addEventListener("click", (event) => {
    if (event.target === photoModal) {
        photoModal.classList.remove("active");
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        photoModal.classList.remove("active");
    }
});