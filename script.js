// 1. Loading Screen Animasi
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// 2. Navbar Sticky & Scroll Progress Bar
const navbar = document.getElementById("navbar");
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    // Memberikan background gelap solid ke navbar saat di-scroll
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Perhitungan Scroll Progress Bar
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});

// 3. Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Menutup menu saat tautan diklik (pada versi mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// 4. Efek Mengetik (Typing Effect)
const textArray = ["Web Developer", "IoT Engineer", "Problem Solver"];
let typingDelay = 100;
let erasingDelay = 60;
let newTextDelay = 2000;
let textIndex = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingSpan.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay + 400);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(textArray.length) setTimeout(type, newTextDelay);
});

// 5. Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Memicu animasi 1x saja
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

// 6. Tombol Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
});