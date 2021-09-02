var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
var i = (currentSlide ? currentSlide : 0) + 1;
$st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
slidesToShow: 3,
focusOnSelect: true,
dots: false,
infinite: true,
variableWidth: true,
nextArrow: $(".next"),
prevArrow :$(".prev"),
responsive: [
    {
    breakpoint: 768,
    settings: {
        arrows: false,
        slidesToShow: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
]
});
$('document').ready(function(){
    $('button.navbar-toggle').click(function(){
      var navbar_obj = $($(this).data("target"));
      navbar_obj.toggleClass("open");
    });
  });

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

// accordion
let accordion = document.querySelector('.qa_list');
let items = accordion.querySelectorAll('.qa_list-item');
let questions = accordion.querySelectorAll('.qa_list-item-open-icon');

questions.forEach(question => question.addEventListener('click', toggleAccordion));

function toggleAccordion(){
    thisItem = this.parentNode;
    items.forEach(item => {
        if (thisItem == item){
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    })
}