function average(arr: number[]): number {
  return arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
}
export { average };
