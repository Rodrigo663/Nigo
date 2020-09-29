import '@babel/polyfill';
import $ from 'jquery';



import { sendCircle } from './circle.js'
import { sendFunc } from './body.js';

const body = $('body');
const main = $(".bike__main");


if(body.length) {
    sendFunc();
}

if(main.length) {
    sendCircle();
    
}

