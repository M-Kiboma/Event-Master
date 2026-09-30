document.addEventListener("DOMContentLoaded", () => {
    /* ================= 1. CURSOR SPOTLIGHT TRACKER ================= */
    const spotlight = document.getElementById("cursorSpotlight");
    if (spotlight) {
        window.addEventListener("mousemove", (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    }

    /* ================= 2. DYNAMIC GOLD DUST PARTICLES ================= */
    const container = document.getElementById("particlesContainer");
    if (container) {
        for (let i = 0; i < 22; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            const size = Math.floor(Math.random() * 5) + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 7 + 6}s`;
            particle.style.animationDelay = `${Math.random() * 4}s`;
            container.appendChild(particle);
        }
    }

    /* ================= 3. MOBILE NAVIGATION TOGGLE ================= */
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => navLinks.classList.remove("active"));
        });
    }

    /* ================= 4. GALLERY CATEGORY FILTERING ================= */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryCards = document.querySelectorAll(".gallery-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");

            galleryCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    /* ================= 5. LIGHTBOX MODAL INTERACTION ================= */
    const modal = document.getElementById("lightboxModal");
    const modalClose = document.getElementById("lightboxClose");
    const modalEmoji = document.getElementById("lightboxEmoji");
    const modalTitle = document.getElementById("lightboxTitle");
    const modalDesc = document.getElementById("lightboxDesc");

    galleryCards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.getAttribute("data-title");
            const desc = card.getAttribute("data-desc");
            const emoji = card.querySelector(".card-emoji").textContent;

            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalEmoji.textContent = emoji;
            modal.classList.add("active");
        });
    });

    if (modalClose && modal) {
        modalClose.addEventListener("click", () => modal.classList.remove("active"));
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });
    }

    /* ================= 6. BOOKING FORM NOTIFICATION ================= */
    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("clientName").value;
            alert(`✨ Magnificent, ${name}!\n\nYour booking request has been successfully transmitted to MC Markotee's management. Get ready to Event It Successfully! 🎤`);
            form.reset();
        });
    }
});