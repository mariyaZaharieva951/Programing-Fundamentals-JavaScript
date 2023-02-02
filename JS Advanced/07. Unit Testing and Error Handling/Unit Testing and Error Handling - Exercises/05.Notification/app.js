function notify(message) {
  let notification = document.getElementById('notification');

  notification.textContent = message;
  notification.style.display = 'block';

  notification.addEventListener('click', hidden);

  function hidden(event) {
    notification.style.display = 'none';
  }
}