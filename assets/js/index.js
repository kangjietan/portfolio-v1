$(document).ready(function(e) {
  $win = $(window);
  $navbar = $('#header');
  $toggle = $('.toggle-button');
  var width = $navbar.width();

  resizeLeftNav($win, $navbar, width);

  // Resize event for window (browser)
  $win.resize(() => resizeLeftNav($win, $navbar, width));

  // Toggle left navigation
  $toggle.click(() => $navbar.toggleClass("toggle-left"));

});

const resizeLeftNav = ($win , $navbar, width) => {
  if ($win.width() < 768) {
    $navbar.css({left: `-${width}px`})
  } else {
    $navbar.css({left: '0px'});
  }
}

const typed = new Typed('#typed', {
  strings: [
    'from San Francisco.',
    'a Software Engineer.'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Fade-in => IntersectionObservers
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.25
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Highlight navigation links
const sections = document.querySelectorAll('section');

const sectionOptions = {
  threshold: 0.3
};

const links = ['home-link', 'about-link', 'projects-link', 'skills-link', 'contact-link'];

const highlightOnScroll = new IntersectionObserver(function(entries, highlightOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      links.forEach(item => {
        const link = document.getElementById(item);
        if (item === `${entry.target.id}-link`) {
          link.classList.add('hightlight-link');
        } else {
          link.classList.remove('hightlight-link');
        }
      });
    }
  });
}, sectionOptions);

sections.forEach(section => {
  if (section.id === 'skills') return;
  highlightOnScroll.observe(section);
});

// Skills section navigation link
const skillSection = document.querySelector('#skills');
const skillSectionOptions = {
  threshold: 0.57
};

const highlightSectionOnScroll = new IntersectionObserver(function(entries, highlightSectionOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      links.forEach(item => {
        const link = document.getElementById(item);
        if (item === 'skills-link') {
          link.classList.add('hightlight-link');
        } else {
          link.classList.remove('hightlight-link');
        }
      });
    }
  });
}, skillSectionOptions);

highlightSectionOnScroll.observe(skillSection);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});