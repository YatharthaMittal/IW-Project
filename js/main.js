document.querySelectorAll('.erp_arrow').forEach(erp_arrow => {
    erp_arrow.addEventListener('click', function() {
        // Find the closest parent element with the class 'erp_card'
        const card = erp_arrow.closest('.erp_card');
        const content = card.querySelector('.content');
        const image = card.querySelector('.framework-image');
        const closearrow = card.querySelector('.erp_closearrow');
        const openarrow = card.querySelector('.erp_openarrow');
        let arrow = card.querySelector('.erp_arrow');

        // Toggle visibility of the content and the image
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show content
            image.style.display = 'none'; // Hide image
            closearrow.style.display = 'block';
            openarrow.style.display = 'none';
            arrow.style.transform = 'translate(260px, 0)';
            card.style.padding = '30px 30px';
        } else {
            content.style.display = 'none'; // Hide content
            image.style.display = 'block'; // Show image
            closearrow.style.display = 'none';
            openarrow.style.display = 'block';
            card.style.padding = '30px 90px';
            arrow.style.transform = 'translate(200px, 30px)';
        }
    });
});
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: '12',
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     }
//   });
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 9,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });

    // testimonials slider
    var swiper = new Swiper(".testimonials", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    // counter js
    function animateCounter(id, target, duration) {
        const counter = document.getElementById(id);
        let startValue = 0;
        const increment = target / (duration / 10); // Calculate increment based on duration

        const updateCounter = () => {
            startValue += increment;
            if (startValue < target) {
                counter.innerText = Math.floor(startValue);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target; // Ensure target value is reached
            }
        };

        updateCounter();
    }

    // Call the animateCounter function
    animateCounter("Industry", 30, 1000); 
    animateCounter("Skilled", 100, 1000); 
    animateCounter("Projects", 350, 1000); 
    animateCounter("iso", 2700, 800); 

// animation
// gsap.from(".about",{
//   opcaity:0,
//   // visibility:hidden,
//   scale:0,
//   duration:2,
//   y:500,
//   scrollTrigger:{
//     trigger:".about",
//     scroller:"body",
//     start:"top 50%",
//     scrub:2,
//     // visibility:visible
//   }
// })
gsap.from(".solutions", {
  opacity: 0,
  scale: 0,
  duration: 2,
  y: -500,
  scrollTrigger: {
    trigger: ".solutions",
    scroller: "body",
    start: "top 50%",
    end:"top 30%",
    scrub: 2
  }
});
