import './index.css';
import numeral from 'numeral';

const fruitValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${fruitValue} for this tasty fruit!`); // eslint-disable-line no-console
