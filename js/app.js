// SIDEBAR
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}

// FAQ
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');

        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.display = 'none';
            }
        });

        accordionItem.classList.toggle('active');
        accordionContent.style.display = accordionItem.classList.contains('active') ? 'block' : 'none';
    });
});

// GALLARY
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item img");

function openModal(image) {
    modal.style.display = "flex";
    modalImage.src = image.src;
    currentIndex = [...images].indexOf(image);
    document.body.classList.add("body-no-scroll");

    
    document.addEventListener("keydown", handleKeydown);
}

function closeModal() {
    modal.style.display = "none";
    modalImage.src = "";
    document.body.classList.remove("body-no-scroll");

    
    document.removeEventListener("keydown", handleKeydown);
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    } else if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    modalImage.src = images[currentIndex].src;
}

function handleKeydown(event) {
    if (event.key === "ArrowLeft") {
        changeImage(-1);
    } else if (event.key === "ArrowRight") {
        changeImage(1);
    } else if (event.key === "Escape") {
        closeModal();
    }
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// SUCCESS
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.textContent = '0'; 

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); 
        const current = +counter.textContent; 
        const increment = target / 200; 

        if (current < target) {
            counter.textContent = Math.ceil(current + increment); 
            setTimeout(updateCounter, 10); 
        } else {
            counter.textContent = target.toLocaleString();
        }
    };

    updateCounter(); 
});


// DISCOUNT
function updateCountdown() {
    const endDate = new Date('2024-10-20T23:59:59');
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();


// BACK TO TOP
const backToTop = document.querySelector('.backToTop');
const body = document.querySelector('body');

const progressBar = () => {
    const totalHeight = body.clientHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const percentage = (100 / totalHeight) * scrollPosition;

    if (percentage > 10) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }

    backToTop.style.backgroundImage = `conic-gradient(dodgerblue 0% ${percentage}%, #ccc 0% 100%)`;
};

window.addEventListener('scroll', progressBar);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});



///////////////////////////////////////////////////////// SOIKAT DEV //////////////////////////////////////////////////////////////////

