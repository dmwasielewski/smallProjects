'use strict';

class PasswordGenerator {
  constructor(charsRange) {
    this.chars = charsRange;
  }

  generate(count = 8) {
    if (typeof count != 'number') {
      throw new Error('Wrong data');
    }
    if (count < 4) {
      throw new Error('Password too short');
    }
    if (count > 32) {
      throw new Error('Password too long');
    }

    let newPassword = '';
    for (let i = 0; i < count; i++) {
      const index = Math.round(Math.random() * (this.chars.length - 1));
      const newChar = this.chars[index];
      newPassword += newChar;
    }
    return newPassword;
  }
}

class PinGenerator extends PasswordGenerator {
  constructor() {
    super('0123456789');
  }

  calculateCheckSum(password) {
    // Array.from(password);
    return [...password].reduce((acc, curr) => acc + parseInt(curr), 0);
  }
}

const generator = new PinGenerator();
const pin = generator.generate(6);
