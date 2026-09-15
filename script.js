const isOperaGX =
    navigator.userAgent.includes("OPR") ||
    navigator.userAgent.includes("Opera GX");

if (isOperaGX) {
    document.body.classList.add("opera-gx");
} else {
    document.body.classList.add("normal-browser");
}


/* =========================================================
   ELEMENTS
   ========================================================= */

const beginButton = document.getElementById("beginButton");
const introPage = document.querySelector(".intro-page");

const specialPage = document.getElementById("specialPage");
const specialNext = document.getElementById("specialNext");

const phase3 = document.getElementById("phase-3");
const sep15Page1 = document.getElementById("sep15-page1");
const sep15Stars = document.getElementById("sep15Stars");
const sep15OpenButton = document.getElementById("sep15OpenButton");
const gxCorner = document.getElementById("gxCorner");

const sep15Page2 = document.getElementById("sep15-page2");
const sep15Page2Stars = document.getElementById("sep15Page2Stars");
const sep15RevealCard = document.getElementById("sep15RevealCard");
const sep15RevealButton = document.getElementById("sep15RevealButton");
const sep15Page2Next = document.getElementById("sep15Page2Next");
const sep15MemoryPage = document.getElementById("sep15-memory-page");
const memoryStars = document.getElementById("memoryStars");
const memoryFinishButton = document.getElementById("memoryFinishButton");
/* =========================================================
   PAGE 1 → PAGE 2
   ========================================================= */

if (beginButton && introPage && specialPage) {
    beginButton.addEventListener("click", () => {
        introPage.classList.add("hide-page");
        setTimeout(() => {
            introPage.style.display = "none";
            specialPage.classList.add("active");
        }, 800);
    });
}


/* ====   PAGE 2 → PAGE 3    ==== */

if (specialNext && specialPage && phase3) {

    specialNext.addEventListener("click", () => {

        console.log("Moving from Page 2 to Page 3...");

        // Start Page 2 fade-out
        specialPage.classList.add("special-page-exit");

        setTimeout(() => {

            specialPage.classList.remove("active");
            specialPage.style.display = "none";

            phase3.style.display = "flex";

            phase3.classList.remove("phase-enter");

            void phase3.offsetWidth;

            phase3.classList.add("phase-enter");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            console.log("Page 3 is now active.");

        }, 800);

    });

}


/* =========================================================
   PAGE 3 → DATE SELECTION
   ========================================================= */

function selectDate(date) {

    console.log("Selected date:", date);

    if (date === "15") {

        console.log("Opening September 15 Subpage 1 ❤️");

        // Hide Page 3
        phase3.style.display = "none";

        // Show September 15 Subpage 1
        sep15Page1.style.display = "flex";

        // Restart entrance animation
        sep15Page1.classList.remove("sep15-enter");

        void sep15Page1.offsetWidth;

        sep15Page1.classList.add("sep15-enter");

        // Start from top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (date === "23") {

        console.log("September 23 story selected ✨");

        // Leave this untouched for now
        alert("September 23 story selected ✨");

    }

}

/* =========================================================
   OPERA GX PARTICLES
   ========================================================= */

function createGXParticles() {

    // Don't create GX particles on normal browsers
    if (!isOperaGX) {
        return;
    }

    // Prevent duplicate particle containers
    if (document.querySelector(".gx-particles")) {
        return;
    }

    const particleContainer =
        document.createElement("div");

    particleContainer.className = "gx-particles";

    document.body.appendChild(particleContainer);


    for (let i = 0; i < 25; i++) {

        const particle =
            document.createElement("span");

        particle.className = "gx-particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        particleContainer.appendChild(particle);

    }

}


/* Start GX particles */
if (isOperaGX) {

    createGXParticles();

}

if (sep15Stars) {

    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement("span");

        star.classList.add("sep15-star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 3 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        sep15Stars.appendChild(star);

    }

}


/* =========================================================
   15 SEPTEMBER — OPERA GX MODE
   ========================================================= */

if (isOperaGX && gxCorner) {

    // Show GX indicator
    gxCorner.style.display = "block";

    // Add special GX class
    document.body.classList.add("opera-gx-mode");

}

if (sep15OpenButton && sep15Page1 && sep15Page2) {

    sep15OpenButton.addEventListener("click", () => {

        sep15OpenButton.disabled = true;

        const buttonText =
            sep15OpenButton.querySelector("span");

        if (buttonText) {
            buttonText.textContent = "Opening...";
        }

        sep15Page1.classList.add("sep15-exit");

        setTimeout(() => {

            sep15Page1.style.display = "none";

            sep15Page2.style.display = "flex";

            void sep15Page2.offsetWidth;

            sep15Page2.classList.add("p2-enter");

            window.scrollTo(0, 0);

            console.log(
                "15 September Subpage 2 opened ✨"
            );

        }, 850);

    });
}


/* CREATE SUBPAGE 2 STARS */

if (sep15Page2Stars) {

    for (let i = 0; i < 65; i++) {

        const star = document.createElement("span");

        star.classList.add("sep15-p2-star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 2.5 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        sep15Page2Stars.appendChild(star);
    }
}

/* =========================================================
   FINAL MEMORY PAGE — CREATE STARS
   ========================================================= */

if (memoryStars) {

    for (let i = 0; i < 70; i++) {

        const star =
            document.createElement("span");

        star.classList.add("memory-star");

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";
        const size = Math.random() * 2.5 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 3 + "s";
        memoryStars.appendChild(star);
    }
}

/* SUBPAGE 1 → SUBPAGE 2 */

if (sep15OpenButton && sep15Page1 && sep15Page2) {
    sep15OpenButton.addEventListener("click", () => {
        sep15OpenButton.disabled = true;
        const buttonText =
            sep15OpenButton.querySelector("span");
        if (buttonText) {
            buttonText.textContent = "Opening...";
        }
        sep15Page1.classList.add("sep15-exit");
        setTimeout(() => {
            sep15Page1.style.display = "none";
            sep15Page2.style.display = "flex";
            void sep15Page2.offsetWidth;
            sep15Page2.classList.add("p2-enter");
            window.scrollTo(0, 0);
            console.log(
                "15 September Subpage 2 opened ✨"
            );
        }, 850);
    });
}

if (sep15RevealButton && sep15RevealCard) {
    sep15RevealButton.addEventListener("click", () => {
        sep15RevealCard.classList.add("revealed");
        setTimeout(() => {
            if (sep15Page2Next) {
                sep15Page2Next.classList.add("visible");
            }
        }, 700);
    });
}

/* =========================================================
   SUBPAGE 2 → FINAL MEMORY PAGE
   ========================================================= */

if (
    sep15Page2Next &&
    sep15Page2 &&
    sep15MemoryPage
) {

    sep15Page2Next.addEventListener("click", () => {

        console.log(
            "Opening final September 15 memory page 📸"
        );

        // Prevent multiple clicks
        sep15Page2Next.disabled = true;

        // Start Subpage 2 exit
        sep15Page2.classList.add("p2-exit");

        setTimeout(() => {

            // Hide Subpage 2
            sep15Page2.style.display = "none";

            // Show final memory page
            sep15MemoryPage.style.display = "flex";

            // Restart entrance animation
            sep15MemoryPage.classList.remove(
                "memory-enter"
            );
            void sep15MemoryPage.offsetWidth;
            sep15MemoryPage.classList.add("memory-enter");
            window.scrollTo(0, 0);
            console.log("Final memory page opened ❤️");
        }, 800);
    });
}
/* =========================================================
   FINAL MEMORY BUTTON
   ========================================================= */

if (memoryFinishButton) {

    memoryFinishButton.addEventListener("click", () => {

        memoryFinishButton.disabled = true;

        memoryFinishButton.innerHTML =
            'Story saved in memory <span>♡</span>';

        memoryFinishButton.style.opacity = "0.75";

        console.log(
            "September 15 story completed ❤️"
        );

    });

}