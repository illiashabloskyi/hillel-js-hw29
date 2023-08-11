function generateList(array) {
  let html = '<ul>';
  
  array.forEach(item => {
      if (Array.isArray(item)) {
          html += '<li><ul>';
          html += generateList(item); // Рекурсивний виклик для вкладених списків
          html += '</ul></li>';
      } else {
          const subItems = item.split(', ');
          if (subItems.length > 1) {
              html += '<li><ul>';
              subItems.forEach(subitem => {
                  html += `<li>${subitem}</li>`;
              });
              html += '</ul></li>';
          } else {
              html += `<li>${item}</li>`;
          }
      }
  });
  
  html += '</ul>';
  return html;
}

const inputArray = ['1', ['1.1', '1.2', '1.3'], '2', '3'];
const generatedHTML = generateList(inputArray);
document.body.innerHTML = generatedHTML;
