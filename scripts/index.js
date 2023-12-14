let bagItem = [];
onLoad();


function onLoad() {
  let bagItemStr = localStorage.getItem('bagItem');
  bagItem = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemsOnHomePage();
  displayBagItemCount();

}

function addToBag(itemId) {
  bagItem.push(itemId);
  localStorage.setItem('bagItem', JSON.stringify(bagItem));
  displayBagItemCount();
}

function displayBagItemCount() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItem.length>0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItem.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
  
}

function displayItemsOnHomePage() {
  let itemContainerElement = document.querySelector('.items-container');
  if(!itemContainerElement) {
    return;
  }
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
    <div class="item-container">
      <img class="item-img" src=${item.image} alt="item image">
      <div class="rating">
          ${item.rating.stars}⭐ | ${item.rating.count}k
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="pricing">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>
  `
  })
  itemContainerElement.innerHTML = innerHTML;
};
