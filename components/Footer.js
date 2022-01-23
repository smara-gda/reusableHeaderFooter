class Footer {
  constructor(rootElm) {
    this.rootElm = rootElm;
  }

  buildFooter() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Made By Smaragda with Vanilla JavaScript';
    this.rootElm.appendChild(paragraph);
  }
}
const footerArea = document.querySelector('[data-footer]');
new Footer(footerArea).buildFooter();
