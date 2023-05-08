const revealAnimation = (selector, delay, duration, distance, origin) => {
    ScrollReveal().reveal(selector, {
      delay,
      duration,
      distance,
      origin,
    });
  }
  
  revealAnimation(".animationYear", 200, 1000, "70px", "left");
  revealAnimation(".animationMonth", 400, 1000, "70px", "left");
  revealAnimation(".dayAnimation", 600, 1000, "70px", "left");
  
  revealAnimation(".controlDayAnimation", 200, 1000, "70px", "top");
  revealAnimation(".controlMonthAnimation", 400, 1000, "70px", "top");
  revealAnimation(".controlYearAnimation", 600, 1000, "70px", "top");
  
  revealAnimation(".button-content", 1000, 1000, "70px", "top");
  revealAnimation(".btn", 1300, 1000, "70px", "top");
  