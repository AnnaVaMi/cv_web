/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import 'bootstrap';


+( function() {
  console.log('Hello, UOC!');

  document.querySelector('#collapsibleNavbar').onclick = function() {
    document.querySelector('#navbar-btn').click();
  };
  
})();

