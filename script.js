class CustomSet {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  has(element) {
    return this.items.hasOwnProperty(element);
  }

  forEach(callback) {
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        callback(key);
      }
    }
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }
}

const set = new CustomSet();
set.add(1);
set.add(2);
set.add(3);

console.log(set.size());

set.forEach((item) => {
  console.log(item);
});

console.log(set.has(2));

set.delete(2);
console.log(set.size());

set.clear();
console.log(set.size());
