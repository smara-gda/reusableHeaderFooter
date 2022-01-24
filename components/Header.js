class Header {
  constructor(rootElm) {
    this.rootElm = rootElm;
    this.dataSetItems = rootElm.dataset.navbarItems.split(';');
  }

  buildNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');
    nav.appendChild(this.buildNavItems());
    return nav;
  }
  buildHeader() {
    const component = this.buildNav();
    this.rootElm.appendChild(component);
  }
  buildNavItems() {
    let li;
    let hRef;
    let ul = document.createElement('ul');
    ul.classList.add('nav-items-container');
    this.dataSetItems.forEach((element) => {
      li = document.createElement('li');
      hRef = document.createElement('a');
      hRef.setAttribute('href', '#');
      hRef.classList.add('link');
      hRef.textContent = element;
      li.appendChild(hRef);
      ul.appendChild(li);
    });
    return ul;
  }
}

const headerRoot = document.querySelector('[data-header]');
new Header(headerRoot).buildHeader();
