export function decodeHtmlEntities(str) {
  if (!str) return null;
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}
