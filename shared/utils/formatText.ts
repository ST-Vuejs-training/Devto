export function capitalize(str: string) {
  return str
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + str.slice(1))
  .join(' ');
}
