function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  button.hidden = true;
  button.addEventListener('click',hideSelf);
}

