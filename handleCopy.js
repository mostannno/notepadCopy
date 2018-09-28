export default function handleCopy(e) {
  let str = window.getSelection().toString();
  if (!str) return;
  str = str.split('').map((item) => {
    if (item.charCodeAt(0) === 10) {
      return '\r\n';
    }
    return item;
  }).join('');
  e.clipboardData.setData('text/plain', str);
  e.preventDefault();
}