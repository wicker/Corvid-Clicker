var model = {
  currentCorvid: null,
  corvids: [
  { clicks: 0,
    name: Crow,
    imgSrc: 'img/crow.png',
    imgAttribution: 'Dick Daniels',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Northwestern_crow'
  },
  { clicks: 0,
    name: Raven,
    imgSrc: 'img/raven.png',
    imgAttribution: 'Jenner Hanni',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Raven'
  },
  { clicks: 0,
    name: Rook,
    imgSrc: 'img/rook.png',
    imgAttribution: 'Brian Snelson',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Rook_(bird)'
  },
  { clicks: 0,
    name: Jackdaw,
    imgSrc: 'img/jackdaw.png',
    imgAttribution: 'Scott Wieman',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Western_jackdaw'
  },
  { clicks: 0,
    name: Jay,
    imgSrc: 'img/jay.png',
    imgAttribution: 'Dick Daniels',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Jay'
  },
  { clicks: 0,
    name: Magpie,
    imgSrc: 'img/magpie.png',
    imgAttribution: 'Bengt Nyman',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Magpie'
  },
  { clicks: 0,
    name: Treepie,
    imgSrc: 'img/treepie.png',
    imgAttribution: 'Wagtail (Flickr)',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Treepie'
  },
  { clicks: 0,
    name: Cough,
    imgSrc: 'img/chough.png',
    imgAttribution: 'Ken Billington',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Chough'
  },
  ]
}

var clickableElem = document.getElementById('clickable');
var displayCountElem = document.getElementById('count');
var count = 0;

clickableElem.addEventListener('click', function(){
  count++;
  displayCountElem.innerHTML = count;
}, false);

