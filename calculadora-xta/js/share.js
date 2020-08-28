const shareBtn = document.querySelector('.share-btn');
const ogBtnContent = shareBtn.textContent;
const title = 'Share link';
const text = 'Testando o sharelink'
const url = 'https://www.instagram.com/thanderaugusto/'

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title,
      text
      url
    }).then(() => {
      showMessage(shareBtn, 'Ok! 😄');
    })
    .catch(err => {
      showMessage(shareBtn, `Não foi possível compartilhar 🙁`);
    });
  } else {
    showMessage(shareBtn, 'Não suporta 🙅‍');
  }
});

function showMessage(element, msg) {
  element.textContent = msg;
  setTimeout(() => {
    element.textContent = ogBtnContent;
  }, 1000);
}
