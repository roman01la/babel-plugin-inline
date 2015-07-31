'use strict';

var items = [{ name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }];

var nItems1 = [];

for (var _i6 = 0; _i6 < items.length; _i6++) {
  var item = items[_i6];
  nItems1.push(item.name);
}

var nItems2 = [];

for (var _i22 = 0; _i22 < items.length; _i22++) {
  var item = items[_i22];
  nItems2.push(item.name);
}

var nItems3 = [];

for (var _i32 = 0; _i32 < items.length; _i32++) {
  var item = items[_i32];

  var _name = item.name;

  nItems3.push(_name);
}

var nItems4 = [];

for (var _i42 = 0; _i42 < items.length; _i42++) {
  var item = items[_i42];
  item.name;nItems4.push(undefined);
}

var nItems5 = [];

for (var _i52 = 0; _i52 < items.length; _i52++) {
  var item = items[_i52];
  nItems5.push(item.name.split('').map(function (i) {
    return i.toUpperCase();
  }));
}
