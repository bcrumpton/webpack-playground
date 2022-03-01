function collection() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "<p>Hello collection!</p>";

  return element;
}

document.body.appendChild(collection());
