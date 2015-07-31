const items = [
  { name: 'name' },
  { name: 'name' },
  { name: 'name' },
  { name: 'name' },
  { name: 'name' }
];

const nItems1 = items.map((item) => item.name);

const nItems2 = items.map((item) => { return item.name; });

const nItems3 = items.map((item) => {

  const name = item.name;

  return name;
});

const nItems4 = items.map((item) => { item.name; });

const nItems5 = items.map((item) => {
  return item.name.split('').map((i) => i.toUpperCase());
});
