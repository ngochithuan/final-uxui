// Page-to-page navigation generated from interactions.json.
// Any element with data-href behaves like a link (mouse and keyboard).
document.addEventListener('click', function (event) {
  var target = event.target.closest('[data-href]');
  if (target) window.location.href = target.dataset.href;
});
document.addEventListener('keydown', function (event) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  var target = event.target.closest('[data-href]');
  if (!target) return;
  event.preventDefault();
  window.location.href = target.dataset.href;
});
