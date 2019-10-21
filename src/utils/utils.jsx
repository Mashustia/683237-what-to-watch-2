export function getImgName(film) {
  const COLON = `:`;
  const COLON_REGEXP = /:/g;
  const SPACE = ` `;
  const LINE = `-`;

  const imgName = film
    .split(SPACE)
    .map((item) => {
      if (item.includes(COLON)) {
        const newName = item.replace(COLON_REGEXP, ``);
        return newName.toLowerCase();
      }
      return item.toLowerCase();
    })
    .join(LINE);

  return imgName;
}
