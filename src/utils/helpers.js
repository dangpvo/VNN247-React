export function decodeHtmlEntities(str) {
  if (!str) return "";
  const textarea = document.createElement("textarea");

  let decoded = str;
  let prev;

  // Lặp đến khi không còn thay đổi (để xử lý double hoặc triple encode)
  do {
    prev = decoded;
    textarea.innerHTML = prev;
    decoded = textarea.value;
  } while (decoded !== prev);

  return decoded;
}
