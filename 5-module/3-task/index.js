function initCarousel() {
  let carousel = document.getElementsByClassName('carousel__inner')[0];
  let carouselArrowRight = document.getElementsByClassName('carousel__arrow_right')[0];
  let carouselArrowLeft = document.getElementsByClassName('carousel__arrow_left')[0];
  let countOfImages = document.getElementsByClassName('carousel__slide').length-1; // 3
  let widthImages = 0;

  if (widthImages === 0) {
    carouselArrowLeft.style.display = 'none';
  }
  
  carouselArrowRight.addEventListener('click', () => {
    widthImages -= carousel.offsetWidth;

    carousel.style.transform = `translateX(${widthImages}px)`;

    console.log(widthImages/countOfImages, carousel.offsetWidth);
    if (widthImages/countOfImages === -carousel.offsetWidth) {
      carouselArrowRight.style.display = 'none';
    }

    if (widthImages/countOfImages !== 0) { 
      carouselArrowLeft.style.display = '';
    }
  });
  
  carouselArrowLeft.addEventListener('click', () => {
    widthImages += carousel.offsetWidth;

    carousel.style.transform = `translateX(${widthImages}px)`;

    if (widthImages/countOfImages === 0) { 
      carouselArrowLeft.style.display = 'none';
    }

    if (widthImages/countOfImages !== -carousel.offsetWidth) {
      carouselArrowRight.style.display = '';
    }
  });
}
