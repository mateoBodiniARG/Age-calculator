const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btn = document.querySelector(".btn-arrow");
const errorDay = document.querySelector(".ErrorDay");
const errorMonth = document.querySelector(".ErrorMonth");
const errorYear = document.querySelector(".ErrorYear");
const results = document.querySelector(".results")
const labelYear = document.getElementById('label-year')
const labelDay = document.getElementById('label-day')
const labelMonth = document.getElementById('label-month')

function validateDay(dayValue) {
  if (dayValue === "") {
    errorDay.innerHTML = "Cannot be empty";
    labelDay.classList.add('ErrorDay')
  } else if (dayValue <= 0 || dayValue > 31) {
    errorDay.innerHTML = "invalid data";
    labelDay.classList.add('ErrorDay')
  } else if (dayValue.length < 2){
    errorDay.innerHTML = "Minimum 2 numbers";
    labelDay.classList.add('ErrorDay')
  } 
  else {
    errorDay.innerHTML = "";
    labelDay.classList.remove('ErrorDay')
  }
}

function validateMonth(monthValue) {
  if (monthValue === "") {
    errorMonth.innerHTML = "Cannot be empty";
    labelMonth.classList.add('ErrorMonth')
  } else if (monthValue > 12 || monthValue <= 0) {
    errorMonth.innerHTML = "invalid data";
    labelMonth.classList.add('ErrorMonth')
  } else if (monthValue.length < 2){
    errorMonth.innerHTML = "Minimum 2 numbers";
    labelMonth.classList.add('ErrorMonth')
  }
  else {
    errorMonth.innerHTML = "";
    labelMonth.classList.remove('ErrorMonth')
  }
}

function validateYear(yearValue) {
  if (yearValue === "") {
    errorYear.innerHTML = "Cannot be empty";
    labelYear.classList.add('ErrorYear')
  } else if (yearValue > 2023 || yearValue <= 99) {
    errorYear.innerHTML = "invalid data";
    labelYear.classList.add('ErrorYear')
  } else {
    errorYear.innerHTML = "";
    labelYear.classList.remove('ErrorYear')
  }
}


function errorHandling() {
  const dayValue = dayInput.value;
  const monthValue = monthInput.value;
  const yearValue = yearInput.value;
  validateDay(dayValue);
  validateMonth(monthValue);
  validateYear(yearValue);

  if (errorDay.innerHTML === "" && errorMonth.innerHTML === "" && errorYear.innerHTML === "") {
    const birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    const now = new Date();
    const diff = now.getTime() - birthDate.getTime();
    const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const birthMonth = birthDate.getMonth();
    const currentMonth = now.getMonth();
    let ageInMonths = currentMonth - birthMonth;
    if (ageInMonths < 0) {
      ageInMonths += 12;
    }
    const birthDay = birthDate.getDate();
    const currentDay = now.getDate();
    let ageInDays = currentDay - birthDay;
    if (ageInDays < 0) {
      const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      ageInDays += daysInLastMonth;
      ageInMonths--;
    }

    const newcontent = `<section class="results">
      <div class="animationYear">
        <p>
          <span id="yearsScreen">${ageInYears}</span>
          years
        </p>
      </div>

      <div class="animationMonth">
        <p>
          <span id="monthsScreen">${ageInMonths}</span>
          months
        </p>
      </div>

      <div class="dayAnimation">
        <p>
          <span id="daysScreen">${ageInDays}</span>
          days
        </p>
      </div>
    </section>`;
    results.innerHTML = newcontent;
  }
}


dayInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    errorHandling();
  }
})

monthInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    errorHandling();
  }
})

yearInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    errorHandling();
  }
})

btn.addEventListener("click", errorHandling);
