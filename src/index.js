import allComments from '../JSON/comments.json';
import { populateComments } from './lib/populateComments';
import { removeClass } from './lib/removeClass';

// ---------------------------------------------------------------- Article comments
// get DOM comments section
const commentsSection = document.querySelector('#article-comments');
// add the comment ID to the values of each comment
for (const prop in allComments) {
  allComments[prop].commentID = prop;
}
// Convert object to an array of nested objects
const commentsArray = Object.values(allComments);

// If there are no comments, say that, else populate the comments
if (commentsArray.length > 0) {
  commentsSection.innerHTML += populateComments(commentsArray);
} else {
  commentsSection.innerHTML += `<p>no comments</p>`;
}

// ---------------------------------------------------------------- Read more comments

const readMore = document.querySelector('#read-more-comments');
readMore.addEventListener('click', revealComments);

function revealComments() {
  removeClass(commentsSection, 'collapsed');
  removeClass(document.querySelector('.overlay'), 'overlay');
  readMore.removeEventListener('click', revealComments);
  readMore.remove();
}

// ---------------------------------------------------------------- Newsletter signup
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const $form = $('#newsletter-signup');
$form.submit(function (event) {
  event.preventDefault();

  const $emailInputField = $(this).find("input[name='email']");
  const userEmail = $emailInputField.val();
  const $resultsArea = $('#result');
  const url = '/';
  const isValid = validateEmail(userEmail);

  if (!isValid) {
    $resultsArea.text('Email is not of valid format');
    $emailInputField.css('border-color', 'red');
    return;
  } else {
    // $.post(url, function (res) {
    //   $('#newsletter-signup').animate({height,'0px'})
    //   $resultsArea.text('Thanks for signing up');
    // });
    $resultsArea.text('Thanks for signing up');
    $emailInputField.css('border-color', 'white');
    $emailInputField.val(' ');
    return;
  }
});

// ---------------------------------------------  related articles carousel
const owlCarousel = $('.owl-carousel');
owlCarousel.owlCarousel({
  loop: true,
  nav: true,
  navText: ['<div class="left-arrow"></div>', '<div class="right-arrow"></div>'],
  dots: false,

  responsive: {
    0: {
      items: 1,
      margin: 60,
    },
    576: {
      items: 2,
      margin: 40,
    },
    992: {
      items: 3,
      margin: 40,
    },
  },
});
