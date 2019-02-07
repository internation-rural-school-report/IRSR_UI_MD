class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element= element; 
    // Geting the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.item = document.querySelector(`.card[data-tab="${this.data}"]`);   
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);
    // Addding a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
  };
  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tab');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     Array.from(links).forEach(item => item.classList.remove('tabs-link-selected'));
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.card');
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
    }
}
let links = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab)); 