// Linked List hash table key/value pair
function LinkedPair(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

LinkedPair.prototype.append = function(key, value) {
  if (this.key === key) {
    this.value = value;
  } else if (!this.next) {
    this.next = new LinkedPair(key, value);
  } else {
    this.next.append(key, value);
  }
};

LinkedPair.prototype.retrieve = function(key) {
  if (this.key === key) {
    return this.value;
  } else if (!this.next) {
    return null;
  } else {
    return this.next.retrieve(key);
  }
};

function HashTable(capacity) {
  this.capacity = capacity;
  this.storage = new Array(capacity).fill(null);
}

HashTable.prototype.hash = function(key) {
  let hash = 5381;
  for (let letter of key) {
    hash = (hash << 5) + hash + letter.charCodeAt(0);
  }
  return hash & 0xffffffff;
};

HashTable.prototype.hashMOD = function(key) {
  return this.hash(key) % this.capacity;
};

HashTable.prototype.insert = function(key, value) {
  // Store the value with the given key.
  // Hash collisions should be handled with Linked List Chaining.
  // Fill this in.
  if (!this.storage.includes(null)) {
    this.resize();
  }
  let position = this.hashMOD(key);
  if (this.storage[position] === null) {
    this.storage[position] = new LinkedPair(key, value);
  } else {
    this.storage[position].append(key, value);
  }
};
HashTable.prototype.remove = function(key) {
  // Remove the value stored with the given key.
  //     Print a warning if the key is not found.
  //     Fill this in.
  let position = this.hashMOD(key);
  let oldValue;
  if (!this.storage[position]) {
    return null;
  } else if (this.storage[position].key === key) {
    oldValue = this.storage[position].value;
    this.storage[position] = this.storage[position].next;
    return oldValue;
  } else {
    let current = this.storage[position].next;
    let prev = this.storage[position];
    while (current) {
      if (current.key === key) {
        oldValue = current.value;
        prev.next = current.next;
        return oldValue;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }
};
HashTable.prototype.retrieve = function(key) {
  // Retrieve the value stored with the given key.
  // Returns None if the key is not found.
  // Fill this in.
  let position = this.hashMOD(key);
  if (!this.storage[position]) {
    return null;
  } else if (this.storage[position].key === key) {
    return this.storage[position].value;
  } else {
    let current = this.storage[position].next;
    while (current) {
      if (current.key === key) {
        return current.value;
      }
    }
    return null;
  }
};
HashTable.prototype.resize = function() {
  // Doubles the capacity of the hash table and
  //     rehash all key/value pairs.
  //     Fill this in.
  this.capacity = this.capacity * 2;
  let oldStorage = this.storage;
  this.storage = new Array(this.capacity).fill(null);
  for (let pair of oldStorage) {
    let current = pair;
    while (current) {
      this.insert(pair.key, pair.value);
      current = current.next;
    }
  }
  return;
};

// let ht = new HashTable(8);

// ht.insert("key-0", "val-0");
// ht.insert("key-1", "val-1");
// ht.insert("key-2", "val-2");
// ht.insert("key-3", "val-3");
// ht.insert("key-4", "val-4");
// ht.insert("key-5", "val-5");
// ht.insert("key-6", "val-6");
// ht.insert("key-7", "val-7");
// ht.insert("key-8", "val-8");
// ht.insert("key-9", "val-9");

// ht.insert("key-0", "new-val-0");
// ht.insert("key-1", "new-val-1");
// ht.insert("key-2", "new-val-2");
// ht.insert("key-3", "new-val-3");
// ht.insert("key-4", "new-val-4");
// ht.insert("key-5", "new-val-5");
// ht.insert("key-6", "new-val-6");
// ht.insert("key-7", "new-val-7");
// ht.insert("key-8", "new-val-8");
// ht.insert("key-9", "new-val-9");

// console.log(ht.retrieve("key-0"));

// console.log(ht.retrieve("key-1"));

// console.log(ht.retrieve("key-2"));

// console.log(ht.retrieve("key-3"));

// console.log(ht.retrieve("key-4"));

// console.log(ht.retrieve("key-5"));

// console.log(ht.retrieve("key-6"));

// console.log(ht.retrieve("key-7"));

// console.log(ht.retrieve("key-8"));

// console.log(ht.retrieve("key-9"));

module.exports = { HashTable };
