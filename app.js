const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// ------------------------------------------------  //


let experienceSlideIndex = 1;
let educationSlideIndex = 1;
let projectSlideIndex = 1;

showSlides(experienceSlideIndex, 'experience');
showSlides(educationSlideIndex, 'education');
showSlides(projectSlideIndex, 'project');

function plusSlides(n, section) {
  if (section === 'experience') {
    showSlides(experienceSlideIndex += n, 'experience');
  }
  if (section === 'education') {
    showSlides(educationSlideIndex += n, 'education');
  }
  if (section === 'project') {
    showSlides(projectSlideIndex += n, 'project');
  }
}

function currentSlide(n, section) {
  if (section === 'experience') {
    showSlides(experienceSlideIndex = n, 'experience');
  }
  if (section === 'education') {
    showSlides(educationSlideIndex = n, 'education');
  }
  if (section === 'project') {
    showSlides(projectSlideIndex = n, 'project');
  }
}

function showSlides(n, section) {
  let i;
  let slides = document.getElementsByClassName(`${section}-slides`);
  let dots = document.getElementsByClassName(`${section}-dot`);
  
  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  
  slides[n - 1].style.display = 'block';
  dots[n - 1].classList.add('active');
  
  // Update the slide index for the specific section
  if (section === 'experience') {
    experienceSlideIndex = n;
  } else if (section === 'education') {
    educationSlideIndex = n;
  }  else if (section === 'project') {
    projectSlideIndex = n;
  }
}


// ------------------------------------------------------- //


