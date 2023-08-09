'use strict';

const inputEl = document.getElementById('user');
const shownEL = document.getElementById('show');
inputEl.max = new Date().toISOString().split('T')[0];

function calculateAge() {
  let birthDate = new Date(inputEl.value);

  let initialDate = birthDate.getDate();
  let initialMonth = birthDate.getMonth() + 1;
  let initialYear = birthDate.getFullYear();

  let currentDate = new Date();

  let finalDate = currentDate.getDate();
  let finalMonth = currentDate.getMonth() + 1;
  let finalYear = currentDate.getFullYear();

  let outputDate, outputMonth, outputYear;
  outputYear = finalYear - initialYear;

  if (finalMonth >= initialMonth) {
    outputMonth = finalMonth - initialMonth;
  } else {
    outputYear--;
    outputMonth = 12 + finalMonth - initialMonth;
  }

  if (finalDate >= initialDate) {
    outputDate = finalDate - initialDate;
  } else {
    outputMonth--;
    outputDate = getMonth(initialYear, initialMonth) + finalDate - initialDate;
  }

  if (outputMonth < 0) {
    outputMonth = 11;
    outputYear--;
  }
  console.log(outputYear, outputMonth, outputDate);

  function getMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  shownEL.innerHTML = `${outputYear} years ${outputMonth} months ${outputDate} days Old`;

  inputEl.value = null;
}
