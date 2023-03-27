export class Throttle {
  private duration: number;
  private wait: boolean;

  constructor(duration: number) {
    this.duration = duration;
    this.wait = false;
  }

  public throttle(callback: Function) {
    if (!this.wait) {
      this.wait = true;
      setTimeout(() => {
        callback();
        this.wait = false;
      }, this.duration);
    }
  }
}
