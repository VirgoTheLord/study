// PYQ widget: <div class="pyq" data-answer="2"> with .opt buttons and a hidden .why
document.querySelectorAll('.pyq').forEach(function (q) {
  var ans = +q.dataset.answer, opts = q.querySelectorAll('.opt'), why = q.querySelector('.why');
  opts.forEach(function (o, i) {
    o.addEventListener('click', function () {
      if (q.classList.contains('done')) return;
      q.classList.add('done');
      o.classList.add(i === ans ? 'right' : 'wrong');
      opts[ans].classList.add('right');
      why.hidden = false;
    });
  });
});
