$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  // 孔明灯
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
    document.getElementById('latern').appendChild(kongMing);
  }

  // 星星
  for (let index = 0; index < 60; index++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style = 'left: ' +
      numberRandom(15, 0) +
    'vw; top: ' +
      numberRandom(45, 0) +
    'vh; animation-delay: ' +
      numberRandom(60, 0) +
    's; animation: Wink ' +
      numberRandom(60, 0) +
    's linear infinite;';

    document.getElementById('sky').appendChild(star);
  }

  // 上屋檐
  let yMultiple = 1.3;
  for (let index = 0; index < 7; index++) {
    let tile = document.createElement('div');
    tile.className = 'tile';
    tile.style = 'transform: rotate(45deg) translate(' +
        ((index + 1) * 0.6 - 4) +
      'vw, ' +
        (8 - (index + yMultiple)) +
      'vw); height: ' + 
        (1.5 + (index + 1) * 0.7) +
      'vw;';
    yMultiple += 0.4;
    document.getElementById('topRoof').appendChild(tile);

    let edge = document.createElement('div');
    edge.className = 'edge';
    edge.style = 'right: ' + (9.1 - (index + 1) * 1.2) + 'vw;';
    document.getElementById('topRoof').appendChild(edge);
  }

  // 下屋檐
  for (let index = 0; index < 25; index++) {
    let tile = document.createElement('div');
    tile.className = 'tile';
    tile.style = 'right: ' +
        (2 + index * 0.98) +
      'vw;';
    document.getElementById('bottomRoof').appendChild(tile);
  }
})
