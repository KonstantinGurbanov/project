function rateProduct(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

 let ratedStars = 0; 

    function rateProduct(stars) {
        ratedStars = stars; 
        for (let i = 1; i <= 5; i++) {
            const star = document.querySelector('.rating > .star:nth-child(' + i + ')');
            if (i <= stars) {
                star.classList.add('rated');
            } else {
                star.classList.remove('rated');
            }
        }
        alert('Вы оценили товар на ' + stars + ' ,Спасибо мы учтем');
    }
