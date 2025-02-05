export const getFileSizes = (file: Blob) => {
  return new Promise((resolve) => {
    const _URL = window.URL || window.webkitURL;
    const img = new Image();
    const objectUrl = _URL.createObjectURL(file);
    img.onload = function () {
      _URL.revokeObjectURL(objectUrl);
      //@ts-expect-error Width and Height Problem
      resolve({ width: this.width, height: this.height });
    };
    img.src = objectUrl;
  });
};

export function toIsoString(date) {
  const tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? "+" : "-",
    pad = function (num) {
      return (num < 10 ? "0" : "") + num;
    };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    dif +
    pad(Math.floor(Math.abs(tzo) / 60)) +
    ":" +
    pad(Math.abs(tzo) % 60)
  );
}
