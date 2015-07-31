var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var items = [
  { name: 'name' },
  { name: 'name' },
  { name: 'name' },
  { name: 'name' },
  { name: 'name' }
];

suite
.add('Array.prototype.map', function() {

  var nItems1 = items.map(function(item) { return item.name; });
})
.add('for loop', function() {

  var nItems1 = [];

  for (var _i6 = 0; _i6 < items.length; _i6++) {
    var item = items[_i6];
    nItems1.push(item.name);
  }
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true });
