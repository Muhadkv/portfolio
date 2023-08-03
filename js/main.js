$(document).ready(function () {
    'use strict';

	//********* page loader js

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1000);


	//********** menu background color change while scroll

	//$(window).on('scroll', function () {
	//	var menu_area = $('.nav-area');
	//	if ($(window).scrollTop() > 200) {
	//		menu_area.addClass('sticky_navigation');
	//	} else {
	//		menu_area.removeClass('sticky_navigation');
	//	}
	//});


	//********** menu hides after click (mobile menu)

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});


	//*********** scrollspy js

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});


	//************ smooth scroll js

	$('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

	//***** Skill bar js

	var skillbar = $(".skillbar");

	skillbar.waypoint(function () {
		skillbar.each(function () {
			$(this).find(".skillbar-child").animate({
				width: $(this).data("percent")
			}, 1000);
		});
	}, {
		offset: "80%"
	});

	//*** wow js

	new WOW().init();

	//*** Services carousel

	$("#services-carousel").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 800,
		paginationSpeed: 800,
		smartSpeed: 500,
		autoplay: true,
		singleItem: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			680:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	
	//*****Magnific Pop up js

	$('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});
	
	

});

$(document).ready( function() {

	var itemSelector = '.grid-item'; 

	var $container = $('#container').isotope({
		itemSelector: itemSelector,
		masonry: {
		  columnWidth: itemSelector,
		  isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 8]
	];

	var itemsPerPageDefault = 9;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}


	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}

			

		}

		return pages;
	}
	
	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$container.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;

		}();

		var CreatePagers = function() {

			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

			$isotopePager.html('');
			
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
					$pager.html(i+1);
					
					$pager.click(function(){
						var page = $(this).eq(0).attr(pageAtribute);
						goToPage(page);
					});

				$pager.appendTo($isotopePager);
			}

			$container.after($isotopePager);

		}();

	}

	setPagination();
	goToPage(1);

	//Adicionando Event de Click para as categorias
	$('.filters a').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);


	});

	//Evento Responsivo
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});

	

});



 $(document).ready( function() {   

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
});
    })
	

 $(document).ready( function() {   

// filter items on button click
$('.isotope-pager').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-page');

  $('.isotope-pager a').removeClass('active');
  $(this).addClass('active');
});
    })
	
	
	
	
	
	
	

$(document).ready(function(){
$('.popupimg').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});

var main = document.querySelector('.banner-area');
var nav = document.querySelector('.nav-area');


window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }
}



const hero = document.querySelector('.banner-area');
const bannerimg = document.querySelector('.banner-img');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo-holder');
const sidehead = document.querySelector('.main-header');
const sidesocial = document.querySelector('.header-social');
const footer = document.querySelector('.ftco-footer');
const mouse = document.querySelector('.mouse-scroll');
const heading = document.querySelector('.intro');

const tl = new TimelineMax();


tl.fromTo(hero, 1, { height: "0%" }, { height: "100vh", ease: Power2.easeInOut }).
fromTo(hero, 1.2, { width: "0%" }, { width: "100%", ease: Power2.easeInOut }).
fromTo(heading, 1.2, { x: "-1000%" }, { x: "0%", ease: Power2.easeInOut }, "-=0.4").
fromTo(bannerimg, 1.2, { width: "0%" }, { width: "100%", ease: Power2.easeInOut }, "-=1.5").
fromTo(sidehead, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3").
fromTo(sidesocial, 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.3").
fromTo(mouse, 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.1").
fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5").
fromTo(footer, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3");
