var model = {
  currentCorvid: null,
  corvids: [
  { clicks: 0,
    name: 'Crow',
    imgSrc: 'img/crow.png',
    imgAttribution: 'Dick Daniels',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Northwestern_crow'
  },
  { clicks: 0,
    name: 'Raven',
    imgSrc: 'img/raven.png',
    imgAttribution: 'Jenner Hanni',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Raven'
  },
  { clicks: 0,
    name: 'Rook',
    imgSrc: 'img/rook.png',
    imgAttribution: 'Brian Snelson',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Rook_(bird)'
  },
  { clicks: 0,
    name: 'Jackdaw',
    imgSrc: 'img/jackdaw.png',
    imgAttribution: 'Scott Wieman',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Western_jackdaw'
  },
  { clicks: 0,
    name: 'Jay',
    imgSrc: 'img/jay.png',
    imgAttribution: 'Dick Daniels',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Jay'
  },
  { clicks: 0,
    name: 'Magpie',
    imgSrc: 'img/magpie.png',
    imgAttribution: 'Bengt Nyman',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Magpie'
  },
  { clicks: 0,
    name: 'Treepie',
    imgSrc: 'img/treepie.png',
    imgAttribution: 'Wagtail (Flickr)',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Treepie'
  },
  { clicks: 0,
    name: 'Chough',
    imgSrc: 'img/chough.png',
    imgAttribution: 'Ken Billington',
    linkWikipedia: 'https://en.wikipedia.org/wiki/Chough'
  }]
}

var controller = {

  init: function() {
    // load the first corvid on the list
    model.currentCorvid = model.corvids[0];

    // load both views
    corvidListView.init();
  },

  getCorvids: function() {
    return model.corvids;
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

      this.corvidListElem.appendChild(newCorvidNameElem);
    }
    console.log(corvids);
  }
}

controller.init();
