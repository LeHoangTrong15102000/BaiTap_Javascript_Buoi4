// Kiểm tra chẵn lẻ của thẻ div rồi in ra

document.querySelector('#btnInKetQua').onclick = () => {
  // Tạo ra thẻ div

  // Dùng vòng lặp để in ra thẻ div
  for (let i = 1; i <= 10; i++) {
    // const divChild = document.createElement('div');
    // const result = document.querySelector('#inKetQua').appendChild(divChild);

    // Tạo biến đẻ hứng vào id thẻ để in ra màn hình
    const result = createChild('#inKetQua');

    if (i % 2 !== 0) {
      // result.textContent = '- div lẻ';
      // result.style.backgroundColor = 'blue';
      // result.style.fontSize = '20px';
      changeBackground('#inKetQua', '- div lẻ', 'blue', '30px');
    } else {
      // result.textContent = '- div chẵn';
      // result.style.backgroundColor = 'red';
      // result.style.fontSize = '20px';
      changeBackground('#inKetQua', '- div chẵn', 'red', '30px');
    }
  }
};

// Viết một cái hàm tạo thẻ con
const createChild = (id) => {
  const divChild = document.createElement('div');
  const rs = document.querySelector(id).appendChild(divChild);

  return rs;
};

// Viết hàm thay đổi thuộc tính thẻ div
const changeBackground = (id, text, color, size) => {
  // tạo lại cái id để thay đổi background
  const result = createChild(id);

  result.textContent = text;
  result.style.backgroundColor = color;
  result.style.fontSize = size;
};
