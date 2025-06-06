const rightNow = new Date();
console.log(rightNow);
console.log(rightNow.getFullYear());
document.querySelector('#year').textContent = rightNow.getFullYear();

const fullPath = window.location.href.split('?');
console.log(fullPath)
const valuesArray = fullPath[1].split('&')
console.log(valuesArray)

//document.querySelector('#results').textContent = pathArray