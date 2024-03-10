class SingleTon {
  private static instance: SingleTon | null = null
  private constructor() {}
  public static getInstance() {
    if (!this.instance) {
      this.instance = new SingleTon()
    }
    return this.instance
  }
  fn(){}
}
// new SingleTon() // 报错
const s = SingleTon.getInstance()
const s2 = SingleTon.getInstance()
console.log(s === s2) // true