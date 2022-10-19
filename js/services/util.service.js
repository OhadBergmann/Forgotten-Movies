'use strict'

class CustomReplacer {
    constructor(value) {
      this.value = value;
    }
    [Symbol.replace](string) {
      return string.replace(this.value, '-');
    }
  }