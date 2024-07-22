export function createDivWithClassAndContent(...args) {
  let div = document.createElement("div");
  for (let i = 0; i < args.length - 1; i++) {
    div.classList.add(args[i]);
  }
  div.textContent = args[args.length - 1];

  return div;
}
export function createDivWithClass(...args) {
  let div = document.createElement("div");
  args.forEach((arg) => {
    div.classList.add(arg);
  });
  return div;
}
