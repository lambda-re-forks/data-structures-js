function RingBuffer(capacity) {
  this.capacity = capacity;
  this.current = 0;
  this.storage = new Array(capacity).fill(null);
}

RingBuffer.prototype.append = function(item) {
  this.storage[this.current] = item;
  this.current++;
  if (this.current === this.capacity) {
    this.current = 0;
  }
};

RingBuffer.prototype.get = function() {
  return this.storage.filter(el => el !== null);
};

module.exports = { RingBuffer };

// let buffer = new RingBuffer(5);

// buffer.append("a");
// buffer.append("b");
// buffer.append("c");
// buffer.append("d");
// buffer.append("e");
// buffer.append("f");
// buffer.append("g");

// console.log(buffer.storage);
