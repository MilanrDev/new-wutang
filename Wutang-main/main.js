// create name simulatro based on persons  choices
// they should select on of the 6 dropdown  options
// help fromm Jerry

const vacation = document.querySelector('.vacay')
const superstar = document.querySelector('.singers')
const best = document.querySelector('.city')
const cart = document.querySelector('.cartoon')
const money = document.querySelector('.mulah')


// runs "getName" function when clicked
document.querySelector('button').addEventListener('click', getName)


function getName() {
  // created a const variable with an array of names inside
  const ppl = ['Ghost Faced Killa', 'RZA', 'Cappadonna', 'Masta Killa', 'U-God', 'Inspectah Deck', 'Raekwon', 'GZA', 'Method Man' , 'ODB']
  // const img = ['images/gfk.jpg', 'images/rza.jpg', 'images/cap.jpg', 'images/masta.jpg', 'images/u.jpg', 'images/ins.jpg', 'images/rae.jpg', 'images/gza.jpg', 'images/method.jpg']
  let opSum = parseInt(vacation.value) + parseInt(superstar.value) + parseInt(cart.value) + parseInt(money.value) + parseInt(best.value)
  name;


  // similar to the 'if' statement
  // in case the value sum is ____ do this
  // break is like "breaking the loop" or stoping the swith statement

  switch (opSum) {
    case 50:
      name = ppl[0];
      document.querySelector('img').src = 'images/gfk.jpg';
      break;
    case 51:
      name = ppl[1];
      document.querySelector('img').src = 'images/rza.jpg';
      break;
    case 52:
      name = ppl[2];
      document.querySelector('img').src = 'images/cap.jpg';
      break;
    case 53:
      name = ppl[3];
      document.querySelector('img').src = 'images/masta.jpg';


      break;
    case 54:
      name = ppl[4];
      document.querySelector('img').src = 'images/u.jpg';
      break;
    case 55:
      name = ppl[5];
      document.querySelector('img').src = 'images/ins.jpg'
      break;
    case 56:
      name = ppl[6];
      document.querySelector('img').src = 'images/rae.jpg';

      break;
    case 57:
      name = ppl[7];
      document.querySelector('img').src = 'images/gza.jpg';

      break;
    case 58:
      name = ppl[8];
      document.querySelector('img').src = 'images/method.jpg';

      break;
    case 59:
      name = ppl[9];
      document.querySelector('img').src = 'images/ol.jpg';

      break;
    case 60:
      name = ppl[0];
      document.querySelector('img').src = 'images/gfk.jpg';

      break;
    case 61:
      name = ppl[5];
      document.querySelector('img').src = 'images/ins.jpg';

      break;
    case 62:
      name = ppl[3];
      document.querySelector('img').src = 'images/masta.jpg';

      break;
    case 63:
      name = ppl[2];
      document.querySelector('img').src = 'images/cap.jpg';

      break;
    case 64:
      name = ppl[4];
      document.querySelector('img').src = 'images/u.jpg';

      break;
    case 65:
      name = ppl[7];
      document.querySelector('img').src = 'images/gza.jpg';

      break;
    case 66:
      name = ppl[9];
      document.querySelector('img').src = 'images/ol.jpg';

      break;
    case 67:
      name = ppl[6];
      document.querySelector('img').src = 'images/rae.jpg';

      break;
    case 68:
      name = ppl[8];
      document.querySelector('img').src = 'images/method.jpg';

      break;
    case 69:
      name = ppl[4];
      document.querySelector('img').src = 'images/u.jpg';

      break;
    case 70:
      name = ppl[2];
      document.querySelector('img').src = 'images/cap.jpg';

      break;




  }

  // target the HTML element by id and the text that appears is whatever name is generated
  document.getElementById('results').innerText = name

}
