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
  } else {
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
  } else {
    errorMonth.innerHTML = "";
    labelMonth.classList.remove('ErrorMonth')
  }
}

function validateYear(yearValue) {
  if (yearValue === "") {
    errorYear.innerHTML = "Cannot be empty";
    labelYear.classList.add('ErrorYear')
  } else if (yearValue > 2023) {
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
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();

    function daysInMonth(month, year) {
      return new Date(month,year, 0).getDate();
    }

    let ageInYears = currentYear - yearValue - 1;
    let ageInMonths = currentMonth + (12 - monthValue);
    let ageInDays = currentDay + (daysInMonth(monthValue, yearValue) - dayValue);

    if (ageInMonths >= 12) {
      ageInMonths = ageInMonths - 12;
      ageInYears++;
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
    results.innerHTML = newcontent
  }
}

dayInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    errorHandling();
  }
});

monthInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    errorHandling();
  }
});

yearInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    errorHandling();
  }
});

btn.addEventListener("click", errorHandling);
