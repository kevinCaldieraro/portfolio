// LOADING SCREEN SCRIPT -----------------------------------
let loadingScreen = document.querySelector('.loading-screen');
let percent = document.querySelector('.percent');
let progress = document.querySelector('.progress');
let complete = document.querySelector('.completedLoading');
let count = 0;
let per = 0;
let loading = setInterval(animate, 30);

function animate() {
  if (count == 100 && per == 300) {
    clearInterval(loading);
    percent.classList.add('text-blink');
    complete.style.display = 'block';
    complete.classList.add('text-blink');

    showNextBtn();
  } else {
    per += 3;
    count += 1;
    progress.style.width = per + 'px';
    percent.textContent = count + '%';
  }
}

function showNextBtn() {
  let btnNext = document.querySelector('#btnNext');
  btnNext.style.visibility = 'visible';
  btnNext.style.opacity = 1;

  btnNext.addEventListener('click', hideLoadingScreen);
}

function hideLoadingScreen() {
  loadingScreen.classList.add('hide');
  toggleMainScreen();
}

// MAIN SCREEN SCRIPT -----------------------------------
let mainScreen = document.querySelector('.main-screen');
let portfolioScreen = document.querySelector('.portfolio-screen');
let openPortfolio = document.querySelector('#btnOpenPortfolio');
openPortfolio.addEventListener('click', () => {
  toggleMainScreen();
  togglePortfolioScreen();
});

let btnBackToAbout = document.querySelector('.icon-arrow-left-circle');
btnBackToAbout.addEventListener('click', () => {
  toggleMainScreen();
  togglePortfolioScreen();
});

function toggleMainScreen() {
  mainScreen.classList.toggle('toggle');
}

function togglePortfolioScreen() {
  portfolioScreen.classList.toggle('toggle');
}

// PORTFOLIO SCREEN SCRIPT -----------------------------------
let menu = document.querySelector('.menu-hamburguer');
let hamburguer = document.querySelector('.hamburguer');
hamburguer.addEventListener('click', toggleMenuHamburguer);

function toggleMenuHamburguer() {
  menu.classList.toggle('toggle');
}
