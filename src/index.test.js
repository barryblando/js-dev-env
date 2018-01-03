import { expect } from 'chai';
import jsdom from 'jsdom/lib/old-api.js';
import fs from 'fs';

/**
 * https://github.com/tmpvar/jsdom/blob/master/lib/old-api.md
 */

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    // jsdom = virtual dom in-memory, Start
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0]; // array-ish
      expect(h1.innerHTML).to.equal('Hello World!');
      done(); // test done expect T/F
      window.close(); // end jsdom
    });
  })
})
