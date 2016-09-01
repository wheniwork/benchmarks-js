'use strict';
let Benchmark = require('benchmark');
let moment = require('moment');

const suite = new Benchmark.Suite;

// add tests
suite.add('momentRFC#test', function() {
  moment('Thu, 01 Sep 2016 12:12:42 -0500', 'ddd, DD MMM YYYY hh:mm:ss Z');
})
.add('momentISO#test', function() {
  moment('2016-08-29T12:16:31-05:00');
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
