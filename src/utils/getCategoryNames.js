export default function (categories) {
  const obj = {};
  for (const [item, value] of Object.entries(categories)) {
    if (item === "") {
      continue;
    }
    obj[item] = value.title;
  }

  return obj;
}
