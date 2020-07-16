export function numberWithSpaces(string) {
  return string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
