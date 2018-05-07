var model = {
  currentCorvid: null,
  corvids: [
  { clicks: 0,
    name: 'Crow',
    imgSrc: 'img/crow.jpg',
    imgAttribution: 'Dick Daniels',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Northwestern_crow'
  },
  { clicks: 0,
    name: 'Raven',
    imgSrc: 'img/raven.jpg',
    imgAttribution: 'Jenner Hanni',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Raven'
  },
  { clicks: 0,
    name: 'Rook',
    imgSrc: 'img/rook.jpg',
    imgAttribution: 'Brian Snelson',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Rook_(bird)'
  },
  { clicks: 0,
    name: 'Jackdaw',
    imgSrc: 'img/jackdaw.jpg',
    imgAttribution: 'Scott Wieman',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Western_jackdaw'
  },
  { clicks: 0,
    name: 'Jay',
    imgSrc: 'img/jay.jpg',
    imgAttribution: 'Dick Daniels',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Jay'
  },
  { clicks: 0,
    name: 'Magpie',
    imgSrc: 'img/magpie.jpg',
    imgAttribution: 'Bengt Nyman',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Magpie'
  },
  { clicks: 0,
    name: 'Treepie',
    imgSrc: 'img/treepie.jpg',
    imgAttribution: 'Wagtail (Flickr)',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Treepie'
  },
  { clicks: 0,
    name: 'Chough',
    imgSrc: 'img/chough.jpg',
    imgAttribution: 'Ken Billington',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Chough'
  }]
}

var controller = {

  init: function() {
    model.currentCorvid = model.corvids[0];

    corvidListView.init();
    corvidView.init();
  },

  getCorvids: function() {
    return model.corvids;
  },

  getCurrentCorvid: function() {
    return model.currentCorvid;
  },

  setCurrentCorvid: function(corvid) {
    model.currentCorvid = corvid;
  },

  incrementCount: function() {
    model.currentCorvid.clicks++;
    corvidView.render();
  }
}

var corvidListView = {

  init: function() {
    this.corvidListElem = document.getElementById('corvid-list');
    this.render();
  },

  render: function() {
    var corvid, elem, i;

    var corvids = controller.getCorvids();

    this.corvidListElem.innerHTML = '';

    for (i = 0; i < corvids.length; i++) {
      corvid = corvids[i];

      newCorvidNameElem = document.createElement('li');
      newCorvidNameElem.textContent = corvid.name;

      newCorvidNameElem.addEventListener('click', (function(corvidCopy) {
        return function() {
          controller.setCurrentCorvid(corvidCopy);
          corvidView.render();
        }
      })(corvid));

      this.corvidListElem.appendChild(newCorvidNameElem);
    }
  }
}

var corvidView = {

  init: function() {
    this.corvidElem = document.getElementById('corvid');
    this.corvidNameElem = document.getElementById('corvid-name');
    this.corvidImgElem = document.getElementById('corvid-img');
    this.corvidCountElem = document.getElementById('corvid-count');

    this.corvidImgElem.addEventListener('click',function() {
      controller.incrementCount()
    })

    this.render();
  },

  render: function() {

    var currentCorvid = controller.getCurrentCorvid();

    this.corvidNameElem.textContent = currentCorvid.name;
    this.corvidImgElem.src = currentCorvid.imgSrc;
    this.corvidCountElem.textContent = currentCorvid.clicks;
  }
}

controller.init();
