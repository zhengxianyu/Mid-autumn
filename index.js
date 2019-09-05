$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  for (let index = 0; index < 10; index++) {
    let left = document.createElement('div');
    left.className = 'latern-left';

    let right = document.createElement('div');
    right.className = 'latern-right';

    let bottom = document.createElement('div');
    bottom.className = 'latern-bottom';

    let kongMing = document.createElement('div');
    kongMing.className = 'kongming-latern-litle';
    kongMing.style =
      'left:' +
        numberRandom(15, 0) +
      'vw; bottom:' +
        numberRandom(0, -15) +
      'vw; animation: FlyFour ' +
        numberRandom(20, 15) +
      's linear infinite; animation-delay:' +
        numberRandom(15, 1) +
      's;';

    kongMing.appendChild(left);
    kongMing.appendChild(right);
    kongMing.appendChild(bottom);
    document.getElementById('midAutumn').appendChild(kongMing);
  }

  for (let index = 0; index < 100; index++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style = 'left: ' +
      numberRandom(15, 0) +
    'vw; top: ' +
      numberRandom(45, 0) +
    'vh;';

    document.getElementById('sky').appendChild(star);
  }
})
