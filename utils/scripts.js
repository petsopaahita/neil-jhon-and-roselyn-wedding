const main = document.querySelector('#main');
const rsvpBtn1 = document.querySelector('#rsvp-btn-1');
const rsvpBtn2 = document.querySelector('#rsvp-btn-2');
const rsvpPopup = document.querySelector('#rsvp-popup-main');
const closeBtn = document.querySelector('#close-btn');
const closeBtn2 = document.querySelector('#close-btn-2');
const closeBtn3 = document.querySelector('#close-btn-3');
const brgrMenu = document.querySelector('#hamburger-menu');
const menuPopup = document.querySelector('#menu-popup');
const menuPopupContainer = document.querySelector('#menu-popup-container');

window.onload = function() {
  const heroSection = document.querySelector('#hero');
  heroSection.classList.add('animate');
}

// --------------------------------------------------------

$('#story-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#story').offset().top
  }, 1000);
});

$('#details-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#details').offset().top
  }, 1000);
});

$('#rsvp-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#rsvp-section').offset().top
  }, 1000);
});

// --------------------------------------------------

rsvpBtn1.addEventListener('click', () => {
  rsvpPopup.classList.remove('hide');
  rsvpPopup.classList.add('show');
  main.classList.add('blur');
});

rsvpBtn2.addEventListener('click', () => {
  rsvpPopup.classList.remove('hide');
  rsvpPopup.classList.add('show');
  main.classList.add('blur');
});

closeBtn.addEventListener('click', () => {
  rsvpPopup.classList.remove('show');
  rsvpPopup.classList.add('hide');
  main.classList.remove('blur');
});

rsvpPopup.addEventListener('click', (e) => {
  if (e.target === rsvpPopup) {
    e.preventDefault();
    rsvpPopup.classList.add('hide');
    rsvpPopup.classList.remove('show');
    main.classList.remove('blur');
  }
});

// ----------------------------------------------

brgrMenu.addEventListener('click', () => {
  menuPopup.classList.remove('hide');
  menuPopup.classList.add('show');
  main.classList.add('blur-2');
});

closeBtn2.addEventListener('click', () => {
  menuPopup.classList.remove('show');
  menuPopup.classList.add('hide');
  main.classList.remove('blur-2');
});

menuPopupContainer.addEventListener('click', (e) => {
  if (e.target === menuPopupContainer) {
    e.preventDefault();
    menuPopup.classList.add('hide');
    menuPopup.classList.remove('show');
    main.classList.remove('blur-2');
  }
});

// -------------------------------------------------------

$('#link-story-2').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#story').offset().top
  }, 1000);
  menuPopup.classList.add('hide');
  menuPopup.classList.remove('show');
  main.classList.remove('blur-2');
});

$('#link-details-2').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#details').offset().top
  }, 1000);
  menuPopup.classList.add('hide');
  menuPopup.classList.remove('show');
  main.classList.remove('blur-2');
});

$('#link-rsvp-2').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#rsvp-section').offset().top
  }, 1000);
  menuPopup.classList.add('hide');
  menuPopup.classList.remove('show');
  main.classList.remove('blur-2');
});

