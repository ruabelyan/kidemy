export const calculateMonths = (step: number, min: number, max: number) => {
  let arr = [];
  for (let i = min; i <= max; i = i + step) {
    arr = [...arr, i];
  }

  return arr;
};
