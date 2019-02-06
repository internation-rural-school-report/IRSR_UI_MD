
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element= element; 
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.item = document.querySelector(`.cards-container[data-tab="${this.data}"]`);   
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.item);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tab');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
     links.forEach(item => item.classList.remove('selected-tab'));
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('selected-tab');
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.card');
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('selected-card'));
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('selected-card');
    }
}

let links = document.querySelectorAll('.card').forEach(link => new TabLink(link)); 
