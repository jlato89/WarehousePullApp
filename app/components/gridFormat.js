function formatData(menuOptions, numColumns) {
  const totalRows = Math.floor(menuOptions.length / numColumns);
  let totalLastRow = menuOptions.length - totalRows * numColumns;

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    menuOptions.push({ empty: true });
    totalLastRow++;
  }
  return menuOptions;
}

export default formatData;
