'use strict'

const listCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
})