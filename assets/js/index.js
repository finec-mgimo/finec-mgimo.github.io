var suggestions = document.getElementById('suggestions');
var userinput = document.getElementById('userinput');

document.addEventListener('keydown', inputFocus);

function inputFocus(e) {

  if (e.keyCode === 191 ) {
    e.preventDefault();
    userinput.focus();
  }

  if (e.keyCode === 27 ) {
    userinput.blur();
    suggestions.classList.add('d-none');
  }

}

document.addEventListener('click', function(event) {

  var isClickInsideElement = suggestions.contains(event.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none');
  }

});

/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown',suggestionFocus);

function suggestionFocus(e){

  const focusableSuggestions= suggestions.querySelectorAll('a');
  const focusable= [...focusableSuggestions];
  const index = focusable.indexOf(document.activeElement);

  let nextIndex = 0;

  if (e.keyCode === 38) {
    e.preventDefault();
    nextIndex= index > 0 ? index-1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.keyCode === 40) {
    e.preventDefault();
    nextIndex= index+1 < focusable.length ? index+1 : index;
    focusableSuggestions[nextIndex].focus();
  }

}


/*
Source:
  - https://github.com/nextapps-de/flexsearch#index-documents-field-search
  - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
*/

(function(){

  var index = new FlexSearch({
    preset: 'score',
    cache: true,
    doc: {
        id: 'id',
        field: [
          'title',
          'description',
          'content',
        ],
        store: [
          'href',
          'title',
          'description',
        ],
    },
  });

  var docs = [
    {{ range $index, $page := (where .Site.Pages "Section" "docs") -}}
      {
        id: {{ $index }},
        href: "{{ .Permalink | absURL }}",
        title: {{ .Title | jsonify }},
        description: {{ .Params.description | jsonify }},
        content: {{ .Content | jsonify }}
      },
    {{ end -}}
  ];

  index.add(docs);

  userinput.addEventListener('input', show_results, true);
  suggestions.addEventListener('click', accept_suggestion, true);

  function show_results(){

    var value = this.value;
    var results = index.search(value, 5);
    var entry, childs = suggestions.childNodes;
    var i = 0, len = results.length;

    suggestions.classList.remove('d-none');

    results.forEach(function(page) {

      entry = document.createElement('div');

      entry.innerHTML = '<a href><span></span><span></span></a>';

      a = entry.querySelector('a'),
      t = entry.querySelector('span:first-child'),
      d = entry.querySelector('span:nth-child(2)');

      a.href = page.href;
      t.textContent = page.title;
      d.textContent = page.description;

      suggestions.appendChild(entry);

    });

    while(childs.length > len){

        suggestions.removeChild(childs[i])
    }

  }

  function accept_suggestion(){

      while(suggestions.lastChild){

          suggestions.removeChild(suggestions.lastChild);
      }

      return false;
  }

}());

document.addEventListener('DOMContentLoaded', function() {

  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function( carousel ) {

    const ele = carousel.querySelector('ul');
    const scrolllength = carousel.querySelector('ul li:nth-child(2)').offsetLeft - carousel.querySelector('ul li:nth-child(1)').offsetLeft;
    const amountvisible = Math.round(ele.offsetWidth/scrolllength);
    const bullets = carousel.querySelectorAll('ol li');
    const nextarrow = carousel.querySelector('.next');
    const prevarrow = carousel.querySelector('.prev');
    bullets[0].classList.add('selected');
    var removeels = carousel.querySelectorAll('ol li:nth-last-child(-n + '+(amountvisible-1)+')');
    removeels.forEach(function(removeel) {
      removeel.remove();
    });

    const setSelected = function() {
        bullets.forEach(function(bullet) {
           bullet.classList.remove('selected');
        });
        let nthchild = (Math.round((ele.scrollLeft/scrolllength)+1));
        carousel.querySelector('ol li:nth-child('+nthchild+')').classList.add('selected');
    }

    const scrollTo = function(event) {
      event.preventDefault();
      ele.scrollLeft = ele.querySelector(this.getAttribute('href')).offsetLeft;
    }

    const nextSlide = function() {
      if(!carousel.querySelector('ol li:last-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').nextElementSibling.querySelector('a').click();
      } else {
        carousel.querySelector('ol li:first-child a').click();
      }
    }

    const prevSlide = function() {
      if(!carousel.querySelector('ol li:first-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').previousElementSibling.querySelector('a').click();
      } else {
        carousel.querySelector('ol li:last-child a').click();
      }
    }

    ele.addEventListener("scroll", debounce (setSelected));
    nextarrow.addEventListener("click", nextSlide);
    prevarrow.addEventListener("click", prevSlide);
    bullets.forEach(function(bullet) {
        bullet.querySelector('a').addEventListener('click', scrollTo);
    });

    if(carousel.getAttribute('duration')) {
      setInterval(function(){
      if (ele != document.querySelector(".carousel:hover ul")) {
          nextarrow.click();
      }
      }, carousel.getAttribute('duration'));
    }

  });

});

/**
 * Debounce functions for better performance
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
function debounce (fn) {
	let timeout;
	return function () {
		let context = this;
		let args = arguments;
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}
		timeout = window.requestAnimationFrame(function () {
			fn.apply(context, args);
		});
	};
}
