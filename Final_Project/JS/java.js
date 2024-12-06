// Fetch header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('GlobalHeader').innerHTML = data;

        const header = document.querySelector('#TOPheader');
        const headerA = document.querySelectorAll('.headerA');
        const logo = document.querySelector('#logo');
        const location = document.querySelector('#location');
        const chart = document.querySelector('#chart');

        if (header) {
            window.addEventListener('scroll', () => {
                let scrollPosition = window.scrollY || document.documentElement.scrollTop;

                if (scrollPosition > 0) {
                    header.classList.add('white');
                    headerA.forEach(anchor => {
                        anchor.classList.add('headerA_scrolled');
                        logo.src = './IMG/Logo.png';
                        location.src = './IMG/location.png';
                        chart.src = './IMG/cart.png';
                    });
                } else {
                    header.classList.remove('white');
                    headerA.forEach(anchor => {
                        anchor.classList.remove('headerA_scrolled');
                    logo.src = './IMG/whiteLogo-Photoroom.png';
                    location.src = './IMG/whiteLocation-Photoroom.png';
                    chart.src = './IMG/whiteChart-Photoroom.png';
                    });
                }
            });
        }
    })
    .catch(error => {
        console.error('Error fetching header:', error);
    });

// Fetch footer.html
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('GlobalFooter').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });
//Fetch main.html
fetch('main.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('Main').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });
// Slide Logic (Page 1)
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

if (slides.length && dots.length) {
    let currentSlide = 0; // Keep track of the current slide
    let currentDot = 0;

    function showSlide() {
        // Remove the 'active' class from the current slide
        slides[currentSlide]?.classList.remove('active');
        dots[currentDot]?.classList.remove('dot_active');

        // Increment the current slide index
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to 0 when reaching the end
        currentDot = (currentDot + 1) % dots.length;

        // Add the 'active' class to the next slide
        slides[currentSlide]?.classList.add('active');
        dots[currentDot]?.classList.add('dot_active');
    }

    // Initialize the first slide as active
    slides[currentSlide]?.classList.add('active');
    dots[currentDot]?.classList.add('dot_active');

    // Change slide every 3 seconds (3000 milliseconds)
    let sliderTimer = setInterval(showSlide, 3000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(sliderTimer);
            slides[currentSlide]?.classList.remove('active');
            dots[currentDot]?.classList.remove('dot_active');

            currentSlide = index;
            currentDot = index;

            slides[currentSlide]?.classList.add('active');
            dots[currentDot]?.classList.add('dot_active');

            sliderTimer = setInterval(showSlide, 3000);
        });
    });
}

// Button Logic (Page 2)
const P2button1 = document.getElementById('P2button1');
const P2button2 = document.getElementById('P2button2');
const P2button3 = document.getElementById('P2button3');

if (P2button1 && P2button2 && P2button3) {
    
    P2button1.addEventListener('click', function () {
        
        this.classList.add('P2active');
        P2button2.classList.remove('P2active')
        P2button3.classList.remove('P2active')
    });
    
    P2button2.addEventListener('click', function () {
        
        this.classList.add('P2active');
        P2button1.classList.remove('P2active')
        P2button3.classList.remove('P2active')
    });
    
    P2button3.addEventListener('click', function () {
        
        this.classList.add('P2active');
        P2button1.classList.remove('P2active')
        P2button2.classList.remove('P2active')
    });
}









