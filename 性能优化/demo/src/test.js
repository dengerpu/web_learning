export default () => {
  // 默认会先进行懒解析，然后到使用的时候进行饥饿解析
  // const add = (a, b) => a*b;

  // 这样会直接进行饥饿解析（告诉v8引擎后面会使用）
  const add = (a, b) => a*b;
  const num1 = 1;
  const num2 = 2;
  add(num1, num2);
}