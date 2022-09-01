class HashMap {
  constructor(){
    this.storage = [];
  }
// getHash function converts passed key into index
  getHash(key){
    key = key.toString();
    let sum = 0;
    for(let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }
    return sum;
  }
  // set key - value pair
  set(key, value){
    const hashedKey = this.getHash(key);
    this.storage[hashedKey] = value;
  }

  get(key){
    const hashedKey = this.getHash(key);
    return this.storage[hashedKey];
  }

  includes(key){
    const hashedKey = this.getHash(key);
    return this.storage[hashedKey] != null;
  }

  remove(key){
    const hashedKey = this.getHash(key);
    this.storage[hashedKey] = null;
  }
}

// const testMap = new HashMap();
// testMap.set('foo', 5);
// testMap.set('bar', 9);
// console.log(testMap);

