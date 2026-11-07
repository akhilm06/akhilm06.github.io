const targets = document.querySelectorAll(".hero h1, .hero p");

targets.forEach((el) => {
  // Copy the child list first, because we change it while looping.
  for (const node of [...el.childNodes]) {
    if (node.nodeType !== Node.TEXT_NODE) continue; // skip the <br>

    const pieces = node.textContent.split(/(\s+)/); // keeps the spaces
    const fragment = document.createDocumentFragment();

    for (const piece of pieces) {
      if (piece.trim() === "") {
        fragment.append(piece);
        continue;
      }
      const word = document.createElement("span");
      word.className = "word";
      for (const char of piece) {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.textContent = char;
        word.append(letter);
      }
      fragment.append(word);
    }
    node.replaceWith(fragment);
  }
});
