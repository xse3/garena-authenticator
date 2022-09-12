const authenticator = require("./authenticator");

class Garena {
  constructor() {
    this.INTERVAL = 180;
    this.now = new Date() / 1000;
    this.lastTime = this.lastInterval * this.INTERVAL;
    this.nextTime = this.nextInterval * this.INTERVAL;
    this.currentInterval = (this.now / this.INTERVAL) | 0;
    this.nextInterval = this.currentInterval;
    this.lastInterval = this.currentInterval;
  }

  /**
   * Generate kode OTP
   * @param {string} kode
   */
  auth(kode) {
    const otp = authenticator.hotp({
      secret: kode,
      counter: this.lastInterval,
      encoding: "base32",
    });

    return otp;
  }
}

console.log(new Garena().auth("3AKBWWYEXNY3INTY"));
