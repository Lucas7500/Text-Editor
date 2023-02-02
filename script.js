function bold() {
  let text = document.getElementById("text")

  if (text.style.fontWeight === "bold") {
    return (text.style.fontWeight = "normal")
  }

  text.style.fontWeight = "bold"
}

function italic() {
  let text = document.getElementById("text")

  if (text.style.fontStyle === "italic") {
    return (text.style.fontStyle = "normal")
  }

  text.style.fontStyle = "italic"
}

function underline() {
  let text = document.getElementById("text")

  if (text.style.textDecoration === "underline") {
    return (text.style.textDecoration = "none")
  }
  text.style.textDecoration = "underline"
}

function lowerCase() {
  return textTransform("lowercase")
}

function upperCase() {
  return textTransform("uppercase")
}

function capitalize() {
  return textTransform("capitalize")
}

function textTransform(edit) {
  let text = document.getElementById("text")

  if (text.style.textTransform === edit) {
    return (text.style.textTransform = "none")
  }

  text.style.textTransform = edit
}
