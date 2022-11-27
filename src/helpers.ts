export function debounce(
  fn: (...args: Array<any>) => void,
  timeout = 250
): (...args: Array<any>) => void {
  let timer: NodeJS.Timeout;

  return (...args: Array<any>) => {
    clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
}
