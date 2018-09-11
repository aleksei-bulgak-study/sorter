class Sorter {
  constructor() {
    // your implementation
    this.elements = [];
    this.compareFunction = (l, r) => l - r;
  }

  add(element) {
    // your implementation
    this.elements.push(element);
  }

  at(index) {
    // your implementation
    return this.elements[index]
  }

  get length() {
    // your implementation
    return this.elements.length;
  }

  toArray() {
    // your implementation
    return this.elements;
  }

  sort(indices) {
    // your implementation
    var arrayForSorting = [];
    indices.forEach(element => {
      arrayForSorting.push(this.elements[element]);
    });
    arrayForSorting.sort(this.compareFunction);
    indices.sort((l, r) => l - r)
      .forEach((element, index) => {
        this.elements[element] = arrayForSorting[index]
      });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;