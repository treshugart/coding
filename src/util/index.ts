const cache = [];
function ignoreCircularReferences (key, value) {
  if (typeof value === 'object' && value !== null) {
    if (cache.indexOf(value) !== -1) {
      return '[circular]';
    }
    cache.push(value);
  }
  return value;
}

export function pretty (value: any, indent: number = 2) {
  console.log(JSON.stringify(value, ignoreCircularReferences, indent));
}
