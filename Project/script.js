function showSidebar(){
    event.preventDefault();
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
    event.preventDefault();
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
     
    // Smooth Scroll for Navigation Links
    $(document).ready(function() {
        $(".menu a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
        
        // Change header style on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('header').addClass('scrolled');
            } else {
                $('header').removeClass('scrolled');
            }
        });
    });

// JavaScript for animating elements on scroll
    const animatedElements = document.querySelectorAll('.animate');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        animatedElements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                element.classList.add('animate'); // Add the animation class
            } else {
                element.classList.remove('animate'); // Remove if out of view
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll); // Check on page load
