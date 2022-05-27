function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel___arrow_left');
  let countOfImages = 1;
  let countClick = 0;


  carouselArrowRight.addEventListener('click', () => {
    for(let i=0; i>countOfImages.length; i++){
    if(countOfImages === 4) {
      carouselArrowRight.style.display = 'none';
    } 
    if (countOfImages<4) {
      carouselArrowRight.style.display = '';
      carouselArrowLeft.style.display = '';
      countClick = ++countClick;
      carousel.style.transform = `translateX(-${carousel.offsetWidth*(countClick)}px)`;
    }
    if (countOfImages==1) {
      carouselArrowLeft.style.display = 'none';
    }
  }
  });
  
  carouselArrowLeft.addEventListener('click', () => {
    for(let i=0; i>countOfImages.length; i++){
    if(countOfImages === 1) {
      carouselArrowLeft.style.display = 'none'
    } 
    if(countOfImages>1) {
      carouselArrowRight.style.display = '';
      carouselArrowLeft.style.display = '';
      countClick = --countClick;
      carousel.style.transform = `translateX(-${carousel.offsetWidth*(countClick)}px)`;
    }
    if(countOfImages ===4) {
      carouselArrowRight.style.display = 'none'
    }
  }
  });
  }
