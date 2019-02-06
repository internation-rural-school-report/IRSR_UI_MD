class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab;
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.tabElement.addEventListener("click", () => this.selectTab()); 
  }
    selectTab(){
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => card.style.display = "none");
      this.tabElement.classList.add(".tab");
      this.cards.forEach(card => card.selectCard());
    }
  }
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
      this.cardElement.style.display = ".card";
    }
  }
  let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));