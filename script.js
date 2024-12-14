const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

let img = document.querySelector(".image");
let Name = document.querySelector(".Employee-name");
let role = document.querySelector(".role");
let about = document.querySelector(".about");
let previous = document.getElementById("previous");
let next = document.getElementById("Next");

let currentItem = 0;

// Load initial review
window.addEventListener("DOMContentLoaded", function () {
  showReview(currentItem);
});

// Function to display review based on currentItem index
function showReview(index) {
  const item = reviews[index];
  img.src = item.img;
  Name.textContent = item.name;
  role.textContent = item.job;
  about.textContent = item.text;
}

// Show previous review
previous.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; // Loop back to the last item
  }
  showReview(currentItem);
});

// Show next review
next.addEventListener("click", function () {
  currentItem++;
  if (currentItem >= reviews.length) {
    currentItem = 0; // Loop back to the first item
  }
  showReview(currentItem);
});
