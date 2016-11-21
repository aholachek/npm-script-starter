//ES6 is supported
import obj from './another-import';

//importing from node_modules doesn't require a path
//e.g. import $ from 'jquery';

document.write('hello, the value of the test import is: ', obj.foo);
