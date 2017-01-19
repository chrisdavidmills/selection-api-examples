var quoteList = document.querySelector('ul');
var createBtn = document.querySelector('.create');
var copyBtn = document.querySelector('.copy');

var selection;

document.onselectionchange = function() {
  console.log('New selection made');
  selection = document.getSelection();
};

document.onselectstart = function() {
  console.log('New selection started');
};

createBtn.addEventListener('click', function() {
  var string = selection.toString();
  var listItem = document.createElement('li');
  listItem.textContent = string;
  quoteList.appendChild(listItem);
});

copyBtn.addEventListener('click', function() {
  selection.selectAllChildren(quoteList);
  var string = selection.toString();
  console.log(string);
  var successful = document.execCommand('copy');
});
