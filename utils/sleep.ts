const sleep = (wait: number) =>
  new Promise((resolve) => setTimeout(resolve, wait));
export default sleep;
