const animationOnScroll = () => {
   window.addEventListener('scroll', () => {

      const skillItems = document.querySelectorAll('.skill-item'),
         skillsAbout = document.querySelector('.about-skills'),
         aboutHeadText = document.querySelector('.about__headText'),
         aboutUnderline = document.querySelector('.about__underline'),
         aboutText = document.querySelectorAll('.about-text p'),
         aboutLine = document.querySelector('.line-about'),
         portfolioUnderline = document.querySelector('.portfolio__underline'),
         portfolioHeadText = document.querySelector('.portfolio__headText'),
         portfolioBox = document.querySelector('.portfolio-box'),
         reviews = document.querySelector('.reviews'),
         contactCard = document.querySelector('.contact-card'),
         contactBtn = document.getElementById('send-form'),
         textarea = document.querySelector('.contact-form textarea'),
         inputOne = document.getElementById('name'),
         inputTwo = document.getElementById('email'),
         contactText = document.querySelector('.contact__headText'),
         contactUnderline = document.querySelector('.contact__underline');


      if (pageYOffset >= 500) {

         skillsAbout.style.opacity = '1';
        // aboutUnderline.style.transform = 'translateX(0)';
         aboutLine.style.opacity = '1';
         aboutHeadText.style.animation = 'textAnimation 3s 0s ease-in-out';
         aboutHeadText.style.transform = 'translateX(0)';
         for (let item of aboutText) {
            item.style.animation = 'textAnimation 3s 0s ease-in-out';
            item.style.transform = 'translateX(0)';
         }

         skillItems.forEach((item, index) => {

            item = index + 1;
            let procent = 0;
            if (item == 1) procent = 92;
            if (item == 2) procent = 85;
            if (item == 3) procent = 78;
            if (item == 4) procent = 74;
            if (item == 5) procent = 67;
            skillStroke(item, procent);

         }, );
      }

      if (pageYOffset >= 750) {

         portfolioUnderline.style.opacity = '1';
         portfolioHeadText.style.animation = 'textAnimation 3s 0s ease-in-out';
         portfolioHeadText.style.transform = 'translateX(0)';


      }

      if (pageYOffset >= 900) {
         portfolioBox.style.opacity = '1';
      }
      if (pageYOffset >= 1400) {
         reviews.style.opacity = '1';
      }
      if (pageYOffset >= 1700) {


         contactUnderline.style.opacity = '1';
         contactBtn.style.opacity = '1';
         inputOne.style.transform = 'translateX(0)';
         inputTwo.style.transform = 'translateX(0)';
         textarea.style.transform = 'translateX(0)';
         contactText.style.transform = 'translateX(0)';
         contactCard.style.transform = 'translateX(0)';




      }
   });

   const skillStroke = (item, procent) => {
      const styleTag = document.getElementById('style');
      styleTag.innerHTML += `.skill-item:nth-of-type(${item}):before {
         width: ${procent}%;
      }
      .skill-item:nth-of-type(${item}):before {
         width: ${procent}%;
         animation: skill-${item} 4s 0s ease-in-out;
      }
      @keyframes skill-${item}{
         0%{
             width: 0;
             }
         100%{
             width: ${procent}%;
             }
     }
      `;
   }
};
animationOnScroll();

const portfolioAnimation = () => {

   const cards = document.querySelectorAll(".portfolio__img"),
      btnMore = document.querySelector('.portfolio-btn');
   console.log('cards: ', cards);

   for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.addEventListener('mousemove', (event) => {
         const halfHeight = card.offsetHeight / 2;
         const halfWidth = card.offsetWidth / 2;

         card.style.transform = `rotateX(${-(event.offsetY - halfHeight) / 6}deg) rotateY(${-(event.offsetX - halfWidth) / 6}deg)`;;
      })
      card.addEventListener('mouseout', () => {
         card.style.transform = 'rotate(0deg)'
      })
   }

   btnMore.addEventListener('click', () => {
      cards.forEach((item) => {
         item.classList.remove('hidden')
      });
      btnMore.style.display = 'none';
   });
};
portfolioAnimation();

const sendForm = () => {
   const sendBtn = document.getElementById('send-form'),
      myForm = document.getElementById('myForm');

   sendBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let text = '<p class="send-text">Thank you for your message , I will get back to you as soon as possible</p>';

      sendBtn.insertAdjacentHTML('afterend', text)
      sendBtn.disabled = true;
      sendBtn.style.display = 'none';


   });
};
sendForm();

const reviewSlider = () => {
   const slider = document.querySelectorAll('.slider-content'),
      arrowLeft = document.querySelector('.arrow__left'),
      arrowRight = document.querySelector('.arrow__right');

   let currentSlide = 0;

    // back to first slide
   
   // back to final slide
   if (currentSlide < 0) {
      currentSlide = slider.length - 1;
   }

   const nextSlide = () => {
   
      slider[currentSlide].classList.remove('active-slide');
      currentSlide ++;
      if (currentSlide >= slider.length) {
         currentSlide = 0; 
      }
      slider[currentSlide].classList.add('active-slide');
      
   };

   const prevSlide = () => {
      slider[currentSlide].classList.remove('active-slide');
      currentSlide --;
      if (currentSlide < 0) {
         currentSlide = slider.length - 1;
      }

      slider[currentSlide].classList.add('active-slide');
   };


   arrowLeft.addEventListener('click', prevSlide);
   arrowRight.addEventListener('click', nextSlide)

   





};
reviewSlider();

const hambMenu = () => {
   const hambBtn = document.getElementById('hamb-icon'),
      hambMenu = document.querySelector('.hamb-menu'),
      closeBtn = document.getElementById('close-btn');

      hambBtn.addEventListener('click', ()=>{
         hambMenu.style.transform = 'translateY(0)';
        
      });
      closeBtn.addEventListener('click', ()=>{
         hambMenu.style.transform = 'translateY(-200%)';
       
      });

};
hambMenu();